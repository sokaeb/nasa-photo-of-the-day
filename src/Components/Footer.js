import React from 'react';
import axios from 'axios';

export default function Footer(props) {
    const {copyright} = props;

    return (
        <div className="footer">
          <h4>{copyright}</h4>
        </div>
    );
}

