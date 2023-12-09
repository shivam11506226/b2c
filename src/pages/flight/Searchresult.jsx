
import Footer from "../../layouts/Footer";
import Searchsection from './Searchsection';
import Popularfilter from "./Popularfilter";
import Download from "./Download";
import { useSelector } from "react-redux";
// import flightLoader from '../../utility/flight_loader.gif'
import { StickyHeader } from "../../layouts/Header";
import FlightLoader from "./FlightLoader/FlightLoader";
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import BigNavbar from "../../UI/BigNavbar/BigNavbar";

const Searchresult = () => {
    const reducerState = useSelector((state) => state);
    return (
        <>
            {
                reducerState?.oneWay?.isLoading === true ? (
                    <FlightLoader />
                )
                    : (
                        <div className="UniComp_BG">
                            <div className='mainimg'>
                                <Navbar />

                                <BigNavbar />

                                <Mainheader />
                            </div>
                            <Searchsection className='main_box' />
                            <Popularfilter />
                        </div>
                    )

            }

        </>
    )
}
export default Searchresult;
