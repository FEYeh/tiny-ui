import React, { ReactNode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Notification, { NotificationProps } from './notification';
import raf from 'raf';
import { camelCaseToDash } from '../_utils/general';

const className = 'ty-notification-container';
const OFFSET = 15;

type Direction = 'top' | 'bottom';
type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
type Options = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode,
    duration?: number,
    placement?: NotificationPlacement,
    onClose?: React.MouseEventHandler,
    onClick?: React.MouseEventHandler,
};
type UnmountDom = (
    queryName: string, containerDiv: HTMLElement, position: number, height: number, direction: Direction,
) => void;

const unmountDom: UnmountDom = (queryName, containerDiv, position, height, direction) => {
    unmountComponentAtNode(containerDiv);
    document.body.removeChild(containerDiv);
    raf(() => {
        const containers = document.querySelectorAll(`.${queryName}`);
        const len = containers.length;
        for (let i = 0; i < len; i++) {
            const element = containers[i] as HTMLElement;
            const elementPosition = parseInt((element as HTMLElement).style[direction] || '0', 10);
            elementPosition > position && (element.style[direction] = `${elementPosition - height - OFFSET}px`);
        }
    });
};

const createComponent = (options: Options) => {
    const placement = options.placement || 'topRight';
    const queryName = `${className}_${camelCaseToDash(placement)}`;
    const containers = document.querySelectorAll(`.${queryName}`);
    const lastContainer = containers.length > 0 ? (containers[containers.length - 1] as HTMLElement) : null;

    const div = document.createElement('div');
    div.className = `${className} ${queryName}`;
    document.body.appendChild(div);

    const offset = OFFSET;
    const direction: Direction = placement.includes('top') ? 'top' : 'bottom';
    const position = lastContainer ? parseInt(lastContainer.style[direction] || '0', 10) +
        lastContainer.offsetHeight + offset : offset;
    div.style[direction] = `${position}px`;

    const props: NotificationProps = {
        title: options.title,
        description: options.description,
        footer: options.footer,
        duration: options.duration,
        onClose: options.onClose,
        onClick: options.onClick,
        didMount: () => {
            // When notification component mounted, set up the position to display the entry animation
            placement.includes('Right') ? div.style.right = `0px` : div.style.left = `0px`;
        },
        willUnmount: (height) => {
            const updatedPosition = parseInt(div.style[direction] || '0', 10);
            unmountDom(queryName, div, updatedPosition, height, direction);
        },
    };
    const element = React.createElement(Notification, props);
    render(element, div);
};

const open = (options: Options = {}) => {
    createComponent(options);
};

export default {
    open,
};
