import React, { useState } from 'react'
import '../componets/otpinput.css'

export default function Otpinput() {

    const[otp, setOtp] = useState(new Array(6).fill(""))

    function handleChange(e, index){

        if(isNaN(e.target.value)) return false

        setOtp([...otp.map((data,indx)=>(indx === index? e.target.value:data))]);

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
    }

  return (
    <div className='input-container'>

        <h3>ingresa otp</h3>
        <div className="otp-area">
            {
                otp.map((data, i)=>{
                    return <input  type='text' 
                                    className='input-otp'
                                    placeholder='0'
                                    maxLength={1} 
                                    value={data}
                                    onChange={(e)=>handleChange(e, i)}
                    />;
                })
            }
        </div>
      
    </div>
  );
}
