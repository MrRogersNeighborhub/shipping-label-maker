import React from 'react';

const GetShippingOption = ({ label, updateLabel }) => {


  const handleClick = (e) => {
    if (e.target.id === 'ground') {
      updateLabel({
        ...label,
        shippingOption : 1
      })
    } else {
      updateLabel({
        ...label,
        shippingOption : 2
      })
    }
  };

  return (
    <div>
      <b>Shipping Option:</b>
      <br />
      { label.shippingOption !== null ?
        <div>You have selected { label.shippingOption === 1 ? 'ground' : 'priority' } shipping</div> :
         null
      }
      <button id='ground' onClick={ handleClick }>Ground</button>
      <button id='priority' onClick={ handleClick }>Priority</button>
    </div>
  );
}

export default GetShippingOption;