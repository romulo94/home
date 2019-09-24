import React from 'react';

function Smartphone({ size, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      x="0"
      y="0"
      enableBackground="new 0 0 35 35"
      version="1.1"
      viewBox="0 0 35 35"
      xmlSpace="preserve"
      {...rest}
    >
      <path d="M25.302 0H9.698a2.37 2.37 0 00-2.364 2.364v30.271A2.371 2.371 0 009.698 35h15.604a2.37 2.37 0 002.364-2.364V2.364A2.37 2.37 0 0025.302 0zM15.004 1.704h4.992a.286.286 0 010 .573h-4.992a.286.286 0 110-.573zM17.5 33.818a1.182 1.182 0 110-2.364 1.182 1.182 0 010 2.364zm8.521-3.193H8.979V3.749h17.042v26.876z" />
    </svg>
  );
}

export default Smartphone;
