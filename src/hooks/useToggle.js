import {useCallback,useState} from 'react';

const useToggle = (intialToggle=false) => {
    //value set here
    const [bool,setBool]=useState(intialToggle);
  //logic
  const toggle=()=>{  
      setBool((oldbool)=>!bool) 
  }

  return [bool,toggle]
};

export default useToggle;