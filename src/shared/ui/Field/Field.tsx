import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import style from "./Field.module.scss";
import React from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  readonly className?: string;
}

export const Field = React.forwardRef<HTMLInputElement, IInput>(
  (
    {
      type = "text",
      className = "",
      placeholder,
      value = "",
      errorMessage,
      name,
      ...rest
    },
    ref
  ) => {
    const fieldStyle = clsx(style.field, className.length > 0 && className);
    return (
      <div className={fieldStyle}>
        <input
          {...rest}
          type={type}
          className={clsx(style.input, className && className)}
          placeholder={placeholder && placeholder}
          value={value}
          name={name}
          ref={ref} // Forward the ref to the input element
        />
        {errorMessage && <span className={style.error}>{errorMessage}</span>}
      </div>
    );
  }
);

// export const Field = (props: IInput) => {
//   const { type = "text", className, placeholder, errorMessage, ...rest  } = props;
//   return (
//     <>
//       <input
//         {...rest}
//         type={type}
//         className={clsx(style.input, className && className)}
//         placeholder={placeholder && placeholder}
//       />
//       {errorMessage && <span className={style.error}>{errorMessage}</span>}
//     </>
//   );
// };
