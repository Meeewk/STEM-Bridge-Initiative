import { useEffect, useRef, useState } from "react";
import './index.css';

export default function PersonCard({ name = "Goon", description = "gooner gooner", image = "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain"}) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain" />
      <p>{description}</p>
    </div>
  );
}