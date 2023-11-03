import { useState } from "react";

export default function toggleShow (show){
  const [hidden, setHidden] = useState(false);

  const toggleShowState = show ? setShow(false) : setShow(true);

  return hidden;
}