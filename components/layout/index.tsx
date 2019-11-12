import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import Sidebar from './sidebar';
import SidebarContext from './sidebar-context';

export type BasicLayoutProps = {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
} & typeof defaultProps;

const defaultProps = {
    prefixCls: 'ty-layout',
};

/**
 * Template layout for generating header, footer and content
 * @param props
 * @constructor
 */
const BasicLayout = (props: BasicLayoutProps) => {
    const { prefixCls, className, style, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return <div className={cls} style={style} {...restProps}>{children}</div>;
};

/**
 * Layout component
 * @param props
 * @constructor
 */
const Layout = (props: BasicLayoutProps) => {
    const { prefixCls, className, style, children, ...restProps } = props;
    const [hasSidebar, setHasSidebar] = useState(false);
    const cls = classnames(prefixCls, className, {
        [`${prefixCls}_has-sidebar`]: hasSidebar,
    });

    return (
        <SidebarContext.Provider
            value={{ addSidebar: () => setHasSidebar(true), removeSidebar: () => setHasSidebar(false) }}>
            <div className={cls} style={style} {...restProps}>{children}</div>
        </SidebarContext.Provider>
    );
};

/**
 * Generator
 * @param props
 */
const layoutGenerator = (props: BasicLayoutProps): React.ReactNode => {
    return (layoutProps: BasicLayoutProps) => {
        return (<BasicLayout {...layoutProps} prefixCls={props.prefixCls}/>);
    };
};

const Header = layoutGenerator({ prefixCls: 'ty-layout-header' });
const Footer = layoutGenerator({ prefixCls: 'ty-layout-footer' });
const Content = layoutGenerator({ prefixCls: 'ty-layout-content' });

Layout.defaultProps = defaultProps;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sidebar = Sidebar;

export default Layout;