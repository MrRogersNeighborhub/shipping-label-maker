import React, { useState } from 'react';

const GetSenderAddress = ({ label, updateLabel, changePage }) => {

  const [fromAdd, updateFrom] = useState({
    'firstName': label?.from?.firstName || '',
    'lastName': label?.from?.lastName || '',
    'street': label?.from?.street || '',
    'city': label?.from?.city || '',
    'state': label?.from?.state || '',
    'zip': label?.from?.zip || '',
  });

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      let nameArr = e.target.value.split(' ');
      updateFrom({
        ...fromAdd,
        'firstName': nameArr[0],
        'lastName': nameArr[nameArr.length - 1],
      });
    } else if (e.target.id === 'street') {
      updateFrom({
        ...fromAdd,
        'street': e.target.value,
      })
    } else if (e.target.id === 'city') {
      updateFrom({
        ...fromAdd,
        'city': e.target.value,
      })
    } else if (e.target.id === 'state') {
      updateFrom({
        ...fromAdd,
        'state': e.target.value,
      })
    } else if (e.target.id === 'zip') {
      updateFrom({
        ...fromAdd,
        'zip': e.target.value,
      })
    }
  };

  // const handleNext = (e) => {
  //   updateLabel({ ...label, from: fromAdd });
  //   changePage('3');
  // };
  // const handlePrev = (e) => {
  //   updateLabel({ ...label, from: fromAdd });
  //   changePage('1');
  // };

  return (
    <div>
      From:<br />
      <label>Name: </label>
      <input type="text" id="name" onChange={ handleChange }></input>
      <br />
      <label>Street: </label>
      <input type="text" id="street" onChange={ handleChange }></input>
      <br />
      <label>City: </label>
      <input type="text" id="city" onChange={ handleChange }></input>
      <br />
      <label>State: </label>
      <input type="text" id="state" onChange={ handleChange }></input>
      <br />
      <label>Zip: </label>
      <input type="text" id="zip" onChange={ handleChange }></input>
      {/* <br />
      <button onClick={ handleNext }>Next</button>
      <button onClick={ handlePrev }>Previous</button> */}
    </div>
  );
}

export default GetSenderAddress;