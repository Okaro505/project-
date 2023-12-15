// Write all the code here
import Footer from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine} from "react-icons/ri";
import me from "../../assets/skj.jpg";


const About =()=> {
    return (
    <Section className="about">
    <main>
<h1> About Us </h1>
<article>
    <h4>Burger Shop</h4>
    <p> This is your go-to Burger Shop. Finger licking  Burgers and for you and your family.

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
export default About;