
import { useEffect, useState } from "react";


const ResearchPaper = () => {
    const [links, setLinks] = useState([]);

    useEffect(()=> {
        fetch("researchData.json")
        .then(res => res.json())
        .then(data => setLinks(data))
    }, [])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Research Papers</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {
                    links.map(link => <div className="border shadow p-4 cursor-pointer hover:shadow-lg" key={link.id}>
                        <p className="text-xl font-semibold">Research Name: {link.title}</p>
                        <p className="mt-3 mb-2"><span className="font-semibold">Publication Date: </span> {link.publicationDate}</p>
                        <p><span className="font-semibold">Abstract: </span> {link.abstract}</p>
                        <a href={link.downloadLink}><span className="font-semibold">Paper Link:</span> <span className="link">{link.downloadLink}</span></a>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ResearchPaper;