import React, { useState, useEffect } from 'react';
import { Info } from './components/Info';
import { Card } from './components/Card';
import { ImagePage } from './components/ImagePage';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', 'Arial', sans-serif;
    user-select: none;
    text-decoration: none;
    color: black;
    cursor: default;
  }
`;

const CardWrapper = styled.div `
  max-width: 1000px;
  padding: 0 8px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width:700px){
    justify-content: center;
    max-width: 95%;
 }
`;


function App() {
  return ( 
  <div className = "App" >
    <Router>
      <Switch>
        <Route exact path="/unsplash-gallery/:id" component={ImagePage} />
        <Route exact path="/unsplash-gallery" exact component={Gallery} />
      </Switch>
    </Router>
  </div>
  );
}


function Gallery() {
  const [information, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api_root = 'https://api.unsplash.com';

    axios
      .get(`${api_root}/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
      .then(res => setData([...information, ...res.data]));
  }
  return (
   <div>
     <Info />
       {console.log(information)}
    <GlobalStyle />
    <InfiniteScroll dataLength = {information.length}
    next = {getData}
    hasMore = {true} >

      <CardWrapper > {
        information.map(info => ( 
          <Link to={`/unsplash-gallery/${info.id}`} key={`${info.id}` }>
            <Card key = {info.id}
                  source = {info.urls.small}
                  name = {info.user.username}
                  description = {info.alt_description}/>
          </Link>
         ))
      }</CardWrapper>
    </InfiniteScroll>
   </div> 
  );
}

export default App;