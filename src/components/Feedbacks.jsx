import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index, college_name, degree, duration, cgpa, image}) => (
  <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)}
   className='bg-black-200 p-10 rounded-3xl xs:w-[320px] '>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{college_name}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
         <p className='text-white font-medium text-[16px]'>{degree}</p>
         <p className='mt-1 text-secondary text-[12px]'>
          {duration}
         </p>
         <p className='mt-1 text-secondary text-[12px]'>
          cgpa/perc: {cgpa}
         </p>
        </div>
        <img 
         src={image}
         alt={`feedback-by-${college_name}`}
         className='w-12 h-12 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have studied</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
       </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.college_name} index={index} {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");