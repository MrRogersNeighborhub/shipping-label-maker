import React, { useState, useEffect } from 'react';
import GetReceiverAddress from './components/GetReceiverAddress.jsx';
import GetSenderAddress from './components/GetSenderAddress.jsx';
import GetShippingOption from './components/GetShippingOption.jsx';
import GetWeight from './components/GetWeight.jsx';
import Confirm from './components/Confirm.jsx';
//import ShippingLabelMaker from '../features/shipping-label-maker/ShippingLabelMaker.jsx';

// Move handle next and prev to wizard and create an array of pages to navigate through
const Wizard = ({ label, updateLabel }) => {
  // const [page, changePage] = useState('1');


  const pages = [
    <GetReceiverAddress updateLabel={ updateLabel } label={ label } />,
    <GetSenderAddress updateLabel={ updateLabel } label = { label } />,
    <GetShippingOption updateLabel={ updateLabel } label = { label } />,
    <GetWeight updateLabel={ updateLabel } label = { label } />,
    <Confirm label={ label }/>
  ];
  const [page, updatePage] = useState(0);

  const handleClick = (e) => {
    if (e.target.id === 'prev') updatePage(page - 1);
    else updatePage(page + 1);
  };

  return (
    <div>
      { pages[page] }
      <br />
      { page !== 0 ?
        <button id="prev" onClick={ handleClick }>Previous</button> :
        null
      }
      { page !== 4 ?
        <button id="next" onClick={ handleClick }>Next</button> :
        null
      }
    </div>
    // <div>
    //   {page === '1' &&
    //     <GetReceiverAddress
    //     updateLabel={ updateLabel }
    //     label={ label }
    //     changePage={ changePage }/>
    //   }
    //   { page === '2' &&
    //     <GetSenderAddress
    //     updateLabel={ updateLabel }
    //     label = { label }
    //     changePage={ changePage }/>
    //   }
    //  { page === '3' &&
    //   <GetShippingOption
    //     updateLabel={ updateLabel }
    //     label = { label }
    //     changePage={ changePage }/>
    //   }
    //   { page === '4' &&
    //     <GetWeight
    //     updateLabel={ updateLabel }
    //     label = { label }
    //     changePage={ changePage }/>
    //   }
    //   { page === '5' &&
    //     <Confirm label={ label }/>
    //   }
    // </div>
  );
}

export default Wizard;