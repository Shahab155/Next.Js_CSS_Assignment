import React from 'react'
import Image from "next/image"

export default function Skills() {
  return (
    <>
     <section className="skills-section" id='skills'>
      <div className="skills-head">
        <h1 className='skills-heading'>OUR <span className='green-text'>SKILLS</span></h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          odio nam eos in quibusdam totam iure ipsa vel, est reiciendis
          voluptatem! Alias.
        </p>
      </div>
      {/* <!-- ---------------------------------------------------------------------------------------- --> */}
        {/* <!-- ---------------------------------skills items -------------------- --> */}
         {/* <!-- --------------------------------------------------------------------------------- --> */}
          <div className="skills-items">

                      {/* <!----  skills item-1 --> */}
          <div className="skills-item-container">
            <div className="skills-item">
                <div className="skills-image">
                  <Image src="/Images/nextImg.png" alt='next js image' width={200} height={200}/>
                </div>
            </div>
            <h4>NEXT.JS</h4>

          </div>
                       {/* <!----  skills item-2 --> */}
                       <div className="skills-item-container">
                        <div className="skills-item">
                            <div className="skills-image">
                              <Image src={'/Images/typescriptImg.png'} alt='typescript Image' width={200} height={200}/>
                            </div>
                        </div>
                        <h4>TYPESCRIPT</h4>
            
                      </div>
                                   {/* <!----  skills item-3 --> */}
          <div className="skills-item-container">
            <div className="skills-item">
                <div className="skills-image">
                  <Image  src={'/Images/htmlImg.png'} alt='HTML Image' width={200} height={200}></Image>
                </div>
            </div>
            <h4 className='text-white'>HTML</h4>

          </div>
                       {/* <!----  skills item-4 --> */}
                       <div className="skills-item-container">
                        <div className="skills-item">
                            <div className="skills-image">
                           <Image src={'/Images/cssImg.png'} alt='CSS Image' width={200} height={200}/>
                            </div>
                        </div>
                        <h4>CSS</h4>
            
                      </div>



          {/* <!-- closig tag  --> */}
          </div>
</section>
    </>
  )
}
