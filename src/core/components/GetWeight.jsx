import React from 'react';

const GetWeight = ({ label, updateLabel }) => {

  const handleChange = (e) => {
    // updateWeight(Number(e.target.value));
    updateLabel({
      ...label,
      weight : Number(e.target.value)
    })
  };

  return (
    <div>
      <b>Weight:</b>
      <br />
      <label>Enter package weight
        <input
          type='text'
          id='weight'
          onChange={ handleChange }
          value={ label.weight || null }
        />
        lbs
      </label>
    </div>
  );
}

export default GetWeight;