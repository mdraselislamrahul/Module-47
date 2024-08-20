import { useLoaderData } from "react-router-dom";
import AllJob from "./AllJob/AllJob";

const AllJobs = () => {
    const jobs=useLoaderData();
    console.log(jobs)
    return (
        <div>
            {
                jobs.map(job=><AllJob job={job} key={job.id}></AllJob>)
            }
        </div>
    );
};

export default AllJobs;