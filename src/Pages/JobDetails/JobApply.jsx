import { useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const JobApply = () => {
      const {user} = useAuth();
  const { id } = useParams();
//   console.log("see the id", id, user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkInd = form.linkInd.value;
    const github = form.github.value;
    const resume = form.linkInd.value;

    const applicationJobs ={
      job_id: id,
      applicant_email: user.email,
      linkInd,
      github,
      resume
    }
      console.log(linkInd, github, resume);

      // Send this Application information to the server
      
  };

  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-2xl font-bold text-center">
        Apply Job and Good Luck!!
      </h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <fieldset className="fieldset">
          <label className="label">LinkedInd URL</label>
          <input
            type="url"
            name="linkInd"
            className="input w-full"
            placeholder="LinkInd Url"
          />
          <label className="label">Github Url</label>
          <input
            type="url"
            name="github"
            className="input w-full"
            placeholder="Github Url"
          />
          <label className="label">Resume Url</label>
          <input
            type="url"
            name="resume"
            className="input w-full"
            placeholder="Resume Url"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
