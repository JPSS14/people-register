import React from "react";
import style from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, name, ...props }, ref) => {
    return (
      <div className={style.input__container}>
        <input
          {...props}
          name={name}
          ref={ref}
          className={`${style.input} ${errorMessage && style.errorInput}`}
          placeholder=" "
        />
        {label && (
          <label htmlFor={name} className={style.label}>
            {label}
          </label>
        )}
        {errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
