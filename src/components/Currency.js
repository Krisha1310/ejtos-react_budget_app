import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'
const Currency = () => {
  const {dispatch,currency } = useContext(AppContext);
  var displayName = "Currency (" + currency + ")";
    const changeCurrency = (val) => {
        displayName = "Currency (" + val + ")";
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }
    
  return (
    <div className='alert alert-secondary form-group'>  {
      <select name="Currency" id="Currency" value={displayName} className="custom-select slt-currency"
      onChange={(event) => changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    // <div className='alert alert-secondary'> <div className="dropdown">
    // <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //     Dropdown button
    // </button>
    // <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     <a className="dropdown-item" href="#">$ Dollar</a>
    //     <a className="dropdown-item" href="#">£ Pound</a>
    //     <a className="dropdown-item" href="#">€ Euro</a>
    //     <a className="dropdown-item" href="#">₹ Ruppee</a>
    // </div>
    // </div>
    // </div>
    );
};
export default Currency;