import React from 'react';

const Confirm = ({ label }) => {

  return (
    <div>
      { label.to.firstName + ' ' + label.to.lastName }
      <br />
      { label.to.street }
      <br />
      { label.to.city}
      <br />
      { label.to.state }
      <br />
      { label.to.zip }
      <br />
      { label.from.firstName + ' ' + label.from.lastName }
      <br />
      { label.from.street }
      <br />
      { label.from.city }
      <br />
      { label.from.zip }
      <br />
      { label.shippingOption === 1 ? 'Ground' : 'Priority' }
      <br />
      { label.weight + ' lbs.' }
    </div>
  )
};

export default Confirm;