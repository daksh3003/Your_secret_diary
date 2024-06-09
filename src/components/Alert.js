import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  if (props.alert) {
    return (
      <div style={{height:'50px',position:'sticky',top:'0',zIndex:"1000"}}>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show `}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        </div>
      </div>
    );
  }
}

export default Alert;