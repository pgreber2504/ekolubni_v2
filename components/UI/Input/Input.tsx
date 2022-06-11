import React from "react";
import classes from "./Input.module.scss";

type InputPropTypes = {
  name: string;
  value: string;
  type: string;
  label?: boolean;
  labelText?: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({
  name,
  value,
  placeholder,
  label,
  labelText,
  type,
  onChange,
}: InputPropTypes) => {
  const input =
    type !== "textarea" ? (
      <input
        className={classes.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    ) : (
      <textarea
        className={classes.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    );

  if (label) {
    return (
      <>
        <label htmlFor={name}>{labelText}</label>
        {input}
      </>
    );
  }

  return input;
};

export default Input;
