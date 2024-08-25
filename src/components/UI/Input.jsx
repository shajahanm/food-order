import React from "react";

const Input = ({ id, label, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} name={id} />
    </p>
  );
};

export default Input;
