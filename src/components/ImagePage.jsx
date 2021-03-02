import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageWrap = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 1200px){
      flex-direction: column;
      width: 100%;
   }
`;

const CloseButton = styled.p`
   font-family: 'Helvetica';
   background: rgb(50,50,50);
   outline: none;
   border: none;
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   cursor: pointer;
   color: white;
   font-weight: bold;
   padding: 23px 0;
   
   transition: 0.1s;
   margin: 0;

   &:hover{
      color:  rgb(50,50,50);
      transition: 0.3s;
   }

   @media screen and (max-width: 1200px){
      padding: 10px 0;
      text-align: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0px;
      width: 100%;
   }

`;

const Image = styled.img`
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
   z-index: 100;
   width: 100%;
   height: 100%;
   @media screen and (max-width: 1200px){
      border-top-right-radius: 0px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
   }
`;

const ButtonText = styled.p`
   text-decoration: none;  
   transform: rotate(-90deg);
   font-size: 24px;
   padding: 0 0;
   @media screen and (max-width: 1200px){
      transform: rotate(0deg);
   }
   &:hover{
      transform:scale(1.1) rotate(-90deg);
      transition: 0.2s;
   }
`;

const Loading = styled.p`
   position: absolute;
   font-size: 40px;
   margin-top: 120px;
   font-family: 'Helvetica', sans-serif;
   z-index: 0;
`;
export const ImagePage = (props) => {
   let [url, setURL] = useState('');
   const api_root = 'https://api.unsplash.com';

   useEffect(() => {
      getImageDetail();
   }, []);

   let getImageDetail = () => {

      axios
         .get(`${api_root}/photos/${props.match.params.id}/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
         .then(data => {
            setURL(data.data.urls.regular);
         });
   }

   return (
      <ImageWrap>
         <Link to="/unsplash-gallery"><CloseButton><ButtonText>Close</ButtonText></CloseButton></Link>
         <Loading>Please wait. Image is loading..</Loading>
         <Image key={props.key} src={url}/>
      </ImageWrap>
   )
}
