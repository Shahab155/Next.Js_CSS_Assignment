import React from 'react'

export default function Project() {
  return (
    <>
    <section className="project-section" id='project'>
 
 <div className="project-heading"><h1>START YOUR NEW PROJECT</h1></div>  

 <div className="form-container">
 <form>
<input type="text" placeholder="YOUR NAME"   />
<input type="email" placeholder="YOUR EMAIL" />
<input type="number" placeholder="YOUR PHONE"/>
    </form>
    <button className="hero-btn">SEND REQUESTS</button>
 </div>
 <div className="project-para"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla earum nobis cupiditate quibusdam quisquam. Et sequi vero minus voluptatum!</p></div>

</section>
</>
  )
}
