import * as React from "react";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        netflix
        <bdi>roulette</bdi>
      </a>
    </div>
  );
};

export default React.memo(Footer);
