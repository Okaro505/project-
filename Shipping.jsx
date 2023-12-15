import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import {Link} from "react-router-dom"  ;

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            </div>
            <select>
              <option value="">Country</option>         
            </select>
          <div>
          </div>
          <div>
          <select>
            <label>State</label>
            <select>
            </select>
            <option value= "" >State 
            </option>
            <select>
              {State && State.getStateOfCountry ("CA").map(i)}=>( 
                <option value ={i.isoCode}  key= {i.isoCode}>

                {i.name}

              </option>

              ))
              </select>
              <div>
               <label> Pin Code</label> 
               <input type= " number"
               place
              
            <input type="number" placeholder="Enter Pin Code" />
          </div>
          <div>
           <label>Phone No.</label>
           <input type= "number" placeholder="Enter Phone No"/>
            </div>          
          
          <Popup trigger=
          <Link className= "link" to="/my orders">
               Confirm Order
          </Link>
          
          >
      <div>

      <Popup>
          
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
      </div>
      </main>
    </section>
  );
};

export default Shipping;
