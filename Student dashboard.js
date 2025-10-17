import React from "react";

function Welcome(props) {
  return (
    <h2>Welcome, {props.name}!</h2>
  );
}


export default function App() {
  return (
    <div>
      <Welcome name="Deepak" />
      <Welcome name="Jnanesh" />
      <Welcome name="Priya" />
    </div>
  );
}
