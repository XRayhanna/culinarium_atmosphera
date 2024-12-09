import React, { useEffect, useRef } from 'react';
import './AnimatedSection.css'; 

const AnimatedSection = ({ children }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains('ftco-animated')) {
            el.classList.add('item-animate');
            setTimeout(() => {
              document.querySelectorAll('.ftco-animate.item-animate').forEach((item, k) => {
                setTimeout(() => {
                  const effect = item.getAttribute('data-animate-effect');
                  if (effect === 'fadeIn') {
                    item.classList.add('fadeIn', 'ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    item.classList.add('fadeInLeft', 'ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    item.classList.add('fadeInRight', 'ftco-animated');
                  } else {
                    item.classList.add('fadeInUp', 'ftco-animated');
                  }
                  item.classList.remove('item-animate');
                }, k * 50);
              });
            }, 100);
          }
          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.95,
    });

    elementsRef.current.forEach(el => observer.observe(el));

    return () => {
      elementsRef.current.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={el => { if (el) elementsRef.current.push(el); }}>
      {children}
    </div>
  );
};

export default AnimatedSection;
