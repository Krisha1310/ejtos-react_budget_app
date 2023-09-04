import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (B) => {
        if(B > 20000){
            alert("Budget cannot exceed 20000.");
            return;
        }
        else if(B < totalExpenses ){
            alert("Cannot decrease budget!! Should be more than spendings.");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: B,
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
             <input type="number" 
             value={budget} 
             step="10"
             onChange={(event) => setBudget(event.target.value)}
             />
            </span>
        </div>
    );
};
export default Budget;