import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
      const {_id,title, company, deadline,}  = useLoaderData();
 
     
      return (
            <div className="m-10">
               <h4 className="text-3xl">Job Details for the : {title}</h4>
               <p>Apply for: {company}</p>
               <p>DeadLine: {deadline}</p>
               <Link to={`/jobApply/${_id}`}>
               <button className="btn btn-primary">Apply Now!</button>
               </Link>
            </div>
      );
};

export default JobDetails;