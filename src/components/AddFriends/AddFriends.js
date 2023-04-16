
import React, { useEffect, useState } from "react";
import logo from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import '../AddFriends/AddFriends.css'
import * as authService from '../services/auth';
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

    const allUsers = users.map((e) => ({
        ...e
    }))


    const dataUsers = allUsers.map((e) => {

        return (
            <>
                <div className="addFriendcontainer">
                    <Navbar/>
                    <div>
                        <div className="headContainer">
                            <h1>Find friends and have fun</h1>
                        </div>
                        <div className="friendContainer">
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">{e.FirstName}</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >

                                <img src={logo} alt=""></img>

                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>
                            <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div> <div className="userCardContainer" >
                                <img src={logo} alt=""></img>
                                <div className="userNameContainer">
                                    <span className="userName">Ismet Dailov</span>
                                </div>
                                <button>Add to friend's</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
        })
    return (
        <>
        {dataUsers}
        </>
    )
}
export default AddFriends