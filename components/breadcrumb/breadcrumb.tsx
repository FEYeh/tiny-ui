import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { BreadcrumbItemProps } from './breadcrumb-item';
import { BaseProps } from '../_utils/props';

export interface BreadcrumbProps extends BaseProps {
  separator?: React.ReactNode;
  children: ReactElement<BreadcrumbItemProps>;
}

const Breadcrumb: React.FC<BreadcrumbProps> & { Item?: any } = (props: BreadcrumbProps) => {
  const { separator = '/', prefixCls = 'ty-breadcrumb', className, style, children } = props;
  const cls = classNames(prefixCls, className);

  return (
    <nav className={cls} style={style}>
      <ol className={`${prefixCls}__ol`}>
        {React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>) => {
          const childProps = {
            ...child.props,
            separator,
          };
          return React.cloneElement(child, childProps);
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
