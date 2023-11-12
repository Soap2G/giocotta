function grabber(r) {
    return r.keys().map(r);
  }
  
  const imageArray = () => {
    // Get an array of image file paths using require.context
    const imageModules = grabber(require.context('../../../public/photos/', false, /\.(png|jpe?g|svg)$/));
  
    // Map over the array of image file paths to create JSX elements
    const imageElements = imageModules.map((src, index) => (
      <div key={index} className='sliderdiv'>
        <img src={src} className="item" loading='lazy' alt=""/>
      </div>
    ));
  
    // Return the array of JSX elements
    return imageElements;
  }
  
  export default imageArray;
  