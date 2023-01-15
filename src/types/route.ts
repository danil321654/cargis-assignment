import { FC } from "react";

export interface Route {
  path: string;
  Component: FC;
  subroutes: Omit<Route, "subroutes">[];
}
