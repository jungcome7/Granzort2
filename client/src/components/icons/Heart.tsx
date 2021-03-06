import React from 'react';
import PALETTE from '../../styles/color-variables';

type HeartProps = {
  fill?: boolean;
};

const Heart = ({ fill = false }: HeartProps) => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3672 28.9648C20.5723 28.9648 20.8652 28.8281 21.0801 28.7012C26.5781 25.1855 30.0645 21.0938 30.0645 16.9336C30.0645 13.4766 27.6914 11.0352 24.625 11.0352C22.7207 11.0352 21.2559 12.0898 20.3672 13.7012C19.498 12.0996 18.0137 11.0352 16.1094 11.0352C13.043 11.0352 10.6699 13.4766 10.6699 16.9336C10.6699 21.0938 14.1562 25.1855 19.6641 28.7012C19.8691 28.8281 20.1621 28.9648 20.3672 28.9648Z"
        fill={fill ? '#FF2171' : PALETTE.GRAY[1]}
      />
    </svg>
  );
};

export default Heart;
