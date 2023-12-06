import React, { useState, useEffect } from 'react';
import { mainheaderlogos } from '../../data';
import './BigNavbar.css';
import { motion } from 'framer-motion';
import Links from './Links';
import newlogo from '../../images/newlogo.png';
import Countrypicker from '../../layouts/Countrypicker';
import { Link } from 'react-router-dom';

const variants = {
    open: {
        clipPath: 'circle(1524px at 50% 50px)',
        transition: {
            type: 'spring',
            stiffness: 20,
        },
    },
    closed: {
        clipPath: 'circle(0px at 50% 50px)',
        transition: {
            // delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const BigNavbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setOpen(scrollY > 200);
    }, [scrollY]);

    return (
        <div className={`bignavbar ${open ? 'visible' : 'hidden'}`}>
            <motion.div className="bg" style={{ display: open ? 'flex' : 'none' }} variants={variants} animate={open ? 'open' : 'closed'}>
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
        </div>

    );
};

export default BigNavbar;
