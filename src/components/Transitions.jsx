import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // this component does not render anything
};

const variants = {
    enter: ({ direction = 0, path }) => { // Expecting an object with direction and path
      if (path.startsWith('/blog/')) {
        return {
          x: 0,
          opacity: 0
        };
      } else {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      } 
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: ({ direction = 0, path }) => { // Expecting an object with direction and path
      if (path === '/blog') {
        return {
          zIndex: 0,
          x: 0,
          opacity: 0
        };
      } else {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        };
      }
    }
};

const Transitions = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      variants={variants}
      initial={() => variants.enter({ path: location.pathname })} // Pass the path here
      animate="center"
      exit={() => variants.exit({ path: location.pathname })} // Pass the path here
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      {children}
      <ScrollToTop />
    </motion.div>
  );
};

export default Transitions;
