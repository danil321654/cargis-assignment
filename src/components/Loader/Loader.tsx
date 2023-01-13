import "./Loader.scss";

import { FC } from "react";

export const Loader: FC = () => (
  <div className="loader-wrapper">
    <div className="loader-wrapper__loader">
      {new Array(9).fill(0).map((_, index) => (
        <div key={index} className="loader-wrapper__loader-dot" />
      ))}
    </div>
  </div>
);
