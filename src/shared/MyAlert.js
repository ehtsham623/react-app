import React from "react";

export default function MyAlert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.message}
      </div>
    )
  );
}
