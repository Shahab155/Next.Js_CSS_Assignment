import React from 'react'

export default function Contact() {
  return (
    <>
     <section className="contact-section" id='contact'>
    
    <div className="contact-head">
    <h1>OUR <span className='green-text'>CONTACTS</span></h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio iste inventore aliquid debitis fugiat repellendus? Quia at, molestiae repellat temporibus nisi.</p>
 </div>
 <div className='parent-contact-info'>
    <h2><i className="bi-location bi-geo-alt-fill"></i> For more details contact us through phone number and email provided below, or visit us.</h2>
    <div className="contact-info">
        <span className="phone-number"><i className="bi-nav bi-telephone-fill"></i> +92-302-2187590</span>
        <span className="phone-number"><i className="bi-nav bi-telephone-fill"></i> +92-304-3917590</span>
        <span className="email-address"><i className="bi bi-envelope"></i> bhuttoshahab9@gmail.com</span>
    </div>
 </div>
 
 
 
 
</section>
    </>
  )
}
