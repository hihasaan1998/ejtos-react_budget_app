// CurrencySelector.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencySelector.css'; // Import CSS for styling

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className="currency-dropdown">
            <label htmlFor="currency">Currency:</label>
            <select id="currency" onChange={(e) => handleCurrencyChange(e.target.value)}>
                
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
