import React, { useState } from 'react';

const GetShippingOption = ({ label, updateLabel, changePage }) => {

  const [option, updateOption] = useState(label?.to?.shippingOption || null);

  const handleClick = (e) => {
    if (e.target.id === 'ground') updateOption(1);
    else updateOption(2);
  };

  const handleNext = (e) => {
    updateLabel({...label, shippingOption: option});
    changePage('4');
  };

  const handlePrev = (e) => {
    updateLabel({...label, shippingOption: option});
    changePage('2');
  };

  return (
    <div>
      Shipping Option:<br />
      <button id='ground' onClick={ handleClick }>Ground</button>
      <button id='priority' onClick={ handleClick }>Priority</button>
      {option !== null ? <div> You have selected {option === 1 ? 'ground' : 'priority' } shipping</div> : null}
      <button onClick={ handleNext }>Next</button>
      <button onClick={ handlePrev }>Previous</button>
    </div>
  );
}

export default GetShippingOption;