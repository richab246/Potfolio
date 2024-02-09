import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card'>
          <div
           options = {{
            max: 45,
            scale: 1,
            speed: 450
           }}
           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
           > 
           <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {

  const file = () => {
    const aTag = document.createElement('a');
    aTag.href = "http://localhost:5173/resume.richa.pdf";
    aTag.setAttribute('download', 'resume richa.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    // alert("Hello")
  }

  return (
    <>
     <motion.div variants={textVariant()}>
       <p className={styles.sectionSubText}>Introduction</p>
       <h2 className={styles.sectionHeadText}>Overview.</h2>
     </motion.div>
     <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software developer with experience in JavaScript, and expertise 
        in frameworks like React, React Native, and Next.js. I'm a quick learner and 
        collaborate closely with clients to create efficient, scalable, and user-friendly 
        solutions that solve real-world problems. Let's work together to bring your ideas to life!
     </motion.p>
     <motion.button 
       type='button' 
       variants={fadeIn("", "", 0.1, 1)} 
       className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-9 border border-zinc-100"
       onClick={file}>
           Download CV
     </motion.button>
     <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
     </div>
    </>
  )
}

export default SectionWrapper(About, 'about');