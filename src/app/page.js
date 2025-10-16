'use client';

import { useState, useRef } from 'react';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleSkillClick = (skillName) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onViewProjectsClick={scrollToProjects} onViewContactClick={scrollToContact} id="hero"/>
      <Resume id="about"/>
      <Skills onSkillClick={handleSkillClick} selectedSkill={selectedSkill} id="skill"/>
      <Projects ref={projectsRef} selectedSkill={selectedSkill} id="projects"/>
      <Contact ref={contactRef} id="contact"/>
      <ScrollToTopButton />
    </>
  );
}
