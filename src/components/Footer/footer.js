import React from 'react';
import '../Footer/footer.css'
import { Link } from 'react-router-dom';

function Guest() {
    return (
        <>
            <div className='containerFooter'>
                <div className='contact'>
                    <span>Contact us on email:</span>
                    <div>
                        <Link>petsfriendsinformation@gmail.com</Link>
                    </div>
                </div>
                <div>
                    <p>Copyright ©</p>
                </div>
                <div>
                    <p>All rights reserved</p>
                </div>
                <div>

                    <p>2023</p>
                </div>
            </div>
        </>
    )
};

export default Guest