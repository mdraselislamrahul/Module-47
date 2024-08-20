import icon1 from "./icons/accounts.png"
import icon2 from "./icons/creative.png"
import icon3 from "./icons/marketing.png"
import icon4 from "./icons/chip.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const JobList = () => {

    useEffect(() => {
       AOS.init();
      }, [])
    return (
        <div className="bg-zinc-100 mt-32 py-7">
            <section className="text-center">
                <h1 className="text-3xl font-bold mb-3">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </section>
            <section className="mt-20">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    {/* 1st card */}
                    <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="card t-content w-full border-4 border-blue-700 bg-fuchsia-900 text-white">
                        <div className="card-body">
                            <img className="w-12" src={icon1} alt="" />
                            <h2 className="card-title mt-7">Account & Finance
                            </h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div
                   data-aos="fade-up"
                    data-aos-duration="1000"
                    className="card t-content w-full border-4 border-blue-700 bg-fuchsia-900 text-white">
                        <div className="card-body">
                            <img className="w-12" src={icon2} alt="" />
                            <h2 className="card-title mt-7">Creative Design
                            </h2>
                            <p>100+ Jobs Available</p>

                        </div>
                    </div>
                    {/* 3th card */}
                    <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="card content w-full border-4 border-blue-700 bg-fuchsia-900 text-white">
                        <div className="card-body">
                            <img className="w-12" src={icon3} alt="" />
                            <h2 className="card-title mt-7">Marketing & Sales
                            </h2>
                            <p>150 Jobs Available</p>
                           
                        </div>
                    </div>
                    {/* 4th card */}
                    <div
                    
                   data-aos="fade-up"
                    data-aos-duration="3000"
                    className="card t-content w-full border-4 border-blue-700 bg-fuchsia-900 text-white">
                        <div className="card-body">
                            <img className="w-12" src={icon4} alt="" />
                            <h2 className="card-title mt-7">Engineering Job
                            </h2>
                            <p>224 Jobs Available</p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobList;