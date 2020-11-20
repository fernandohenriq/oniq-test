import React from 'react';

const secondary = {
  minHeight: "5rem",
  width: "100%",
  borderRadius: "1.25rem",
  borderWidth: "0rem",
  fontSize: "1.5rem",
  fontWeight: "700",
  backgroundColor: "#FC6621",
  color: "#ffffff",
}

const primary = {
    minHeight: "5rem",
    width: "100%",
    borderRadius: "1.25rem",
    borderWidth: "0rem",
    fontSize: "1.5rem",
    fontWeight: "700",
    backgroundColor: "#00416D",
    color: "#ffffff",
}

function Button (props) {
  return <button style={props.theme==="primary" ? primary : secondary } >{props.children}</button>
}

export default Button;