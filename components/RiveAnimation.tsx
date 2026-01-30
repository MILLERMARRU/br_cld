'use client';

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface RiveAnimationProps {
  src: string;
  stateMachine?: string;
  autoplay?: boolean;
  className?: string;
}

export default function RiveAnimation({
  src,
  stateMachine = 'State Machine 1',
  autoplay = true,
  className = ''
}: RiveAnimationProps) {
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachine,
    autoplay,
  });

  // Example of how to control the animation
  const hoverInput = useStateMachineInput(rive, stateMachine, 'Hover');

  useEffect(() => {
    if (rive) {
      console.log('Rive animation loaded successfully');
    }
  }, [rive]);

  return (
    <div
      className={className}
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
    >
      <RiveComponent />
    </div>
  );
}
