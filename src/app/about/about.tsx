import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section" id='about'>
     

        <div className="about-left">
        <h1 className='about-heading'>ABOUT <span className='green-text'>US</span></h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quibusdam fuga asperiores laboriosam officiis voluptatum quod
            voluptate eveniet vitae animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt
            unde officiis ipsam soluta. Ab, corporis necessitatibus? Esse
            reiciendis, qui nihil, itaque quos odit repudiandae magni eius eaque
            dolorum omnis architecto cumque? Incidunt dolorem libero eveniet
            dolorum nihil reprehenderit ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            cum placeat minus incidunt optio, natus repellendus quas sint itaque
            repellat omnis laborum debitis sunt eos consectetur! Cum laborum
            ipsam facilis deleniti quo eos esse exercitationem qui architecto
            quibusdam repellat cupiditate voluptatum, amet corporis iusto
            provident necessitatibus ad porro iure id praesentium atque
            explicabo quasi quisquam! Qui molestiae facere laudantium
            voluptates?
          </p>
          <button className="hero-btn">READ MORE</button>
        </div>
       
        <div className="about-right">
          <Image src="https://sitenivel.com.br/wp-content/uploads/2024/03/Artboard-1@2x2.png" alt="Art Board"
          width={700} height={500} ></Image>
         
        </div>
      </section>
  )
}
