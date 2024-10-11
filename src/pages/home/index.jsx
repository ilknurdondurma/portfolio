import React, { useRef } from 'react';

import Educate from '../educate';
import Work from '../work';
import Project from '../project';
import Language from '../language';
import Hobbies from '../hobies';
import Banner from '../banner';
import Navigation from '../../layout/navigation';

export default function Home() {
  const educateRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const languageRef = useRef(null);
  const hobbiesRef = useRef(null);

  const handleScroll = (section) => {
    let ref;
    switch (section) {
      case "educate":
        ref = educateRef;
        break;
      case "work":
        ref = workRef;
        break;
      case "project":
        ref = projectRef;
        break;
      case "language":
        ref = languageRef;
        break;
      case "hobbies":
        ref = hobbiesRef;
        break;
      default:
        break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navigation onScroll={handleScroll} />
      <div> {/* Add padding to the top here */}
        {/* anasayfa */}
        <Banner />
        {/* Eğitim Bilgileri */}
        <div ref={educateRef}>
          <Educate />
        </div>
        {/* Deneyim Bilgileri */}
        <div ref={workRef}>
          <Work />
        </div>
        {/* projeler */}
        <div ref={projectRef}>
          <Project />
        </div>
        {/* diller */}
        <div ref={languageRef}>
          <Language />
        </div>
        {/* hobiler */}
        <div ref={hobbiesRef}>
          <Hobbies />
        </div>
      </div>
    </div>
  );
}
