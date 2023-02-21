import React from "react";


interface buttonProps {
  border: string;
  color: string;
  children?: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button = (props: buttonProps) => { 
  return (
    <button 
      onClick={props.onClick}
      style={{
         backgroundColor: props.color,
         border: props.border,
         borderRadius: props.radius,
         height : props.height,
         width : props.width
      }}
    >
    {props.children}
    </button>
  );
}
export default Button