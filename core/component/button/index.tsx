import * as React from 'react';
import './style/index.css';
import classNames from 'classnames';
import {IoIosSync} from 'react-icons/io';
import Group from './button-group';

export type ButtonColors = 'default' | 'primary' | 'blue' | 'red' | 'yellow' | 'green' | 'pink';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonProps = {
    color?: ButtonColors,
    loading?: boolean,
    disabled?: boolean,
    block?: boolean,
    outline?: boolean,
    size?: ButtonSizes,
    round?: boolean,
    ripple?: boolean,
    dash?: boolean,
    icon?: React.ReactNode,
    link?: boolean,
    className?: string,
    children?: React.ReactNode;
    prefixCls?: string,

    // Allow to pass html attribute
    [others: string]: any,
};

const renderIcon = (icon: React.ReactNode, loading: boolean = false) => {
    if (loading) {
        return <IoIosSync className="ty-btn__loader"/>;
    } else {
        return icon;
    }
};

const Button = (props: ButtonProps) => {
    const {
        color, size, block, icon, link, loading, dash, disabled, outline,
        round, ripple, children, className, prefixCls, ...others
    } = props;
    const cls = classNames(
        className,
        prefixCls,
        link ? [`${prefixCls}_${color}_link`] :
            (outline ? [`${prefixCls}_${color}_outline`] : [`${prefixCls}_${color}`]),
        size && `${prefixCls}_${size}`,
        {
            [`${prefixCls}_block`]: block,
            [`${prefixCls}_round`]: round,
            [`${prefixCls}_ripple`]: ripple,
            [`${prefixCls}_dash`]: outline && dash,  // Only available outline style
            [`ty-btn_${color}_disabled`]: disabled || loading,
        },
    );
    return (
        <button
            className={cls}
            disabled={disabled || loading}
            type="button"
            {...others}>
            {renderIcon(icon, loading)}
            {children}
        </button>
    );
};

Button.defaultProps = {
    prefixCls: 'ty-btn',
    size: 'md',
    color: 'default',
};

Button.Group = Group;

export default Button;