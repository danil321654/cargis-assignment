import "./Loader.scss";

export const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader-wrapper__loader">
      {new Array(9).fill(0).map((_, index) => (
        <div key={index} className="loader-wrapper__loader-dot" />
      ))}
    </div>
  </div>
);
