import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
   width: 100%;
   object-fit: cover;
   cursor: pointer;
   margin:50px 0 0 0;
   border-radius: 10px;
   border:20px solid black;
   transition: 0.1s;

   :hover{
      border:20px solid rgba(0,0,0,0.9);
      transform: scale(0.95);
   }
`;

const Block = styled.div`
   max-width:300px;

   @media screen and (max-width:920px){
      max-width: 350px;
   }

   @media screen and (max-width:700px){
      max-width: 700px;
   }
`;


export const Card = ({ key, source, name,description}) => {

   return (
      <div>
         <Block>
            <Img key={key} src={source} />
            <h2>User name: {name}</h2>
            <p>Description: {description}</p>
         </Block>
      </div>
   )
}
