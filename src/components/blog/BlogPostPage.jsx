import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import posts from '../../posts/posts';
import './BlogPostPage-style.css'
import CustomMap from './PeruMap'

// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";

// function SampleNextArrow(props) {
//   const { style, onClick } = props;
//   return (
//     <div
//       className='arrow'
//       style={{ 
//         ...style, 
//         transform: 'translateY(-20em) translateX(41.5vw)',
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { style, onClick } = props;
//   return (
//     <div
//       className='arrow'
//       style={{ 
//         ...style, 
//         transform: 'scaleX(-1) translateY(17.5em) translateX(7em)'
//       }}
//       onClick={onClick}
//     />
//   );
// }

// class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 700,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       adaptiveHeight: false,
//       lazyload: true,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       pauseOnHover: true,
//       pauseOnFocus: true,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />

//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           {this.props.children}
//         </Slider>
//       </div>
//     );
//   }
// }

const BlogPostPage = () => {
  const { slug } = useParams();
  const [postHtml, setPostHtml] = useState('');

  useEffect(() => {
    const post = posts.find(p => p.slug === slug);
    if (post) {
      fetch(post.path)
        .then(response => response.text())
        .then(markdown => {
          const sanitizedHtml = DOMPurify.sanitize(marked(markdown));
          setPostHtml(sanitizedHtml);
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [slug]);

  console.log([slug])

  return (
    <div>
    <CustomMap highlightedPathId={[slug]} />
    <div dangerouslySetInnerHTML={{ __html: postHtml }} 
    className="markdown-content"
    ></div>
      {/* <div
      className='sliderimg'
      >
        <SimpleSlider>
          {items}
        </SimpleSlider>
      </div> */}
    </div>
    
  );
};

export default BlogPostPage;
