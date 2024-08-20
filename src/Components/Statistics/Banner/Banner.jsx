import img from "./Image/user.png"
const Banner = () => {
    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl bg-zinc-100 mt-20">

               <div className="card-body md:w-1/2 mt-20 md:text-left text-center">
                    <h2 className="text-5xl font-bold leading-tight">One Step <br /> Closer To You <br /> <span className="text-blue-700">Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className="btn btn-primary ">Gat Started</button>
                    </div>

                </div>

                <figure className="md:w-1/2">
                    <img
                        src={img}
                        alt="Movie" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;