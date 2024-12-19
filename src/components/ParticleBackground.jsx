import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          }
        },
        retina_detect: true
      }}
    />
  )
} 