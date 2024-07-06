import style from "./button.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "dark";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  color = "primary",
  fullWidth,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClassName = clsx(
    style.button,
    fullWidth && style.fullWidth,
    disabled && style.disabled,
    style[color]
  );
  return (
    <button {...props} className={buttonClassName}>
      <span className={style.button__children}> {children}</span>
    </button>
  );
};
