import React from 'react';
import axios from 'axios';

export default function Header(props) {
    const {title, date} = props;
    
    return (
        <div className="header">
            <h1>NASA Astronomy Photo of the Day</h1>
                <h2>{title}</h2>
                <h3>{date}</h3>
        </div>
    );
}
