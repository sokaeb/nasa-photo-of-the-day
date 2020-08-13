import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';  only needed if 
//using axios again here

export default function Footer(props) {
    const {nasaData} = props;

    const StyledFooter = styled.div`
      text-align: left;
      margin-left: 5%;
      background-image: url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80');
      background-repeat:no-repeat;
      background-size:cover;
      background-position:center;
      background-attachment:fixed;
      margin: ${props => props.theme.margins.small};
      padding: ${props => props.theme.paddings.big};

      h4 {
        color: ${props => props.theme.white};
        padding: ${props => props.theme.paddings.small};
      };
    `

    return (
        <StyledFooter className="footer">
          <h4>{nasaData.copyright}</h4>
        </StyledFooter>
    );
}

