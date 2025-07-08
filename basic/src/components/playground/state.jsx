import {useState} from 'react';

const StatePlayground = () => {

  let count = useState(0);
  console.log(count);

  return (
    < >
      <h3>Count: {count[0]}</h3>
    </>
  );
}

export default StatePlayground;