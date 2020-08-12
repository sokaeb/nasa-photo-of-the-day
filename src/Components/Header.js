import React from 'react';
import axios from 'axios'

export default function Header(props) {
    const {title, date} = props;
    
    return (
        <div className="header">
            <h1>{title}</h1>
                <h3>{date}</h3>
        </div>
    );
}
