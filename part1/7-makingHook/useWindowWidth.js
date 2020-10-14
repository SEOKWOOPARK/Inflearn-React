import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onReSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onReSize);
    return () => {
      window.removeEventListener('resize', onReSize);
    };
  });

  return width;
}
