import { ReactNode } from "react";

export interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  className?: string;
  children: ReactNode;
}
