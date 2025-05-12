import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {

      const [jobs, setJobs] = useState([]);

      useEffect(()=>{
            fetch(`http://localhost:5000/jobs`)
            .then(res => res.json())
            .then(data =>{
                  setJobs(data)
            })
      },[])

  return (
    <div>
      <div className="text-center py-8 space-y-3">
        <h3 className="text-4xl text-primary font-bold">Hot Jobs of the day</h3>
        <p className="text-xs">Search and connect with the right candidates faster.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4">
            {
                  jobs.map(job => <HotJobCard
                  key={job._id}
                  job={job}
                  ></HotJobCard>)
            }
      </div>
    </div>
  );
};

export default HotJobs;
