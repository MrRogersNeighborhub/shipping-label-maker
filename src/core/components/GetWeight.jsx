import React from 'react';

const GetWeight = ({ label, updateLabel }) => {

  const handleChange = (e) => {
    updateLabel({
      ...label,
      weight : e.target.value
    })
  };

  return (
    <div>
      <b>Weight:</b>
      <br />
      <label>Enter package weight <input
          type='number'
          min='1'
          id='weight'
          onChange={ handleChange }
          value={ label.weight || null }
        /> lbs.
      </label>
    </div>
  );
}

export default GetWeight;