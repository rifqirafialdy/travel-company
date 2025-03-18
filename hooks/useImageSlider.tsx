"use client"
import { useState, useEffect } from 'react';

const useImageSlider = (imagesLength: number, intervalTime: number = 5000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [imagesLength, intervalTime]);

  return index;
};

export default useImageSlider;
