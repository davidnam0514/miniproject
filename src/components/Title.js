import React from 'react';

const Title = ({ title, textColor }) => {
  return (
    <div className="title">
      <h1 style={{ color: textColor }}>{title}</h1>
      <div>
        <button className="button">Log In</button>
        <button className="button">회원가입</button>
      </div>
    </div>
  );
};

export default Title;
