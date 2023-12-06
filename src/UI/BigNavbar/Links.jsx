import { mainheaderlogos } from '../../data'
// import "./BigNavbar.css"
import { motion } from "framer-motion";
import "./Links.css"
import { NavLink, Link } from 'react-router-dom';

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 20,
        opacity: 0,
    },
};

const Links = () => {

    return (
        <motion.div className="links" variants={variants}>

            <ul className="BigNavItems">
                {
                    mainheaderlogos.map(({ avatar, name, path }, index) => {
                        return (
                            <Link to={path} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }} className={({ isActive }) => isActive ? "active-nav logoname" : "logoname"}>
                                <motion.img variants={itemVariants} src={avatar} alt="mainheaderlogo" className='mainheaderlogo' style={{ width: "35px" }} />
                                <motion.span variants={itemVariants} style={{ marginTop: '7px', fontFamily: 'Montserrat', color: "#21325d", fontWeight: "600" }}>
                                    {name}
                                </motion.span>
                            </Link>
                        )
                    })
                }
            </ul>
        </motion.div>
    );
};

export default Links;