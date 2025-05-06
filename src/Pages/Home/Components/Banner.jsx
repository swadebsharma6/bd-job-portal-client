import { motion } from "motion/react";
import team1 from '../../../assets/team/team-1.jpg'
import team2 from '../../../assets/team/team-2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* image section */}
        <div className="flex-1">
          <motion.img
          animate={{y: [50, 100 , 50]}}
          transition={{repeat: Infinity, duration: 10,}}
            src={team1}
            alt="team1"
            className="max-w-sm w-64  border-l-4 border-b-4 border-primary rounded-t-3xl rounded-br-3xl shadow-2xl"
          />
          <motion.img
          animate={{x: [100,150,100]}}
          transition={{repeat: Infinity, duration: 10,}}
            src={team2}
            alt="team1"
            className="max-w-sm w-64  border-l-4 border-b-4 border-primary rounded-t-3xl rounded-br-3xl shadow-2xl"
          />
        </div>
        {/*doc section */}
        <div className="flex-1">
          <motion.h1
            transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            animate={{ x: 50 }}
            className="text-5xl font-bold"
          >
            The{" "}
            <motion.span 
            animate={{color:['#f5340e', '#a5f50e', '#ec2a0c']}} 
            transition={{duration: 1.5, repeat: Infinity, }}
            >Easiest Way</motion.span>
            <br />
            to Get Your New Job
          </motion.h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
