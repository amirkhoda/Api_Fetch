import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import particleJson from './particles.json'

function ParticleComponent() {
    const particlesInit = async(main) => {
        console.log(main)
        await loadFull(main)
      }
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <div>
       <Particles
      id="particles-js"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleJson}/>
    </div>
  )
}

export default ParticleComponent
