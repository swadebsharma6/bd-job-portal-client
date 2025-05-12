import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-12" src={company_logo} alt="Shoes" />
        </figure>
        <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}
            <div className="badge badge-secondary">New</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
            {requirements.map(skill => <p 
            className="border rounded-md text-center px-2 hover:bg-gray-300"
            >{skill}</p>)}
        </div>
        <div className="card-actions justify-end items-center mt-6">
            <p className="flex items-center">Salary:<FaDollarSign/> {salaryRange.min} -{salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
