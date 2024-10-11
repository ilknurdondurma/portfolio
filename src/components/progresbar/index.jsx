import React from 'react';

const ProgressBar = ({ progress , thickness=2 }) => {
  return (
    <div className={`w-full bg-gray-300 rounded-full h-${thickness}`}>
      <div
        className={`bg-pink-400 h-full rounded-full transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
