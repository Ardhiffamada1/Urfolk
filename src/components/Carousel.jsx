import React from "react";


const Carousel= () => {
    return(
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/5771895/pexels-photo-5771895.jpeg?")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Discover New Things</h1>
      <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline rounded-full bg-transparent text-white hover:bg-white hover:text-earie">Shop Now</button>
    </div>
  </div>
</div>
    )
}

export default Carousel