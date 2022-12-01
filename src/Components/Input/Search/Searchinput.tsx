import * as React from "react";
import { Component } from "react";
import "./SearchInput.scss";
const SearchInput: React.FC = () => {
  return <input type="text" placeholder="What do you want to watch ?" />;
};
export default React.memo(SearchInput);
