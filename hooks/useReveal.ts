
import { useEffect, useRef } from 'react';

const useReveal = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Rule: Scroll acts like a timeline (Reverse scroll -> animation reverse)
          // We can remove 'active' to allow re-triggering or use a different class if needed.
          // For cinematic feel, keeping it active once triggered is standard unless user scrolls back up far.
          // To satisfy "scroll forward -> animation forward", we only add.
        }
      });
    }, { threshold: 0.1 });

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
};

export default useReveal;
