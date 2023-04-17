
import React, { useEffect, useState } from "react";
import logo from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import '../AddFriends/AddFriends.css'
import * as authService from '../services/authenticationService';
import { Navbar } from "../Navbar/Navbar";



export const AddFriends = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        authService.listAllUsers().then((res) => {
            const data = res.docs.map((user) => ({
                ...user.data(),
                id: user.id,
            }))
            setUsers(data)
        })
    })
 
  



        return (
            <>
                <div className="addFriendcontainer">
                    <Navbar/>
                    <div>
                        <div className="headContainer">
                            <h1>Find friends and have fun</h1>
                        </div>
                        <div className="friendContainer">
                        {users?.map((e) => {

                           return( <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName" >{e.userName}</span>
                                </div>
                                <button>Add to friends</button>
                            </div>
                            )})}
                        </div>
                    </div>
                </div>

            </>
        )
}
export default AddFriends