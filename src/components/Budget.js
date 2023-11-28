import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        let updatedBudget = parseInt(event.target.value);

        // Check if the new budget is within limits
        if (updatedBudget < totalExpenses() || updatedBudget > 20000) {
            alert('Budget must be at least the total spending and no more than 20,000.');
            return;
        }

        setNewBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    };

    const totalExpenses = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
           
        </div>
    );
};

export default Budget;
