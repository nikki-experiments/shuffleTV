// @flow

import React from "react";

const Button = (props: {text: string, handleClick: Function}) => (
  <button
    type="button"
    className="btn primary"
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);

export default Button;
