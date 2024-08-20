import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import { Link } from "react-router-dom";


const FeaturedJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(response => response.json())
            .then(json => setAllJobs(json))
    }, [])
    return (
        <div className="mt-32 bg-zinc-100 py-7">
            <section className="text-center">
                <h1 className="text-3xl font-bold mb-3">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </section>
            <section className="mt-20 grid grid-cols-2 gap-5">
                {
                    allJobs.slice(0, 4).map(jobs=><FeaturedJob jobs={jobs} key={jobs.id}></FeaturedJob>)
                }
            </section>
            <div className="flex justify-center mt-20">
            <Link to="/AllJobs" className="bg-blue-700 text-xl text-white px-7 rounded-lg py-3">All Jobs</Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;