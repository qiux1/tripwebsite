import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Budget Tracker</h1>
      <form onSubmit={addExpense}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {budget.map((item, index) => (
          <li key={index}>
            {item.description}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;
