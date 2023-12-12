import React, { useState, useEffect } from 'react';
import { mainheaderlogos } from '../../data';
import './BigNavbar.css';
import { motion } from 'framer-motion';
import Links from './Links';
import newlogo from '../../images/newlogo.png';
import Countrypicker from '../../layouts/Countrypicker';
import { Link } from 'react-router-dom';

const variants = {
    initial: {
        clipPath: 'circle(1524px at 50% 50px)',
        transition: {
            type: 'spring',
            stiffness: 20,
        },
    },
    animate: {
        clipPath: 'circle(0px at 50% 50px)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const BigNavbar = () => {


    return (
        <motion.div className="bignavbar" variants={variants} initial="animate" whileInView="initial">
            <motion.div className="bg" style={{ display: 'flex' }} variants={variants} animate="initial">
                <Link to={"/"}>
                    <img src={newlogo} alt="Logo" />
                </Link>
                <div>
                    <Links />
                </div>
                <div className="seconddiv">
                    <Countrypicker />
                </div>
            </motion.div>
        </motion.div>

    );
};

export default BigNavbar;
