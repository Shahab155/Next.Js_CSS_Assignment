import React from 'react'
import Image from "next/image"

export default function Process() {
  return (
   <>
   
<section className="process-section" id='process'>
    {/* <!-- ------------------------------process-section upper part-----------------------   --> */}
                          
    <h1 className='process-heading'>OUR <span className="green-text">PROCESS</span></h1>
    <p className="upper-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. deserunt non modi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fuga.</p>

    
 {/* <!-------------------- item-1 ----------------------- --> */}
    {/* <!-- process items container  --> */}
     <div className="process-lower-part">
   
   <div className="process-item-container">
    <div className="process-image">
      <Image src="https://conremenergy.co.za/wp-content/uploads/2024/02/Request-Call.png" 
                alt="Request Call" width={130} height={130}></Image>
    </div>
    <div className='process-lower-head'>
        <h4>REQUEST CALL</h4>
        <p className='p-lower-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   </div>
 
   

 {/*  <!----------------------------------- item-2 ----------------------- -----------> */}
 <div className="process-item-container">
    <div className="process-image">
      <Image src="https://conremenergy.co.za/wp-content/uploads/2024/02/Consultation.png" alt="Consultation" width={130} height={130}></Image>
    </div>
    <div className='process-lower-head'>
        <h4>CONSULTATION</h4>
        <p className='p-lower-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   </div>
 
 {/*  <!----------------------------------- item-3 ----------------------- -----------> */}
 <div className="process-item-container">
    <div className="process-image">
      <Image src="https://conremenergy.co.za/wp-content/uploads/2024/02/Planning.png" alt="Planning" width={130} height={130}></Image>
    </div>
    <div className='process-lower-head'>
        <h4>PLANNING</h4>
        <p className='p-lower-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   </div>
 {/*  <!----------------------------------- item-4 ----------------------- -----------> */}
   
   <div className="process-item-container">
    <div className="process-image">
      <Image src="https://conremenergy.co.za/wp-content/uploads/2024/02/Work-Process.png" alt="Work Process" width={130} height={130}></Image>
    </div>
    <div className='process-lower-head'>
        <h4>WORK PROCESS</h4>
        <p className='p-lower-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   </div>


 {/*  <!----------------------------------- item-6 ----------------------- -----------> */}

   <div className="process-item-container">
    <div className="process-image">
      <Image src="https://conremenergy.co.za/wp-content/uploads/2024/02/Deliver.png" alt="Deliver" width={130} height={130}></Image>
    </div>
    <div className='process-lower-head'>
        <h4>DELIEVER</h4>
        <p className='p-lower-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   </div>


 


 {/* closing tag of process section lower part   */}
</div>     
</section>
   </>
  )
}




