import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BudgetTracker.scss';

const BudgetTracker = () => {
  const [budget, setBudget] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchBudget();
  }, []);

  const fetchBudget = async () => {
    const res = await axios.get('/api/budget');
    setBudget(res.data);
  };

  const addExpense = async (e) => {
    e.preventDefault();
    await axios.post('/api/budget', { amount, description });
    fetchBudget();
  };

  return (
    <div className="budget-tracker">
      <h1 className="title">Budget Tracker</h1>
      <form onSubmit={addExpense} className="form">
        <div className="input-group">
          <label htmlFor="amount" className="label">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description" className="label">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="submit-btn">Add Expense</button>
      </form>
      <ul className="expense-list">
        {budget.map((item, index) => (
          <li key={index} className="expense-item">
            <span className="description">{item.description}</span>
            <span className="amount">${item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
