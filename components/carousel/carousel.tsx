import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CarouselItemProps } from './carousel-item';
import { BaseProps } from '../_utils/props';
import DotGroup, { DotPosition } from './dot-group';
import ArrowGroup from './arrow-group';

export type EasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface CarouselProps extends BaseProps {
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  interval?: number;
  animatedDuration?: number;
  dotPosition?: DotPosition;
  easing?: EasingType;
  beforeChange?: () => void;
  afterChange?: () => void;
  children: React.ReactElement<CarouselItemProps>[];
}

const Carousel: React.FC<CarouselProps> & { Item?: any } = (props: CarouselProps) => {
  const {
    prefixCls = 'ty-carousel',
    dots = true,
    arrows = true,
    interval = 3000,
    animatedDuration = 500,
    autoplay = true,
    dotPosition = 'bottom',
    easing = 'linear',
    className,
    style,
    children,
  } = props;
  const cls = classNames(prefixCls, className);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [width, setWidth] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [intervalTimer, setIntervalTimer] = useState<number | undefined>(undefined);

  const animate = (distance: number, isAnimated = true) => {
    if (containerRef.current) {
      const container = containerRef.current as HTMLUListElement;
      container.style.transitionDuration = isAnimated ? `${animatedDuration}ms` : '0s';
      container.style.left = parseInt(container.style.left!, 10) + distance + 'px';
    }
  };

  const movePrev = (): void => {
    const prevIndex = currIndex - 1;
    setCurrIndex(prevIndex);
    animate(width);
    if (prevIndex === -1) {
      setCurrIndex(children.length - 1);
      window.setTimeout(() => {
        const distance = children.length * width;
        animate(-distance, false);
      }, animatedDuration);
    }
  };

  const moveNext = (): void => {
    const nextIndex = currIndex + 1;
    setCurrIndex(nextIndex);
    animate(-width);
    if (nextIndex === children.length) {
      setCurrIndex(0);
      window.setTimeout(() => {
        const distance = children.length * width;
        animate(distance, false);
      }, 600);
    }
  };

  const dotItemOnClick = (index: number): void => {
    setCurrIndex(index);
    animate(width * Math.abs(index - currIndex) * (index > currIndex ? -1 : 1));
  };

  const getChildrenList = () => {
    const finalChildren = [];
    finalChildren.push(children[children.length - 1]);
    React.Children.forEach(children, (child: React.ReactElement<CarouselItemProps>) => {
      finalChildren.push(child);
    });
    finalChildren.push(children[0]);
    return finalChildren;
  };

  useEffect(() => {
    if (outerRef.current && containerRef.current) {
      const outerWidth = (outerRef.current as HTMLDivElement).clientWidth;
      setWidth(outerWidth);
      (containerRef.current as HTMLUListElement).style.left = `${-outerWidth}px`;
    }
  }, []);

  useEffect(() => {
    if (autoplay) {
      const intervalTimer = window.setInterval(() => {
        moveNext();
      }, interval);
      setIntervalTimer(intervalTimer);
    }

    return (): void => {
      window.clearInterval(intervalTimer);
    };
  }, [autoplay]);

  return (
    <div ref={outerRef} className={cls} style={style}>
      <ul
        ref={containerRef}
        className={`${cls}__container`}
        style={{
          transitionTimingFunction: easing,
          width: width * (children.length + 2),
        }}>
        {getChildrenList().map((child: React.ReactElement<CarouselItemProps>, index) => {
          const childProps = {
            key: index,
            ...child.props,
            style: {
              width,
              ...child.props.style,
            },
          };
          return React.cloneElement(child, childProps);
        })}
      </ul>
      {arrows && (
        <ArrowGroup
          leftBtnOnClick={movePrev}
          rightBtnOnClick={moveNext}
          prefixCls={prefixCls}
          style={{ width }}
        />
      )}
      {dots && (
        <DotGroup
          activeIndex={currIndex}
          position={dotPosition}
          amount={children.length}
          itemOnClick={dotItemOnClick}
          prefixCls={prefixCls}
        />
      )}
    </div>
  );
};

export default Carousel;
