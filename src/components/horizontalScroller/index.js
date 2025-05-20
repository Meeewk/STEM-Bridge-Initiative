import { useEffect, useState } from "react";
import "./index.css";

export default function HorizontalScroller({ items }) {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 2200) setColumns(4);
      else if (width >= 1100) setColumns(3);
      else setColumns(2);
    };

    updateColumns(); // initial check
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className={`grid-container columns-${columns}`}>
      {items.map((item, i) => (
        <div key={i} className="item-card">
          <h2 className="item-name">{item.name}</h2>
          <div className="item-image">
            <img src={item.image} alt={item.name} className="rounded-img" />
          </div>
          <p className="item-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
