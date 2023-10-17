import Footer from "../../layouts/Footer";
import Searchsection from './Searchsection';
import Popularfilter from "./Popularfilter";
import Download from "./Download";
import { useSelector } from "react-redux";
import flightLoader from '../../utility/flight_loader.gif'
import { StickyHeader } from "../../layouts/Header";

const Searchresult = () => {
    const reducerState = useSelector((state) => state);
    return (
        <>
        {
          reducerState?.oneWay?.isLoading == true ? ( <div style={{height:'100vh',width:'100vw', backgroundColor:'#CCEAF7',display:'flex',alignItems:'center',justifyContent:'center'}}> <img src={flightLoader} alt="Loader Img" style={{ width:'60%' }} /></div> )
          : (
          
          <div className="UniComp_BG">

          <Searchsection className='main_box' />
          <Popularfilter />
          {/* <Demo></Demo> */}
          <Download />
        
      </div>)
        }
        
        </>
    )
}
export default Searchresult;
