import { ReactNode } from "react";

export interface Card {
  title: string;
  className?: string;
  children: ReactNode;
}
