import React from 'react';
import styled from 'styled-components';


export default function Header(props) {
    const {nasaData} = props;

    const StyledHeader = styled.div`
        background-image: url('https://images.unsplash.com/photo-1528819027803-5473f2bf7633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        background-attachment:fixed;
        margin: ${props => props.theme.margins.small};
        padding: ${props => props.theme.paddings.big};

        h1, h2, h3 {
            color: ${props => props.theme.white}
        };

        h3 {
            text-align: right;
        };

    `
    
    return (
        <StyledHeader className="header">
            <h1>NASA Astronomy Photo of the Day</h1>
                <h2>{nasaData.title}</h2>
                <h3>{nasaData.date}</h3>
        </StyledHeader>
    );
}
