import React, { useState } from 'react';

function MyComponent()
{
    const [name, setName] = useState('GUEST');
    const[qty, setQty] = useState();
    const[comment, setComment] = useState('');
    const[pmt, setPmt] = useState('');
    const[shipping, setShipping] = useState('');





    function handleNameChange(event)
    {
        setName(event.target.value);
    }
    function handleQtyChange(event)
    {
        setQty(event.target.value);
    }
    function handleComment(event)
    {
        setComment(event.target.value);
    }
    function handlePayment(event)
    {
        setPmt(event.target.value);
    }
    function handleShipping(event)
    {
        setShipping(event.target.value);
    }





    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name} </p>
            <br></br>

            <input value={qty} onChange={handleQtyChange} type='number'/>
            <p>qty: {qty} </p>
            <br></br>

            <textarea value={comment} onChange={handleComment} placeholder='comment here'/>
            <p>Comment: {comment} </p>
            <br></br>

            <select value={pmt} onChange={handlePayment}> 
                <option>
                    Paypal
                </option>
                <option>
                    Esewa
                </option>
            </select>
            <p>Payment method: {pmt} </p>
            <br></br>

        <label>
        <input type='radio' value="Pickup" 
        checked={shipping === "Pickup"}
        onChange={handleShipping}/>
            Pickup
            </label>
            <label>
        <input type='radio' value="Delivery" 
        checked={shipping === "Delivery"}
        onChange={handleShipping}/>
            COD
            </label>
            <p>Shipping: {shipping}</p>
           
           

        </div>
    );
}

export default MyComponent;