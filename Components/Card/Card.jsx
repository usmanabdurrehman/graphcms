import React from "react";

export default function Card({ title, description }) {
  return (
    <div
      style={{ padding: "10px", border: "1px solid black", marginTop: "20px" }}
    >
      <h2>{title}</h2>
      <span dangerouslySetInnerHTML={{ __html: description }}></span>
    </div>
  );
}
