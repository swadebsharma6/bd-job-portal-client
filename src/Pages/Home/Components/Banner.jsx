import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
            {/* image section */}
        <div className="flex-1">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        {/*doc section */}
        <div className="flex-1">
          <motion.h1 
          transition={{ ease: "easeOut", duration: 2 ,repeat: Infinity}}
          animate={{x:50}} className="text-5xl font-bold">The <span className="text-secondary">Easiest Way</span>
             <br />
          to Get Your New Job</motion.h1>
          <p className="py-6">
          Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
