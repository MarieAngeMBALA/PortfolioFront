import React from 'react';
import './about.css'; 
import profileImage from '../../assets/sonia.png';``
import cSharpLogo from '../../assets/csharp.png'; // Replace with your actual path to the image
import javaLogo from '../../assets/java.png'; // Replace with your actual path to the image
import pythonLogo from '../../assets/python.png'; 
import nodejs from '../../assets/node.png'; // Replace with your actual path to the image
import data from '../../assets/data.png'; // Replace with your actual path to the image
import cloud from '../../assets/cloud.png'; 
import micro from '../../assets/micro.png';
import trade1 from '../../assets/trade1.png'; 
import trade2 from '../../assets/trade2.png';
import welcome from '../../assets/welcome.png';

const AboutSection = () => {
  return (
  <>
    <div className="mypage-container">
      <div className="title-section">
        <h1>EMBEDDED SYSTEM INGENIEER</h1>
        <div className="subtitle">Would you like to get to know me better?</div>
        <p>I'm Marie-Ange MBALA a computer engineering student with a particular attraction for the fascinating world of trading. My daily life is an immersion in the maze of algorithms and the intricacies of the financial markets. It may come as a surprise to some, but it's in the silence of analysis and reflective solitude that I find my energy; introversion is my strength, channelling my concentration and fuelling my curiosity.
Trading is not just a hobby for me, it's a passion that challenges me daily and allows me to feel the vibrant pulse of the global economy. And beyond the screens, it's entrepreneurship that pushes me towards new horizons. Creating, innovating and building solutions that combine technology and social impact is what drives me.
Despite my love of independence, I'm deeply connected to the digital world, often interacting with an international community that shares my interest in disruptive technologies and business trends. My goal? To apply the rigour of engineering and the audacity of trading to entrepreneurship to leave a lasting mark. Whether I'm winning or learning, every day is another step towards mastering my art.
</p>
        <div className="quote">Either I WIN or I LEARN~ This phrase will make you unflappable inside despite the ordeal. 👌</div>
      </div>
      <div className="images-section">
        <img src={profileImage} alt="Profile" />
        <img src={trade1} alt="Company Logo" />
        <img src={trade2} alt="Personal" />
      </div>
    </div>
     
     <div className="languages-container">
      <div className="language-group">
        <img src={cSharpLogo} alt="C#" className="language-logo" />
        <img src={javaLogo} alt="Java" className="language-logo" />
        <img src={pythonLogo} alt="Python" className="language-logo" />
        <img src={nodejs} alt="Python" className="language-logo" />
        <img src={micro} alt="C#" className="language-logo" />
        <img src={data} alt="Java" className="language-logo" />
        <img src={cloud} alt="Python" className="language-logo" />
      </div>
      
    </div>
     </>
  );
};

export default AboutSection;
