import { Order, Orders } from "pages";
import { Route } from "types";

export const routes: Route[] = [
  {
    path: "/orders",
    Component: Orders,
    subroutes: [{ path: ":id", Component: Order }],
  },
];
