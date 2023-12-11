import React from 'react';
import Footer from '../../../layouts/Footer';
import './holidaypackagesearchresult.css';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import Blankdiv from '../../home/searchresult/Blankdiv';
import HolidayPackagesDetail from './HolidayPackagesDetail';
import OfferSwipeToSlide from '../../../components/Offerscard';
import Navbar from "../../../layouts/Navbar";
import Mainheader from "../../../UI/Mainheader";
import BigNavbar from "../../../UI/BigNavbar/BigNavbar";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Divider from "@mui/material/Divider";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HolidayPackageSearchResult = () => {
    return (
        <>
            {/* <Searchnavbar /> */}
            <div className='mainimg'>
                <Navbar />

                <BigNavbar />

                <Mainheader />
            </div>
            <section className="mx-5">
                <div className="contaier-xxl">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="flightFilterBox">
                                <div className="filterTitle">
                                    <p>Select Filters</p>
                                </div>
                                <div className="innerFilter">
                                    <p>Suggested for you</p>
                                    <form action="">
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Non Stop
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Prenoon Departure
                                        </div>

                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            indiGo
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Vistara
                                        </div>
                                    </form>
                                    <Divider sx={{ backgroundColor: "gray" }} />
                                    <p>
                                        Departure from New Delhi
                                    </p>

                                    <form action="">
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Before 6AM
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            6 AM-12 PM
                                        </div>

                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            12 PM-6 PM
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            After 6 PM
                                        </div>
                                    </form>
                                    <Divider sx={{ backgroundColor: "gray" }} />
                                    <p>
                                        Airlines
                                    </p>
                                    <form action="">
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Air India (9)
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Air India Express (1)
                                        </div>

                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            Air Asia (7)
                                        </div>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                            />
                                            AKasa Air (3)
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">

                            <HolidayPackagesDetail />
                        </div>
                    </div>
                </div>

            </section>




        </>
    )
}

export default HolidayPackageSearchResult
