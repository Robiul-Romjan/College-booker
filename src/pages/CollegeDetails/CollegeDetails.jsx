import { useLoaderData } from "react-router-dom";


const CollegeDetails = () => {
   
    const college = useLoaderData();

    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Details of {college?.name}</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
                <figure className="w-full"><img src={college?.image} alt="Album" /></figure>
                <div className="card-body">
                    <h4 className="text-xl text-center font-semibold">{college?.name}</h4>
                    <p><span className="font-semibold">Admission Date:</span> {college?.admissionDate}</p>

                    <div><span className="font-semibold">Events:</span> {college?.events.map(event => <ul key={event.id}>
                        <li>{event.id} {event.name}</li>
                    </ul>)}</div>
                    <div><span className="font-semibold">Sports:</span> {college?.sports.map(sport => <ul key={sport.id}>
                        <li>{sport.id} {sport.name}</li>
                    </ul>)}</div>

                    <p><span className="font-semibold">Research Count:</span> {college?.researchCount} research</p>
                    <p><span className="font-semibold">Ratings:</span> {college?.rating} stars</p>
                    <p><span className="font-semibold">Research History:</span> {college?.researchHistory}</p>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;