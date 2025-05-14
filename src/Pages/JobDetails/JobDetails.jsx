import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
      const {title, company, deadline,}  = useLoaderData();
 
     
      return (
            <div className="m-10">
               <h4 className="text-3xl">Job Details for the : {title}</h4>
               <p>Apply for: {company}</p>
               <p>DeadLine: {deadline}</p>
               <button className="btn btn-primary">Apply Now!</button>
            </div>
      );
};

export default JobDetails;