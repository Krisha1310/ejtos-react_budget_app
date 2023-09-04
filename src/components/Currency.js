import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Currency = (prop) => {
  const {dispatch,currency } = useContext(AppContext);
  var D = "";
    switch(currency){
        case "$": D = "$ Dollar"; break;
        case "£": D = "£ Pound";  break;
        case "€": D = "€ Euro";  break;
        case "₹": D = "₹ Ruppee";  break;
        default: D = "£ Pound"; break;
    }
    var displayName = "Currency (" + D + ")";
    const changeCurrency = (val) => {
        switch(val){
            case "$": D = "$ Dollar"; break;
            case "£": D = "£ Pound"; break;
            case "€": D = "€ Euro"; break;
            case "₹": D = "₹ Ruppee"; break;
            default: D = "£ Pound"; break;
        }
        displayName = "Currency (" + D + ")";
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }
    
  return (
    <div className='alert alert-secondary d-flex'>
     <DropdownButton onSelect={changeCurrency} title={displayName} id="dropdown-basic">
       <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
       <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
       <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
       <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
     </DropdownButton>
   </div>
    );
};
export default Currency;