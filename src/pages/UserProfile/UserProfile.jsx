import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="mt-24">
            <h2 className="text-center text-3xl">User Profile</h2>
            <div className="flex items-center flex-col mt-8">
                <img className=" mx-auto rounded-full border-2 w-24 h-24" src={user?.photoURL} alt="" />
                <h4 className="text-2xl">Name: {user?.displayName}</h4>
                <h4 className="text-2xl">Email: {user?.email}</h4>
                <h4 className="text-2xl">College: {user?.college ? user.College : "Not Found"}</h4>
                <h4 className="text-2xl">Address: {user?.address ? user.address : "Not Found"}</h4>
                <button className="btn btn-sm btn-success mx-5">Edit Profile</button>
            </div>
        </div>
    );
};

export default UserProfile;