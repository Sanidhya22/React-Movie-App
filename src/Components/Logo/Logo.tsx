import * as React from "react";
import "./Logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        netflix<bdi>roulette</bdi>
      </a>
    </div>
  );
};
export default React.memo(Logo);
