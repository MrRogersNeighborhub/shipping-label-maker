import React, { useState } from 'react';

const GetWeight = ({ label, updateLabel, changePage }) => {

  const [weight, updateWeight] = useState();

  const handleChange = (e) => {
    updateWeight(Number(e.target.value));
  };

  const handleNext = (e) => {
    updateLabel({...label, weight: weight});
    changePage('5');
  };

  const handlePrev = (e) => {
    updateLabel({...label, weight: weight});
    changePage('3');
  };

  return (
    <div>
      Weight: <br />
      <label>Enter package weight</label>
      <input type='text' id='weight' onChange={ handleChange }></input>
      <button onClick={ handleNext }>Next</button>
      <button onClick={ handlePrev }>Previous</button>
    </div>
  );
}

export default GetWeight;