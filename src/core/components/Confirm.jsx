import React from 'react';

const Confirm = ({ label }) => {

  return (
    <div>
      <b>To:</b>
      <br />
      { label.to.name }
      <br />
      { label.to.street }
      <br />
      { label.to.city + ', ' + label.to.state + ', ' + label.to.zip }
      <br />
      <br />
      <b>From:</b>
      <br />
      { label.from.name }
      <br />
      { label.from.street }
      <br />
      { label.from.city + ', ' + label.from.state + ', ' + label.from.zip }
      <br />
      <br />
      <b>Shipping Option:</b>
      <br />
      { label.shippingOption === 1 ? 'Ground' : 'Priority' }
      <br />
      <br />
      <b>Package Weight:</b>
      <br />
      { label.weight + ' lbs.' }
    </div>
  )
};

export default Confirm;