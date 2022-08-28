import React, { useEffect, useState } from 'react'
import {Modal, Col, Row} from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import barcode from '../../assets/barcode.png'
import { API } from '../../config/api'
import rupiahFormat from 'rupiah-format'

export default function TransModal({transShow, Close, id}) {
    console.log(id);
    const [transaction, serTransaction] = useState([]);
    // const income = dataIncome[id - 1].order;
    // console.log(income)
    useEffect(() => {
        API.get("/transaction/" + id)
          .then((res) => {
            serTransaction(res.data.data);
            // console.log(res)
          })
          .catch((err) => console.log("error", err));
      });
    return (
    <Modal show={transShow} onHide={Close}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Body style={{backgroundColor:"#F6DADA", width:"100%", borderRadius:"6px"}}>
            <Row>
            <Col xs={12}>
                    <div>
                        <h4 className='text-start fw-bold fs-4 mb-3' style={{color:"#613D2B"}}>My Transaction</h4>
                    </div>
                    <Row className="p-3" style={{backgroundColor:"#F6DADA", borderRadius:"5px"}}>
                        <Col xs={12} md={8}>
                            <Row className="pt-2">
                                {transaction?.carts?.map((value, index) => (
                                    <div className="d-flex mb-2">
                                    <img
                                    src={"http://localhost:5000/uploads/" + value.product.image}
                                    style={{width:"25%", borderRadius:"8px"}}
                                    className=''
                                    alt=''
                                    />
                                    <ul className="text-start">
                                        <li style={{listStyle:"none", fontSize:"8px"}}><h4 className='text-danger fw-bold'>{value.title}</h4></li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}><p className='text-danger fw-normal'><span className='fw-bold'>Saturday,</span> 5 march 2020</p></li>
                                        <li style={{listStyle:"none", fontSize:"14px", marginBottom:"-10px"}}><p className='text-danger fw-bold'>Topping : {""}
                                        {value.topping.map((item, index) =>
                                            <span key={index}>{item.title}</span>
                                        )}
                                            </p>
                                        </li>
                                        <li style={{listStyle:"none", fontSize:"14px"}}> <p className="fw-normal" style={{color:"#613D2B"}}>Price : {rupiahFormat.convert(value.subtotal)}<span></span></p></li>
                                    </ul>
                                </div>
                                ))}
                            </Row>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='mb-3'>
                                <img
                                src={logo}
                                style={{width:"30%"}}
                                className=''
                                alt=''
                                />
                            </div>
                            <div>
                                <img
                                src={barcode}
                                style={{width:"40%"}}
                                className='mb-3'
                                alt=''
                                />
                            </div>
                            <div className='d-flex justify-content-center mb-3' style={{backgroundColor:'rgb(255,175,25, 0.5)', borderRadius:"8px"}}>
                                <p className='text-align-center fw-semibold' style={{color:"#FF9900"}}>Waiting Approve</p>
                            </div>
                            <div className=''>
                                <p className='fw-bold' style={{color:"#974A4A"}}>Sub total : Rp. <span style={{color:"#974A4A"}}>27.000</span></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal.Body>
        </Modal>
  )
}
