import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllJob = ({ job }) => {
    console.log(job)
    const { id } = job;
    const [applid, setApplid] = useState(false);
  
    const handleApplid = () => {
        setApplid(!applid)
    }
    return (
        <div className="">
            
            <div className={`card card-side bg-base-100 shadow-xl mt-5 ${applid ? "bg-blue-700" : ""}`}>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`} className="btn btn-primary">Watch</Link>
                    </div>
                    <div className='mt-10'>
                        <button onClick={handleApplid} className="btn btn-primary">Applid Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJob;