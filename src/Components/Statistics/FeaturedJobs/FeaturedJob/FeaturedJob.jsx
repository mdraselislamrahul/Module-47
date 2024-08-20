import { Link } from "react-router-dom";


const FeaturedJob = ({ jobs }) => {
    // console.log(jobs)
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type}=jobs
        return (
        <div>
            <div className="card card-compact bg-base-100 w-full h-full shadow-xl">
                <figure className="mt-5">
                    <img className="h-20"
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-2xl">{company_name}</p>
                    <div className="flex gap-5 mt-5">
                        <div className="border border-blue-700 px-5 py-3 text-xl">{remote_or_onsite}</div>
                        <div className="border border-blue-700 px-5 py-3 text-xl">{job_type}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`} className="btn btn-primary">Vew Detalies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;