import { FC } from "react";
import { ButtonProps } from "./types";
import "./Button.scss";

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={["button", ...(className ? [className] : [])].join(" ")}
      {...props}
    />
  );
};
