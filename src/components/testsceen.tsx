import React from 'react';

interface ScreenProps {
  value: string;
}

const Screen: React.FC<ScreenProps> = ({ value }) => {
  return (
    <div className="screen">
      <p>{value}</p>
    </div>
  );
};

export default Screen;
