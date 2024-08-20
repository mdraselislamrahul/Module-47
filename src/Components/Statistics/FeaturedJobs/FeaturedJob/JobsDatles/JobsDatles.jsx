import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobsDatles = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    const {logo}=job;
    return (
        <div>
           <img src={logo} alt="" />
        </div>
    );
};

export default JobsDatles;