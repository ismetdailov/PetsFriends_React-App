import React from "react";
import '../Messages/Messages.css'
import logo from '../ComponentImages/logo1.png'

export const Messages = ({
    onClose
}) => {    

return(
    <>
    
    <div className="containerContainer">
        <div className="h1Container">
        <h1>Send message to your friends</h1>
        </div>
        <div className="contentContainer">
        <section className="asideSection">
        <div className="friendMessagesContainer">
            <img src={logo} alt=''></img>
            <h3>Ismet Dailov</h3>
            <p>hi how are you</p>
        </div>
        </section>
        <section className="centerbSection">
            <div className="centerContentContainer">
                <div>
                    <span>Ismet Dailov</span>
                </div>
                <div className="messageContainer">
                <span className="lesftSpan"></span>
                <span className="rightSpan"></span>

                </div>
            </div>
        </section>
        </div>
    </div>
    
    </>
)

}
