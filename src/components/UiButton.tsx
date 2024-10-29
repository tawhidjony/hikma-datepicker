
import React from 'react';

type PropsButton = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UiButton = (props: PropsButton) => {
  return <button
    onClick={props.onClick}
    type={props.type}
    disabled={props.disabled}
    style={props.style}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
  >{props.children || 'Button'}</button>
}

export default UiButton