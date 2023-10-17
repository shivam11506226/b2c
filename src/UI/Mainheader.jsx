import { Link, NavLink } from 'react-router-dom';

// bootstarp css link
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { mainheaderlogos } from "../data";

const Mainheader = () => {
    return (
        <section className="mainheader_wrapper">
            <div className="container mainheader_container">
                <div className="row mainheader_row">
                    <ul className="mainhome_logos">
                        {
                            mainheaderlogos.map(({ avatar, name, path }, index) => {
                                return (
                                   
                                       
                                        <NavLink to={path} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textDecoration:'none'}}  className={({ isActive }) => isActive ? "active-nav logoname" : "logoname"}>
                                       
                                            <img src={avatar} alt="mainheaderlogo" className='mainheaderlogo' style={{ width: "35px" }} />
                                       
                                           <span style={{marginTop:'7px'}}>
                                            {name}
                                            </span> 
                                        </NavLink>
                                  
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Mainheader;