import React from 'react';
import styled from 'styled-components';

// Write your Character component here

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .character-div {
    width: 25vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f4f6ff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 1rem;
    margin: 1.5rem;
    p {
      line-height: 3px;
    }
  }
`;

const Character = ({name, gender, height, mass, birthYear, eyeColor, hairColor}) => {
    return (
      <StyledDiv>
        <div className='character-div'>
          <h1>{name}</h1>
          <p>gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Birth Year: {birthYear}</p>
          <p>Eye Color: {eyeColor}</p>
          <p>Hair Color: {hairColor}</p>
          
        </div>
      </StyledDiv>
    );
  };
  
  export default Character; 
  