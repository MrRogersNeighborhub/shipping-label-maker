import React, { useState } from 'react';

const GetReceiverAddress = ({ label, updateLabel, changePage }) => {

  const [toAdd, updateTo] = useState({
    'firstName': label?.to?.firstName || '',
    'lastName': label?.to?.lastName || '',
    'street': label?.to?.street || '',
    'city': label?.to?.city || '',
    'state': label?.to?.state || '',
    'zip': label?.to?.zip || '',
  });

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      let nameArr = e.target.value.split(' ');
      updateTo({
        ...toAdd,
        'firstName': nameArr[0],
        'lastName': nameArr[nameArr.length - 1],
      });
    } else if (e.target.id === 'street') {
      updateTo({
        ...toAdd,
        'street': e.target.value,
      })
    } else if (e.target.id === 'city') {
      updateTo({
        ...toAdd,
        'city': e.target.value,
      })
    } else if (e.target.id === 'state') {
      updateTo({
        ...toAdd,
        'state': e.target.value,
      })
    } else if (e.target.id === 'zip') {
      updateTo({
        ...toAdd,
        'zip': e.target.value,
      })
    }
  };

  // const handleNext = (e) => {
  //   updateLabel({ ...label, to: toAdd });
  //   changePage('2');
  // };

  return (
    <div>
      To:<br />
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
      <button onClick={ handleNext }>Next</button> */}
    </div>
  );
}

export default GetReceiverAddress;