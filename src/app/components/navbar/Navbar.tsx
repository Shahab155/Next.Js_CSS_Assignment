"use client";
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Navbar() {

     // Step 1: Set up state to manage the visibility of the navbar
 
    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
    

  const menuToggle = () => {
  console.log ( setIsNavVisible(!isNavVisible));

    
  }
 

  
  return (
    <>
     {/* --------------------------Header Section -------------------------- */}
     <header>
        <div className="nav-section1">
          <div className="nav-icons">
            <Link href={"https://www.facebook.com/shahabuddin.bhutto.963"} target="_blank">
              <i className="ai bi-facebook"></i>{" "}
            </Link>
            <Link href={"https://x.com/Shahabu94082969"} target="_blank">
              <i className="ai bi-twitter-x"></i>{" "}
            </Link>
            <Link href={"https://en.wikipedia.org/wiki/Google%2B"} target="_blank">
              <i className="ai bi-google"></i>{" "}
            </Link>
            <Link href={"https://www.linkedin.com/in/shahab-ud-din-7547762b9/"} target="_blank">
              <i className="ai bi-linkedin"></i>{" "}
            </Link>
            <Link href={"https://www.youtube.com"} target="_blank">
              <i className="ai bi-youtube"></i>{" "}
            </Link>
          </div>
          <div className="nav-contacts">
            <p>
              <i className="bi-nav bi-telephone-fill"></i> +92-(302)-2187590{" "}
            </p>
            <p>
              {" "}
              <i className="bi-nav bi-telephone-fill"></i> +92-(304)-3938194
            </p>
            <button className="btn">
              <span className="btn-text">CALL ME BACK</span>
            </button>
          </div>
        </div>
      </header>
      {/* ---------------------------------------------------------------------------------- */}
      {/* ----------------------------- Navbar Section* ---------------------------*/}
      {/* ---------------------------------------------------------------------------------- */}

      <nav>
       
          <h1 className="pana-logo">
            <Image
              src={"/Images/panaLogo.png"}
              alt=""
              width={100}
              height={50}
            />
          </h1>
          <div className='x-icon'> <FontAwesomeIcon icon ={faX}/></div>
            
          <ul className={isNavVisible ? "show" : "hide"}>
            <li>
              <Link href={"#hero"} >
                WHY US{" "}
              </Link>
            </li>
            
            <li>
              <Link  href={"#about"}>
                ABOUT{" "}
              </Link>
            </li>
            <li>
            <Link  href={"#advantages"}>
                ADVANTAGES{" "}
              </Link>
            </li>
            <li>
              <Link  href={"#services"}>
                SERVICES{" "}
              </Link>
            </li>
            <li>
              <Link  href={"#portfolio"}>
                PORTFOLIO{" "}
              </Link>
            </li>
            <li>
              <Link  href={"#process"}>
                PROCESS{" "}
              </Link>
            </li>
            <li>
              <Link  href={"#reviews"}>
                REVIEWS{" "}
              </Link>
            </li>
            {/* <li>
              <Link  href={"#skills"}>
                OUR SKILLS
              </Link>
            </li> */}
     
            <li>
              <Link  href={"#contact"}>
                CONTACT US{" "}
              </Link>
            </li>
        
          </ul>
        <div   onClick={menuToggle} className={'menu-toggle'}> <FontAwesomeIcon icon={faBars} /> 
        
        </div>
      </nav>

    </>
  )
}
   





