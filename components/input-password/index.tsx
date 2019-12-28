import React, { useState } from 'react';
import classNames from 'classnames';
import Input, { InputProps } from '../input';
import Icon from '../icon';

export interface InputPasswordProps extends InputProps {
  suffix?: boolean;
  visibleOnClick?: () => void;
  children?: React.ReactNode;
}

const InputPassword = (props: InputPasswordProps) => {
  const {
    suffix = true,
    visibleOnClick = () => {},
    prefixCls = 'ty-input-pwd',
    className,
    style,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);
  const [visible, setVisible] = useState(false);

  const renderSuffix = () => (
    <div
      className={`${prefixCls}__suffix`}
      onClick={() => {
        setVisible(!visible);
        visibleOnClick();
      }}>
      {visible ? <Icon type="eye" /> : <Icon type="eye-close" />}
    </div>
  );

  return (
    <Input
      className={cls}
      style={style}
      type={visible ? 'text' : 'password'}
      suffix={suffix ? renderSuffix() : null}
      {...otherProps}
    />
  );
};

export default InputPassword;
