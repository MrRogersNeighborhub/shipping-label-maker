import React from 'react';

const GetSenderAddress = ({ label, updateLabel, changePage }) => {

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      let nameArr = e.target.value.split(' ');
      updateLabel({
        ...label,
        from : {
          ...label.from,
          'firstName': nameArr[0],
          'lastName': nameArr[nameArr.length - 1],
        }
      });
    } else if (e.target.id === 'street') {
      updateLabel({
        ...label,
        from : {
          ...label.from,
          'street': e.target.value,
        }
      })
    } else if (e.target.id === 'city') {
      updateLabel({
        ...label,
        from : {
          ...label.from,
          'city': e.target.value,
        }
      })
    } else if (e.target.id === 'state') {
      updateLabel({
        ...label,
        from : {
          ...label.from,
          'state': e.target.value,
        }
      })
    } else if (e.target.id === 'zip') {
      updateLabel({
        ...label,
        from : {
          ...label.from,
          'zip': e.target.value,
        }
      })
    }
  };

  return (
    <div>
      <b>From:</b>
      <br />
      <label>Name: </label>
      <input
        type="text"
        id="name"
        onChange={ handleChange }
        value={ label.from?.firstName !== undefined && label.from?.lastName !== undefined ?
           label.from.firstName + ' ' + label.from.lastName :
          null
        }
      />
      <br />
      <label>Street: </label>
      <input
        type="text"
        id="street"
        onChange={ handleChange }
        value={ label.from?.street !== undefined ? label.from.street : null }
      />
      <br />
      <label>City: </label>
      <input
        type="text"
        id="city"
        onChange={ handleChange }
        value={ label.from?.city !== undefined ? label.from.city : null }
      />
      <br />
      <label>State: </label>
      <input
        type="text"
        id="state"
        onChange={ handleChange }
        value={ label.from?.state !== undefined ? label.from.state : null }
      />
      <br />
      <label>Zip: </label>
      <input
        type="text"
        id="zip"
        onChange={ handleChange }
        value={ label.from?.zip !== undefined ? label.from.zip : null }
      />
    </div>
  );
}

export default GetSenderAddress;