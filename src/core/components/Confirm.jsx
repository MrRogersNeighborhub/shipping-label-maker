import React from 'react';

const Confirm = ({ label }) => {

  return (
    <div>
      { label.to.firstName }
      { label.to.lastName }
      <br></br>
      { label.to.street }
      <br></br>
      { label.to.city}
      <br></br>
      { label.to.state }
      <br></br>
      { label.to.zip }
      <br></br>
      { label.from.firstName }
      { label.from.lastName }
      <br></br>
      { label.from.street }
      <br></br>
      { label.from.city }
      <br></br>
      { label.from.zip }
      <br></br>
      { label.shippingOption }
      <br></br>
      { label.weight }
    </div>
  )
};

export default Confirm;