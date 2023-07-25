import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
   const [users, setUsers] = useState([])
    
    const url = "http://localhost:5000/users"
    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    
    const currentUser = users.find(cu => cu.email == user.email);


    return (
        <div className="mt-24">
            <h2 className="text-center text-3xl">User Profile</h2>
            <div className="flex items-center flex-col mt-8">
                <img className=" mx-auto rounded-full border-2 w-24 h-24" src={currentUser?.photo} alt="" />
                <h4 className="text-2xl">Name: {currentUser?.name}</h4>
                <h4 className="text-2xl">Email: {currentUser?.email}</h4>
                <h4 className="text-2xl">College: {currentUser?.college ? currentUser.college : "Not Found"}</h4>
                <h4 className="text-2xl">Address: {currentUser?.address ? currentUser.address : "Not Found"}</h4>
                <button className="btn btn-sm btn-success mx-5">Edit Profile</button>
            </div>
        </div>
    );
};

export default UserProfile;