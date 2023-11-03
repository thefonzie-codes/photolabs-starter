import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = (props) => {
  const { photos, topics } = props;

  const [userLikes, setUserLikes] = useState(0);

  console.log(userLikes);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} userLikes={userLikes}/>
      <PhotoList photos={photos} userLikes={userLikes} setUserLikes={setUserLikes}/>
    </div>
  );
};

export default HomeRoute;