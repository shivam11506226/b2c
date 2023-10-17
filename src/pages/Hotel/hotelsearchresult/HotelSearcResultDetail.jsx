import React from 'react';
import { Button, Typography } from '@mui/material';

const HotelSearcResultDetail = () => {
    return (
        <div className='container bg-light h_detail pt-3'>
            <div className='row'>
                <div className='col-12'>
                    <form action="">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <div className="form_input">
                                    <label for="from" className="form_lable">City, Property Name Or Location</label>
                                    <select name="" id="" style={{ width: "100%", borderRadius: "20px", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                        <option>New Delhi</option>
                                        <option>hello1</option>
                                        <option>hello2</option>
                                        <option>hello3</option>
                                        <option>hello4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 mb-3">
                                <div className="form_input">
                                    <label className="form_lable">CHECK-IN</label>
                                    <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="3 Dec, 2022 Monday" >
                                    </input>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-2 mb-3">
                                <div className="form_input">
                                    <label className="form_lable">CHECK-OUT</label>
                                    <input type="date" name="departure" id="departure" className="deaprture_input" />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <div className="form_input">
                                    <label className="form_lable">Room & Guest</label>
                                    <input type="text" name="room_guest" id="departure" placeholder='1 Room 2 Adults'/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 mb-3 d-flex" style={{alignItems:'center',textAlign:'right'}}>
                               <Button variant="contained" type='submit'>Update Search</Button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HotelSearcResultDetail
