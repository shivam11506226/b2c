

import Footer from "../../../layouts/Footer";
import Searchsection from '../searchresult/Searchsection';
import Popularfilter from "./Popularfilter";
// import Demo from './Demo';
import Blackdiv from '../searchresult/Blankdiv';
import Download from "../../../components/Download";
import Searchnavbar from "./Searchnavbar";
import { useSelector } from "react-redux";
import flightLoader from '../../../utility/flight_loader.gif'

const Searchresult = () => {
    const reducerState = useSelector((state) => state);
    return (
        <>
        {
          reducerState?.oneWay?.isLoading == true ? ( <div style={{height:'100vh',width:'100vw', backgroundColor:'#CCEAF7',display:'flex',alignItems:'center',justifyContent:'center'}}> <img src={flightLoader} alt="Loader Img" style={{ width:'60%' }} /></div> )
          : (<div className="Searchresult_panner">
          <Searchnavbar></Searchnavbar>
          <Blackdiv />
          <Searchsection className='main_box' />
          <Popularfilter />
          {/* <Demo></Demo> */}
          <Download />
          <Footer></Footer>

      </div>)
        }
        
        </>
    )
}
export default Searchresult;
