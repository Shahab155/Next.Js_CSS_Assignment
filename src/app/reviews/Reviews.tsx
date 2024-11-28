import React from 'react'
import Image from "next/image"

export default function Reviews() {
  return (
   <>
   <section className="reviews-section" id='reviews'>
    {/* <!-- reviews heading and paragraph (upper part ) --> */}
       <div className="reviwes-head">
        <h1>PEOPLE <span className="green-text"> ABOUT US</span></h1>
        <p className='reviews-para-upper'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos fuga magnam aliquid, accusantium error laudantium tenetur? Molestiae!</p>
        </div>

     {/* <!-- ------------------------reviews lower part ------------------------ --> */}
   <div className="reviews-item-container">
 
    {/* <!-- ----------------------reviews-item 1 ------------------- --> */}

        <div className="reviews-image-text">
            <div className="reviews-image"><Image src={'/Images/ziaKhan.jpeg'} alt='Zia Khan' width={100} height={100}></Image></div>
            <div className="reviews-head-para">
                   <h2>Zia Khan</h2>
                   <p className="reviews-para">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos, consequatur quidem soluta corrupti eaque.
                   </p>
{/* <div className="line"></div> */}

</div>

    </div>

    {/* <!-- ----------------------reviews-item 2------------------- --> */}
   
        <div className="reviews-image-text">
            <div className="reviews-image"><Image src={'/Images/daniyal.jpeg'} alt='Daniyal Nagori' width={100} height={100}></Image></div>
            <div className="reviews-head-para">
                   <h2>Daniyal Nagori</h2>
                   <p className="reviews-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos, consequatur quidem soluta corrupti eaque.</p>
            </div>
        
  

    </div>
    {/* <div className="line"></div> */}


      {/* <!-- ----------------------reviews-item 3 ------------------- --> */}

     
        <div className="reviews-image-text">
            <div className="reviews-image"> <Image src={'/Images/ameen.jpg'} alt='Ameen Alam' width={100} height={100}></Image></div>
            <div className="reviews-head-para">
                   <h2>Ameen Alam</h2>
                   <p className="reviews-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos, consequatur quidem soluta corrupti eaque.</p>
            </div>
        {/* <div className="line"></div> */}

    </div>
      {/* <!-- ----------------------reviews-item 4 ------------------- --> */}

        <div className="reviews-image-text">
            <div className="reviews-image"><Image src={'/Images/hamzah.jpeg'} alt='Hamzah Syed' width={100} height={100}></Image></div>
            <div className="reviews-head-para">
                   <h2>Hamzah Syed</h2>
                   <p className="reviews-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos, consequatur quidem soluta corrupti eaque.</p>
            </div>

        {/* <div className="line"></div> */}

    </div>

    {/* <!-- Cloing tag of items container  --> */}
</div>
</section>

   </>
  )
}
