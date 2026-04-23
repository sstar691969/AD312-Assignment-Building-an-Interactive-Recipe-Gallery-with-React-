
import { useState } from "react";

const images = [
  { id: 1, url: "https://picsum.photos/id/101/400/300", description: "Fresh Salad" },
  { id: 2, url: "https://picsum.photos/id/102/400/300", description: "Pasta Dish" },
  { id: 3, url: "https://picsum.photos/id/103/400/300", description: "Grilled Chicken" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Recipe Gallery</h1>

      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
        width="400"
      />

      <p>{images[currentIndex].description}</p>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
