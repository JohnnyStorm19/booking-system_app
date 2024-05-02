import style from "./MyButton.module.scss";

import clsx from "clsx";

interface MyButtonProps {
  children: string;
  childrenVariant: "capitalized" | "uppercased";
  btnVariant: "dark" | "yellow";
  handler?: () => void;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}

export const MyButton = ({
  children,
  type="button",
  childrenVariant,
  btnVariant,
  className="",
  disabled = false,
  handler,
}: MyButtonProps) => {
  const btnStyle = clsx(
    btnVariant === "dark" ? style.btn__dark : style.btn__yellow,
    childrenVariant === "uppercased" && style.uppercased, className.length > 0 && className
  );
  return (
    <button
      type={type}
      onClick={handler}
      disabled={disabled}
      className={btnStyle}
    >
      {children}
    </button>
  );
};
