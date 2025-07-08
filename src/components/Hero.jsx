import sliderImg from "../assets/sliderimg.jpg";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Particles Component
function Particles() {
  const particlesRef = useRef();
  const particleCount = 100;

  useEffect(() => {
    const particles = particlesRef.current;
    particles.children.forEach((particle) => {
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
    });
  }, []);

  useFrame(() => {
    particlesRef.current.children.forEach((particle) => {
      particle.position.add(particle.velocity);
      if (particle.position.distanceTo(new THREE.Vector3(0, 0, 0)) > 15) {
        particle.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
      }
    });
    particlesRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

const Hero = () => {
  return (
    <div>
      <section
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src={sliderImg}
          alt="Trescol Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Particles />
          </Canvas>
        </div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-60 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 opacity-50 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slower"></div>
        <div className="relative z-10 text-center px-4 animate__animated animate__fadeInUp animate__slower">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-gray-700 mb-2">
            Admission'2025
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Leadership & Professional
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Development Center
          </h1>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
            Future with Trescol
          </h3>
          <p className="text-sm font-bold  md:text-xl text-gray-700 mb-6">
            Find Your Preferred Courses & Improve Your Skills
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition animate__animated animate__pulse animate__infinite animate__slower">
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
