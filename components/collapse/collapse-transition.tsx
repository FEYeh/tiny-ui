import React, { PureComponent } from 'react';

type CollapseTransitionProps = {
  duration: number;
  isShow: boolean;
  children: React.ReactElement;
};

type CollapseTransitionState = {
  isShow: boolean;
};

export default class CollapseTransition extends PureComponent<
  CollapseTransitionProps,
  CollapseTransitionState
> {
  selfRef: any;
  leaveTimer: any;
  enterTimer: any;

  static defaultProps = {
    duration: 300,
  };

  state = {
    isShow: false,
  };

  componentDidMount(): void {
    this.beforeEnter();
    this.props.isShow && this.enter();
  }

  componentWillUnmount(): void {
    this.beforeLeave();
    this.leave();
  }

  static getDerivedStateFromProps(
    nextProps: Readonly<CollapseTransitionProps>,
    prevState: Readonly<CollapseTransitionState>
  ) {
    if (nextProps.isShow !== prevState.isShow) {
      return {
        isShow: nextProps.isShow,
      };
    }

    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<CollapseTransitionProps>,
    prevState: Readonly<CollapseTransitionState>
  ): void {
    if (this.props.isShow !== prevProps.isShow) {
      this.triggerChange(this.props.isShow);
    }
  }

  triggerChange(isShow: boolean): void {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    if (isShow) {
      this.beforeEnter();
      this.enter();
    } else {
      this.beforeLeave();
      this.leave();
    }
  }

  beforeEnter(): void {
    const el = this.selfRef;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = '0';
  }

  enter(): void {
    const el = this.selfRef;
    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
    } else {
      el.style.height = '';
    }

    el.style.overflow = 'hidden';

    this.enterTimer = setTimeout(() => this.afterEnter(), this.props.duration);
  }

  afterEnter(): void {
    const el = this.selfRef;
    el.style.display = 'block';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  }

  beforeLeave(): void {
    const el = this.selfRef;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
    }
    el.style.overflow = 'hidden';
  }

  leave(): void {
    const el = this.selfRef;
    if (el.scrollHeight !== 0) {
      el.style.height = 0;
    }
    this.leaveTimer = setTimeout(() => this.afterLeave(), this.props.duration);
  }

  afterLeave(): void {
    const el = this.selfRef;
    if (!el) {
      return;
    }

    el.style.display = 'none';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  }

  render(): React.ReactNode {
    return (
      <div
        className="collapse-transition"
        style={{ overflow: 'hidden' }}
        ref={el => (this.selfRef = el)}>
        {this.props.children}
      </div>
    );
  }
}
