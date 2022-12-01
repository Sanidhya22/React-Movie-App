import * as React from "react";
import "./Logo.scss";
const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a href="/">
        netflix<bdi>roulette</bdi>
      </a>
    </div>
  );
};
export default React.memo(Logo);
