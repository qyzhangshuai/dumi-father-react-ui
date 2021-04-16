import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { defaultPrefixCls } from '@/_utils/config';

export type AnimationName = 'top' | 'left' | 'bottom' | 'right' | 'center';
export const animationPrefix = `${defaultPrefixCls}-animation`;

export type TransitionProps = {
  /**
   * @description 指定动画类型
   * @default "top"
   */
  animation?: AnimationName;
  /**
   * @description 自定义动画类名,若存在则animation失效
   * @default
   */
  className?: string;
} & CSSTransitionProps;

const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  animation = 'top',
  ...restProps
}) => {
  return (
    <CSSTransition
      // @ts-ignore
      classNames={classNames(
        className ? className : `${animationPrefix}-${animation}`,
      )}
      {...restProps}
    >
      <>{children}</>
    </CSSTransition>
  );
};
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
