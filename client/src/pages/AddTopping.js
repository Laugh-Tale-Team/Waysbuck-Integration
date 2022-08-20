import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import '../assets/styles.css';
import paperclip from '../assets/paperclip.png'
import NavbarAdmin from '../components/navbarAdmin';
import ToppingAdd from '../components/modal/toppingAdd';
import { useNavigate } from 'react-router-dom';

export default function AddTopping() {
    const [viewLabel, setViewLabel] = useState(null);
    const [labelName, setLabelName] = useState("");
    const [addTopping, setAddTopping] = useState(false);
    const [topping, setTopping] = useState({});
    const handleChange = (e) => {
        setTopping({
            ...topping,[e.target.name]: e.target.value,
        });

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setViewLabel(url);
            setLabelName(e.target.files[0].name);
        }
    }

    let navigate =useNavigate();

    const handleSubmit = (e) => {
        e.prevent.default();
        navigate("/admin")
    }

    const handleAdd =() => setAddTopping(true);
    const handleCloseAdd =() => setAddTopping(false);
    console.log(setAddTopping);

  return (
    <div>
        <Container className='mt-5 pt-5'>
            <NavbarAdmin />
            <Row>
                <Col xs={12} md={7}>
                <Form onSubmit={handleSubmit}>
                    <div className='add-title text-danger mb-5'>
                        <h1 className='fw-bold'>Toping</h1>
                    </div>
                    <Form.Group>
                    <Form.Control type='text' placeholder='Name product' className='form-box mb-4' onChange={handleChange} />
                    <Form.Control type='text' placeholder='Price'className='form-box mb-4' onChange={handleChange} />
                    <div className='input-group  mb-4' style={{borderRadius:"5px"}}>
                        <input type="file" className='form-control' id='addToppingImage' name='addToppingImage' onChange={handleChange} hidden required/>
                        <label className='d-flex jc-between ai-center input-group-text form-box' htmlFor='addToppingImage' style={{width:"100%", borderRadius:"5px"}}> {labelName === ""? "Add Topping": labelName} <img src={paperclip} alt="" className='' /></label>
                    </div>
                    </Form.Group>
                    <Button className="btn btn-auth-red" style={{width:"70%"}} onClick={()=> handleAdd()}>
                    Add Topping
                    </Button>
                    <ToppingAdd addTopping={addTopping} Close={handleCloseAdd}/>
                </Form>
                </Col>
                <Col xs={12} md={5}>
                    {viewLabel && (
                        <img
                        src={viewLabel}
                        alt='view'
                        style={{width:"70%", borderRadius:"7px"}}
                        className=''
                        />
                        )}
                </Col>
            </Row>
        </Container>
    </div>
  )
}
