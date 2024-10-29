
import React from 'react';

type PropsInput = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onTouchCancel?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onTouchMove?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onWheel?: (event: React.WheelEvent<HTMLInputElement>) => void;
  onScroll?: (event: React.UIEvent<HTMLInputElement>) => void;
}

const UiInput = (props: PropsInput) => {
  return <input
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    onTouchStart={props.onTouchStart}
    onTouchEnd={props.onTouchEnd}
    onTouchCancel={props.onTouchCancel}
    onTouchMove={props.onTouchMove}
    onWheel={props.onWheel}
    onScroll={props.onScroll}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
  />
}

export default UiInput