import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const StupidScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
    };
  }, []);

  const handleSmoothScrollClick = () => {
    const sectionSelector = document.getElementById('fiesta-head'); //  select your anchor
    scrollRef.current.scrollTo(sectionSelector,  {
      'offset': 0,
      'callback': function() {
        // do something...
        alert("You've reached the section!");
      },
      'duration': 1200,
      'easing': [0.25, 0.00, 0.35, 1.00],
      'disableLerp': true
    })
  };

  return (
    <button onClick={handleSmoothScrollClick}>
      Scroll to Testing Section
    </button>
  );
};

export default StupidScroll;
