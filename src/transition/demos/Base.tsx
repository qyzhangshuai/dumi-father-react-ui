import React, { useState } from 'react';
import { Transition } from 'z-react-ui';
import { AnimationName } from 'z-react-ui/lib/transition';
import { Button } from 'antd';

export default () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState<AnimationName>('top');
  const handleClick = (animation: AnimationName) => {
    setShow(!show);
    setAnimation(animation);
  };

  return (
    <>
      <Button onClick={() => handleClick('top')}>从上向下</Button>
      <Button onClick={() => handleClick('bottom')}>从下向上</Button>
      <Button onClick={() => handleClick('left')}>从左向右</Button>
      <Button onClick={() => handleClick('right')}>从右向左</Button>
      <Button onClick={() => handleClick('center')}>从中间向四周</Button>

      <Transition animation={animation} in={show} timeout={3000}>
        <div style={{ background: '#1890ff', height: 100 }}>1</div>
      </Transition>
    </>
  );
};
