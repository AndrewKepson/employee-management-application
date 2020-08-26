import React from 'react';
import './Directory.css'

const Directory = props => {
    return(
        <div className="wrapper">{props.children}</div>
    )
}

export default Directory;