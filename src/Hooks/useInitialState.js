import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(response => {setItems(response);});
  }, []);
  return items
}

export default useInitialState;
