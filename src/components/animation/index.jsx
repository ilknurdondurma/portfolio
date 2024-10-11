/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { AnimateContainer } from 'react-animate-container';
import { Outlet } from 'react-router-dom';

export default function Animate({ children, animate = 'backInLeft', duration = 2 }) {
  const AnimationComponent = AnimateContainer[animate];

  return (
    <AnimationComponent duration={duration}>
      <div>
        {children}
      </div>
      <Outlet />
    </AnimationComponent>
  );
}
