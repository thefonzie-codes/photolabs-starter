import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoListItem from 'components/PhotoListItem';
import photos from 'mocks/photos';

// const photoArr = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "2",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "3",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   }
// ]


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