import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
   text-align: center;
   margin: 50px 0 0;  
`;
const Additional = styled.h2`
   text-align: center;
   font-size: 18px;  
   margin-top: 10px;
`;

export const Info = () => {
   return (
      <div>
         <Text>Infinite Unsplash Gallery</Text>
         <Additional>Click on the image to open it in full size</Additional>  
      </div>
   )
}
