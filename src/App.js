import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';             
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';
import './components/CurrencySelector.css';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3 text-center'>Company's Budget Allocation</h1>

                <div className='row mt-4'>
                    <div className='col-md-6 col-lg-3'>
                        <Budget />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <Remaining />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <CurrencySelector />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ExpenseTotal />
                    </div>
                </div>

                <h3 className='mt-5'>Allocation</h3>
                <div className='row mt-3'>
                    <div className='col'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-5'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
