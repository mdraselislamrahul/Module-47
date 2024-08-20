import React from 'react';
import Banner from './Banner/Banner';
import JobList from './JobList/JobList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Statistics = () => {
    return (
        <div>
            <Banner></Banner>
            <JobList></JobList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Statistics;