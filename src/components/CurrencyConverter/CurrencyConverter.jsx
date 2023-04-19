import React, {useState, useEffect} from 'react';
import './CurrencyConverter.scss'

const CurrencyConverter =()=>{
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('CNY');
    const [exchangeRate, setExchangeRate] = useState(1);
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    useEffect(() =>{
        const API_KEY = '24b726f9547346ce2f37e2ec';
        fetch('https://v6.exchangerate-api.com/v6/24b726f9547346ce2f37e2ec/latest/USD')
            .then(res => res.json())
            .then(data => {
                setCurrencyOptions([data.base, ...Object.keys(data.conversion_rates)]);
                setExchangeRate(data.conversion_rates[targetCurrency]);
            });
    }, [baseCurrency, targetCurrency]);

    useEffect(() =>{
        setResult((amount * exchangeRate).toFixed(2));
    }, [amount, exchangeRate]);

    const handleBaseCurrencyExchange = e =>{
        setBaseCurrency(e.target.value);
    };

    const handleTargetCurrencyChange = e =>{
        setTargetCurrency(e.target.value);
    };

    const handleAmountChange = e =>{
        setAmount(e.target.value);
    };

    return(
        <div className='currency-converter'>
            <h2>Currency Converter</h2>
            <div className='input-container'>
                <input type='number' value={amount} onChange={handleAmountChange} placeholder='Enter Amount'/>
                <select value={baseCurrency} onChange={handleBaseCurrencyExchange}>
                    {currencyOptions.map(currency =>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div className='output-container'>
                    <p>
                        {amount} {baseCurrency} = {result} {targetCurrency}
                    </p>
                    <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
                        {currencyOptions.map(currency =>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
            </div>
        </div>
    );
};

export default CurrencyConverter;