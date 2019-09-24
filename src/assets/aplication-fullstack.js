import React from 'react';

function AplicationFullStack({ size, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 64 64"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      width={`${size}px`}
      height={`${size}px`}
      {...rest}
    >
      <path fill="#F0BC5E" d="M2 6H16V18H2z" />
      <path
        fill="#F0BC5E"
        d="M18 46H6a2 2 0 00-2 2v10h16V48a2 2 0 00-2-2zM62 12H44V4a2 2 0 012-2h14a2 2 0 012 2v8z"
      />
      <path fill="#F0BC5E" d="M51 49H59V59H51z" />
      <path d="M4 27h4v5h9.689v-2H10v-3h4c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3H4C2.346 1 1 2.346 1 4v20c0 1.654 1.346 3 3 3zm10-2H4a1 1 0 01-1-1v-5h12v5a1 1 0 01-1 1zM3 17V7h12v10H3zM4 3h10a1 1 0 011 1v1H3V4a1 1 0 011-1z" />
      <path d="M7 21H11V23H7z" />
      <path d="M60 1H46c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h3v2h-2v2h5v10h-4.533v2H54V21h5v-2h-2v-2h3c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zM46 3h14a1 1 0 011 1v7H45V4a1 1 0 011-1zm9 16h-4v-2h4v2zm5-4H46a1 1 0 01-1-1v-1h16v1a1 1 0 01-1 1zM21 48c0-1.654-1.346-3-3-3h-6v-9h3v-2h-5v11H6c-1.654 0-3 1.346-3 3v9H1v3c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3v-3h-2v-9zM5 48a1 1 0 011-1h12a1 1 0 011 1v9H5v-9zm16 12a1 1 0 01-1 1H4a1 1 0 01-1-1v-1h18v1z" />
      <path d="M51 49H53V51H51z" />
      <path d="M57 57H59V59H57z" />
      <path d="M55 49H59V51H55z" />
      <path d="M51 57H55V59H51z" />
      <path d="M56 35h-7v2h5v8h-7v18h16V45h-7V35zm-7 26v-6h12v6H49zm12-8H49v-6h12v6z" />
      <g>
        <path
          fill="#F0BC5E"
          d="M43 43H21c-3.859 0-7-3.141-7-7a7.001 7.001 0 015.524-6.84C20.693 26.092 23.681 24 27 24c1.126 0 2.236.24 3.262.701A8.032 8.032 0 0137 21c4.411 0 8 3.589 8 8 0 .098-.002.196-.007.297C47.905 30.167 50 32.897 50 36c0 3.859-3.141 7-7 7z"
        />
      </g>
    </svg>
  );
}

export default AplicationFullStack;
