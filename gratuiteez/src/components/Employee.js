import React from 'react';


function Employee() {
    return (
        <div>
            <img src={tippee.photo_url} alt="Employee Photo" />
            <h1>{tippee.name}</h1>
            <h3>{tippee.company}</h3>
            <p>{tippee.startDate}</p>
            <p>{tippee.email}</p>
            <p>{tippee.tagline}</p>
            <p>{tippee.qr_url}</p>
            <div>
                <button>Update Profile</button>
            </div>
        </div>
    )
}

export default Employee

