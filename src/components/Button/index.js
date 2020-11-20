import React from 'react';

const styles = {
    minHeight: "5rem",
    width: "100%",
    borderRadius: "1.25rem",
    borderWidth: "0rem",
    fontSize: "1.5rem",
    fontWeight: "700",
    backgroundColor: "#FC6621",
    color: "#ffffff",
}

function Button (props) {
  return <button style={styles} >{props.children}</button>
}

export default Button;