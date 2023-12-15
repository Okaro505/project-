// Write all the code here
import React from "react";
import {motion} from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
 const options =  {
    initial: {
        x: "-100%",
        opacity :0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
    }
 };

import Footer from 
<components />

const About =()=> {
    return (
    <Section className="about">
    <main>
<h1> About Us </h1>
<article>
    <h4>Burger Shop</h4>
    <p> This is Burger Shop. The Place for the Most tasty burgers on the entire earth.

    </p>
    <p> Explore the various types of food and burgers. Click below to see the menu 
       
    </p>
   <link to = "/">
    <RiFindReplaceLine/>
   </link>
</article>

 <div>
    <h2>Founder </h2>
    <article>
    <div>
        <img src={me} alt= "Founder" />
        <h3>Nelson</h3>
    </div>

    <p>
        I am Nelson, the founder of Burger shop. Affiliated to God Taste..
    </p>
</article>
     </div>
</main>
    </Section>
    );
};

import React from "react";
import {IoFastFoodOutline } from "react-icons/io5"; 
import { Link } from "react-router-dom";
import {  FiShoppingCart, FiLogIn } from "react-icons/fi";  
import {  FaUser } from "react-icons/fa";
import {  motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

<nav>
<motion.div initial    ={{ x: "-100%" }} whileInView={{ x: 0 }}>
<IoFastFoodOutline />
</motion.div>

<div>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
   <Link to="/cart">
       <FiShoppingCart/>

   </Link>

   <DropdownMenu/>
</div>
</nav>


            
       

    




















