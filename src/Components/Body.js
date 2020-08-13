import React from 'react';
import styled from 'styled-components';


const StyledBody = styled.div`
/* border: 2px solid palevioletred; */
display: flex;
flex-direction: column;
align-items: center;
color: ${props => props.theme.secondaryColor};


img {
    width: 70%;
    /* border: 2px solid #9D219D; */
    margin: 5% 0 5%; 
};

p {
    margin: 0 5% 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 70%;
    line-height: 1.5;
    text-align: justify;
    border-top: 2px dashed black;
    border-bottom: 2px dashed black;
};

`

export default function Body(props) {
    const {nasaData} = props;
    
    return (
        <StyledBody className="Body">
            <img src={nasaData.url} alt="NASA Astronomy of the Day"/>
            <p>{nasaData.explanation}</p>
        </StyledBody>
    );
  }