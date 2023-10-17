import { Box } from '@mui/material';
import React from 'react';
import './busreasultform.css';

const BusReasultForm = () => {

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className='container'>
            <Box sx={{ backgroundColor: "white", borderRadius: "20px", }} p={3}>
                <form action="">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="form_input">
                                <label for="from" className="form_lable">
                                    Starting From
                                </label>
                                <select
                                    name=""
                                    id=""
                                    style={{
                                        width: "100%",
                                        borderRadius: "20PX",
                                        height: "5rem",
                                        border: "3px solid #70707069",
                                        paddingLeft: "25px",
                                    }}
                                >
                                    <option mx={5}>New Delhit </option>
                                    <option
                                        px={5}
                                        sx={{ fontSize: "9px", fontWeight: "bold" }}
                                    >
                                        hello1
                                    </option>
                                    <option px={5}>hello2</option>
                                    <option px={5}>hello3</option>
                                    <option mx={5}>hello4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="form_input">
                                <label for="from" className="form_lable">
                                    Going To
                                </label>
                                <select
                                    name=""
                                    id=""
                                    style={{
                                        width: "100%",
                                        borderRadius: "20PX",
                                        height: "5rem",
                                        border: "3px solid #70707069",
                                        paddingLeft: "25px",
                                    }}
                                >
                                    <option mx={5}>Goa</option>
                                    <option
                                        px={5}
                                        sx={{ fontSize: "9px", fontWeight: "bold" }}
                                    >
                                        hello1
                                    </option>
                                    <option px={5}>hello2</option>
                                    <option px={5}>hello3</option>
                                    <option mx={5}>hello4</option>
                                </select>
                            </div>
                        </div>



                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                            <div className="form_input">
                                <label className="form_lable">Departure Date</label>
                                <input
                                    type="date"
                                    name="departure"
                                    min={disablePastDate()}
                                    className="deaprture_input" />
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg-2 mb-3">
                            <div className="form_input">
                                <button style={{ fontSize: "18px", marginTop: "10px" }} path="" className="search">
                                    Update Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default BusReasultForm;
