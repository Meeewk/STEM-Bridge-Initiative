import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./index.css"; // Import the CSS file

export default function HorizontalScroller({ items }) {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = items.length;
  const itemWidth = 20; // Each item takes 30vw

  const scroll = (direction) => {
    setIndex((prev) => {
      const newIndex = prev + direction;
      return Math.max(0, Math.min(newIndex, totalItems - itemsPerPage));
    });
  };

  return (
    <div className="scroller-container">
      {/* Left Arrow */}
      <button
        onClick={() => scroll(-1)}
        disabled={index === 0}
        className="arrow left-arrow"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Scrollable Container */}
      <div className="scrollable-container">
        <motion.div
          className="scrollable-items"
          animate={{ x: `-${index * itemWidth * 1.044}vw` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {/* Empty element for left padding */}
          <div className="empty-element"></div>

          {/* Actual Items */}
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{
                scale: index <= i && i < index + itemsPerPage ? 1 : 0.9,
                opacity: index <= i && i < index + itemsPerPage ? 1 : 0.5,
              }}
              transition={{ duration: 0.4 }}
              className="item-card"
            >
              {/* Name */}
              <h2 className="item-name">{item.name}</h2>

              {/* Image */}
              <div className="item-image">
                <img src={item.image} alt={item.name} className="rounded-img" />

              </div>

              {/* Description */}
              <p className="item-description">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(1)}
        disabled={index >= totalItems - itemsPerPage}
        className="arrow right-arrow"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
