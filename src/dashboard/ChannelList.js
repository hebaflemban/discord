import React from 'react';

function ChannelList() {
    const chanels = ['G1', 'G2', 'G3', 'G4', 'G5'];
    // img_url, owner, name, id
    let chanelCards = chanels.map(chnl => (
        <p key={chnl}>{chnl}</p>
    ))
    return (
        <div className="border border-warning m-5">
            {chanelCards}
        </div>
    );
}

export default ChannelList;
