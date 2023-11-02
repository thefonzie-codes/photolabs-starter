import React from 'react';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from 'components/PhotoList';
// import TopicListItem from 'components/TopicListItem';
// import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

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

// const createPhotoListItemComponent = photoArr.map(photo => 
//   <PhotoListItem photo={photo} key={photo.id}/>
// );

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
