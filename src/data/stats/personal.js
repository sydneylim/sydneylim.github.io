// import React, { useState, useEffect } from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('2000-08-29T07:00:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  {
    key: 'location',
    label: 'Current city',
    value: 'San Francisco Bay Area, CA',
  },
  {
    key: 'sport',
    label: 'Favorite Sport',
    value: 'Badminton',
  },
  {
    key: 'handedness',
    label: 'Handedness',
    value: 'Mixed',
  },
];

export default data;
