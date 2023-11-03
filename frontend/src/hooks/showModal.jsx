import { useState } from "react";

export default function showModal (photo){
  
  const [photoData, setPhotoData] = useState(null);

  setPhotoData(photo);

  return photoData;
}