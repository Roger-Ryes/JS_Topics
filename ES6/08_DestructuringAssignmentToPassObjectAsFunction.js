'use strict'
// Consider the code below:
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }
// This can also be done in-place:
const profileUpdate2 = ({name, age, nationality, location})=>{
  console.log(name+" - "+age);
}

// Example
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

const half = ({max, min})=>{
    console.log(`${max}-(${min})= `,max-min);
}

half(stats);