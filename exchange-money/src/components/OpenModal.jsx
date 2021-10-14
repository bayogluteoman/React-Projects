import React, { useState, useEffect } from 'react';
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const OpenModal = ({ title, currencyTitle, currency, hasCurrency,  setExchangedMoney, setHasCurrency, hasShow, setHasShow, setFirstSelectedCurrency, setSelectedButtonCurrency, ...props }) => {

    const [amount, setAmount] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [selectedButtonCurrencyRate, setSelectedButtonCurrencyRate] = useState(0);
    const [show, setShow] = useState(hasShow);
    const handleClose = () => setHasShow(false);

    const axios = require('axios');

    const handleAmount = (value) => {
        setAmount(value);
    }
   
    var firstSelected = "USD";
    const handleUpdateSelectedCurrency = (currency) => {
        firstSelected = currencyTitle;
        setFirstSelectedCurrency(currencyTitle);
    }

    useEffect(() => {
        setSelectedButtonCurrencyRate(currency);
    }, [currency]);



    const handleExchange = () => {
        const result = amount * currency;
        setExchangedMoney(result);

        localStorage.setItem(`${currencyTitle}`, result);

        const updatedHasCurrency = [...hasCurrency];
        updatedHasCurrency.push(currencyTitle);
        setHasCurrency(updatedHasCurrency);
        let currencyAmount = localStorage.getItem(`${selectedCurrency}`);

        let updatedCurrencyAmount = localStorage.getItem(`${firstSelected}`) - amount;

        localStorage.setItem(selectedCurrency, currencyAmount);
        localStorage.setItem(`${firstSelected}`, updatedCurrencyAmount)

        handleClose();
    }

    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               
                {hasCurrency.map((currency) => {
                    return (
                        <Button key={currency} variant="primary" className="mb-2 " onClick={(currency) => { handleUpdateSelectedCurrency(currency) }}>
                            {currency}
                        </Button>)
                })}


                <InputGroup.Text className="mt-2" id="SELECTED"> to {currencyTitle}  </InputGroup.Text>
                <InputGroup.Text className="mt-2" id="rate">Rate : { `${selectedButtonCurrencyRate}` } </InputGroup.Text>

                <InputGroup className="mt-2 mb-2 mr-1 ">
                    <InputGroup.Text id="inputGroup-sizing-default" >Amount</InputGroup.Text>
                    <FormControl
                        placeholder="write amount"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        onChange={(e) => { handleAmount(e.target.value) }}
                    />

                </InputGroup>
                <Button variant="success" onClick={() => { handleExchange() }}>Exchange</Button>

            </Modal.Body>


        </Modal>
    )
}

export default OpenModal;