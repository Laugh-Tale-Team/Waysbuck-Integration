import React, {useState} from 'react'
import {Col, Container, Form, Row, Button} from 'react-bootstrap';
import NavbarUser from '../components/navbar';
import paperclip from '../assets/paperclip.png';
import NavbarAdmin from '../components/navbarAdmin';
import ProductAdd from '../components/modal/productAdd';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
    const [viewLabel, setViewLabel] = useState(null);
    const [labelName, setLabelName] = useState("");
    const [addProduct, setAddProduct] = useState(false);
    const [product, setProduct] = useState({});
    const handleChange = (e) => {
      setProduct({
          ...product,[e.target.name]: e.target.value,
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

    const handleAp =() => setAddProduct(true);
    const handleCloseAp =() => setAddProduct(false);
    console.log(setAddProduct);


  return (
    <div>
      <NavbarAdmin />
      <Container className='mt-5 pt-5'>
        <Row>
        <Col xs={12} md={7}>
          <Form onSubmit={handleSubmit}>
            <div className='add-title text-danger mb-5'>
              <h1 className='fw-bold'>Product</h1>
            </div>
            <Form.Group>
              <Form.Control type='text' placeholder='Name product' onChange={handleChange} className='form-box mb-4'/>
                <Form.Control type='text' placeholder='Price' className='form-box mb-4' onChange={handleChange} />
                  <div className='input-group  mb-4' style={{borderRadius:"5px"}}>
                    <input type="file" className='form-control' id='inputgroupfile2' onChange={handleChange} hidden required/>
                  <label className='d-flex jc-between ai-center input-group-text form-box' htmlFor='inputgroupfile2' style={{width:"100%", borderRadius:"5px"}}> {labelName === ""? "Add Product": labelName} <img src={paperclip} alt="" className='' /></label>
                </div>
              </Form.Group>
              <Button className="btn btn-danger" style={{width:"70%"}} onClick={()=> handleAp()}>
                Add Product
              </Button>
              <ProductAdd addProduct={addProduct} Close={handleCloseAp}/>
            </Form>
          </Col>
          <Col xs={12} md={5} className="mt-5">
          {viewLabel && (
            <img
            src={viewLabel}
            className=''
            style={{height:"80%",borderRadius:"10px"}}
            alt='view'
            />
          )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default AddProduct;