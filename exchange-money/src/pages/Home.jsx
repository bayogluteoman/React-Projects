import React, { useState, useEffect } from 'react'
import { Container, FormControl, InputGroup, ListGroup, Navbar, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Modal from '../components/OpenModal';
import MyWallet from '../components/MyWallet';

// npm uninstall
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import BootstrapTable from 'react-bootstrap-table-next';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


export default function Home() {

    const axios = require('axios');

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [exchangedmoney, setExchangedMoney] = useState();
    const [hasShow, setHasShow] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({});
    const [hasCurrency, setHasCurrency] = useState([]);
    const [firstSelectedCurrency, setFirstSelectedCurrency] = useState("USD");


    var storedName = localStorage.getItem('name');
    var storedTotal = localStorage.getItem('USD');

    useEffect(() => {
        fetchData();
    }, [firstSelectedCurrency]);

    useEffect(() => {
    }, [hasCurrency]);

    useEffect(() => {
        fetchData();
        hasCurrency.push("USD")
    }, []);


    const fetchData = async () => {
        const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/ea2a30367d0825873cf5f2ef/latest/${firstSelectedCurrency}`
        );
        const vals = Object.keys(response.data.conversion_rates).map(key => { return { key: key, currency: response.data.conversion_rates[key] } });
        setData(vals);
    };


    const isEmptyInput= (str) => {
        return (!str || str.length === 0 );
    }

    const handleSelectedCurrency= (sonuc) => {
        setHasShow(true);
        setSelectedCurrency(sonuc);
    }

    const handleFilter = (value) => {
        let array = [];

        if(!isEmptyInput(value)){
            array = data.filter((dataResult) => {
                if (dataResult.key.includes(value.toUpperCase())) {
                    return dataResult;
                }
            })
        }
       
        setFilteredData(array);
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Fast Exchange
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Brand>Total Worth : {storedTotal} $  </Navbar.Brand>
                </Container>

                <Container>
                    <Navbar.Brand>Welcome {storedName.charAt(0).toUpperCase() + storedName.slice(1)} </Navbar.Brand>
                    <Link className="nav-link" to={"/sign-in"}>Log out</Link>
                </Container>
            </Navbar>

            <InputGroup className="mt-5">
                <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                <FormControl
                    placeholder="Search Curreny"
                    aria-label=""
                    aria-describedby="basic-addon1"
                    onChange={(e) => { handleFilter(e.target.value) }}
                />
            </InputGroup>

            <ListGroup as="ul">
                {filteredData.map((sonuc) => {
                    return(
                        <ListGroup.Item as="li" action variant="dark" onClick={() => {handleSelectedCurrency(sonuc)}}>
                            {sonuc.key}
                        </ListGroup.Item>
                    )
                    
                })}

            </ListGroup>

            <MyWallet hasCurrency={hasCurrency} />

            {hasShow && <Modal title="Exchange Your Money"   setFirstSelectedCurrency={setFirstSelectedCurrency} setHasShow={setHasShow} hasCurrency={hasCurrency} setHasCurrency= {setHasCurrency} currencyTitle={selectedCurrency.key} hasShow={hasShow} currency={parseFloat(selectedCurrency.currency)} setExchangedMoney={setExchangedMoney}/>}
        </>
    )
}
