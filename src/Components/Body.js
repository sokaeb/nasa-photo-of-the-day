import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledBody = styled.div`
/* max-width: 100%; */
border: 2px solid palevioletred;
display: flex;
flex-direction: column;
align-items: center;
img {
    width: 60%;
    border: 2px solid #7a1f5c; 
};

p {
    color: blue;
};

`

export default function Body(props) {
    const {imgOfDay, explain} = props;
    
    return (
        <StyledBody className="Body">
            <img src={imgOfDay} alt="NASA Astronomy of the Day"/>
            <p>{explain}</p>
        </StyledBody>
    );
  }