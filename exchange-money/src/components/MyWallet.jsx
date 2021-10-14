import React, { useState, useEffect } from 'react'
import Modal from '../components/OpenModal';
import { Table, Button, Form } from 'react-bootstrap';

const MyWallet = ({ currencyTitle, currency, hasCurrency, setFirstSelectedCurrency, setHasCurrency, selectedCurrency, setExchangedMoney }) => {

    const [tableDatas, setTableDatas] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [hasShow, setHasShow] = useState(false);

    const handleActivate = () => {
               
        setButtonDisabled(false);
        if (buttonDisabled == false) {
            setButtonDisabled(true);
        }
    }

    const handleShow = (sonuc) => {
        setHasShow(true);
    }

    const getTableDatas = () => {
        const rowDatas = hasCurrency.map((currency) => {
            return (
                { acronym: currency, amount: localStorage.getItem(`${currency}`) }
            )
        })

        setTableDatas(rowDatas);
    }

    useEffect(() => {
        getTableDatas();
    }, [hasCurrency]);

    useEffect(() => {
        getTableDatas();
    }, []);


    return (
        <div className="mt-5 text-center row row-cols-1" >
            <Form.Label className=" col p-3 bg-secondary text-white fw-bold text-uppercase font-monospace fs-5 " >Your Wallet</Form.Label>
            <Table bordered hover >
                <thead>
                    <tr>
                        <th></th>
                        <th>Acronym</th>
                        <th>Amount</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {tableDatas && tableDatas.map((rowData) => {
                        return (
                            <tr >
                                <td className="text-center"><Form.Check type="switch" onClick={() => { handleActivate() }} /></td>
                                <td>{rowData.acronym}</td>
                                <td>{rowData.amount}</td>
                                <td className="text-center  ">
                                    <Button id={rowData.acronym} variant="success" disabled={buttonDisabled} onClick={() => { handleShow() }}>Buy</Button>
                                    <Button id={rowData.acronym} variant="danger" disabled={buttonDisabled} onClick={() => { handleShow() }}>Sell</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {hasShow && <Modal title="Exchange Your Money"
                setFirstSelectedCurrency={setFirstSelectedCurrency}
                setHasShow={setHasShow}
                hasCurrency={hasCurrency}
                setHasCurrency={setHasCurrency}
                currencyTitle={selectedCurrency}
                hasShow={hasShow}
                currency={parseFloat(selectedCurrency)}
                setExchangedMoney={setExchangedMoney} />}
        </div>
    )
}
export default MyWallet;
