import React from 'react';

const GetReceiverAddress = ({ label, updateLabel, changePage }) => {

    const handleChange = (e) => {
    if (e.target.id === 'name') {
      let nameArr = e.target.value.split(' ');
      updateLabel({
        ...label,
        to : {
          ...label.to,
          'firstName': nameArr[0],
          'lastName': nameArr[nameArr.length - 1],
        }
      });
    } else if (e.target.id === 'street') {
      updateLabel({
        ...label,
        to : {
          ...label.to,
          'street': e.target.value,
        }
      })
    } else if (e.target.id === 'city') {
      updateLabel({
        ...label,
        to : {
          ...label.to,
          'city': e.target.value,
        }
      })
    } else if (e.target.id === 'state') {
      updateLabel({
        ...label,
        to : {
          ...label.to,
          'state': e.target.value,
        }
      })
    } else if (e.target.id === 'zip') {
      updateLabel({
        ...label,
        to : {
          ...label.to,
          'zip': e.target.value,
        }
      })
    }
  };

  return (
    <div>
      <b>To:</b>
      <br />
      <label>Name: </label>
      <input
        type="text"
        id="name"
        onChange={ handleChange }
        value={ label.to?.firstName !== undefined && label.to?.lastName !== undefined ?
          label.to.firstName + ' ' + label.to.lastName :
          null
        }
      />
      <br />
      <label>Street: </label>
      <input
        type="text"
        id="street"
        onChange={ handleChange }
        value={ label.to?.street !== undefined ? label.to.street : null }
      />
      <br />
      <label>City: </label>
      <input
        type="text"
        id="city"
        onChange={ handleChange }
        value={ label.to?.city !== undefined ? label.to.city : null }
      />
      <br />
      <label>State: </label>
      <input
        type="text"
        id="state"
        onChange={ handleChange }
        value={ label.to?.state !== undefined ? label.to.state : null }
      />
      <br />
      <label>Zip: </label>
      <input
        type="text"
        id="zip"
        onChange={ handleChange }
        value={ label.to?.zip !== undefined ? label.to.zip : null }
      />
    </div>
  );
}

export default GetReceiverAddress;