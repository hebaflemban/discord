import React from "react";
import Picker from 'react-giphy-picker'


const Giphy = (props) => {

    const log = (gif) => {
        console.log(gif.original.url)
    }
    return (
        <div className="m-2">
            <Picker onSelected={log.bind(this)} />
        </div>
    );
};

export default Giphy;
