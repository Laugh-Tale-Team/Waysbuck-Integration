import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarUser from '../components/navbar'
import profile from '../assets/photo-profile.png'
import logo from "../assets/logo.svg";
import barcode from '../assets/barcode.png'
// import iceblend from '../assets/ice-blend.png'
import Rupiah from "rupiah-format";
import { UserContext } from '../context/userContext';
import NavbarLogin from '../components/navbarUser';
import imgBlank from '../assets/profile-blank.jpg';
import { useQuery } from 'react-query';
import { API } from '../config/api'


export default function Profile() {
    const [state, dispatch] = useContext(UserContext)
    const [addCart, setAddChart] = useState(0)

    let {data: ProfileTransaction} = useQuery(
        "transactionsCache",
        async () => {
        const response = await API.get("/user-transaction");
        return response.data.data;
        }
    );

    let { data: Profile, refetch } = useQuery("profileCache", async () => {
        const response = await API.get("/user-profile");
        return response.data.data.profile;
    });
  return (
    <div>
       <NavbarLogin show={addCart}/>
        <Container className='mt-5 pt-5'>
            <Row>
                <Col xs={12} md={6} className="ps-5 p-2">
                    <Row>
                        <Col xs={12} md={6}>
                        <h4 className='text-start text-danger fw-bold fs-4'>My Profile</h4>
                        <img
                        src={profile?.image ? profile?.image : imgBlank}
                        style={{width:"100%", borderRadius:"8px"}}
                        className=''
                        alt=''
                        />
                        </Col>
                        <Col xs={12} md={6} className="pt-5">
                            <div>
                                <h4 className='text-start fw-semibold fs-4' style={{color:"#613D2B"}}>Full Name</h4>
                                <h4 className='text-start fw-normal fs-4'>{state?.user?.name}</h4>
                            </div>
                            <div>
                                <h4 className='text-start fw-semibold fs-4' style={{color:"#613D2B"}}>Email</h4>
                                <h4 className='text-start fw-normal fs-4'>{state?.user?.email}</h4>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <h4 className='text-start fw-bold fs-4 mb-3' style={{color:"#613D2B"}}>My Transaction</h4>
                    </div>
                    {ProfileTransaction?.map((item, index) => (
                    <Row className="p-3" style={{backgroundColor:"#F6DADA", borderRadius:"5px"}}>
                        <Col xs={12} md={8}>
                            <Row className="pt-2">
                                {item?.carts?.map((cart, idx) => (
                                    <div className="d-flex mb-2" key={idx}>
                                        <img
                                        src={"http://localhost:5000/uploads/" + cart?.product?.image}
                                        style={{width:"25%", borderRadius:"8px"}}
                                        className=''
                                        alt=''
                                        />
                                        <ul className="text-start">
                                            <li style={{listStyle:"none", fontSize:"8px"}}><h4 className='text-danger fw-bold'> {cart?.product?.title}</h4></li>
                                            <li style={{listStyle:"none", fontSize:"14px"}}><p className='text-danger fw-normal'><span className='fw-bold'>Saturday,</span> 5 march 2020</p></li>
                                            <li style={{listStyle:"none", fontSize:"14px", marginBottom:"-10px"}}><p className='text-danger fw-semibold'> <span className="fw-bold" style={{color:"#613D2B"}}>Topping :{""}</span> {cart.topping.map((topping, idx) => (<span key={idx}>{topping?.title},</span> ))}</p> </li>
                                            <li style={{listStyle:"none", fontSize:"14px"}}> <p className="fw-normal" style={{color:"#613D2B"}}>Price : Rp. <span>{Rupiah.convert(cart?.product?.price)}</span></p></li>
                                        </ul>
                                    </div>
                                    ))}
                            </Row>
                            </Col>
                            <Col xs={12} md={4}>
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
                                    <p className='text-align-center fw-semibold' style={{color:"#FF9900"}}>{item.status}</p>
                                </div>
                                <div className=''>
                                    <p className='fw-bold' style={{color:"#974A4A"}}>Sub total : <span style={{color:"#974A4A"}}>{Rupiah.convert(item?.total)}</span></p>
                                </div>
                            </Col>
                    </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    </div>
  )
}
