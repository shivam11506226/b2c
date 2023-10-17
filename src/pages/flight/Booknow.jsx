import Searchnavbar from "../../../searchresult/Searchnavbar";
import Download from "../../../../components/Download";
import Footer from "../../../../layouts/Footer";
import Bookwrapper from "./Bookwrapper";
import Blackdiv from '../../../searchresult/Blankdiv';


const Searchresult = () => {
    return (
        <div className="Searchresult_panner">
            <Searchnavbar></Searchnavbar>
            <Blackdiv />
           
            <Bookwrapper />
            {/* <Demo></Demo> */}
            <Download />
            <Footer></Footer>

        </div>
    )
}
export default Searchresult;
