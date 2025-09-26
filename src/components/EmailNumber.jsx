import { useState } from "react";

export default function EmailNumber() {

  const [inputType, setInputType] = useState("email")

  const handleValidation = (e) => {

    const value = e.target.value.trim();

    // Regex to check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex to check number
    const numberRegex = /^01[3-9][0-9]{8}$/;

    // Check, if input is a number
    const isNumber = !isNaN(value) && value.trim() !== "" ;

    
    if(value === ""){
      e.target.setCustomValidity("ইমেইল অথবা ফোন-নম্বর লিখুন")
    }

    else if (isNumber){
      setInputType("number")
      if(!numberRegex.test(value)){
        e.target.setCustomValidity("সঠিক বাংলাদেশি ফোন-নম্বর লিখুন (১১ সংখ্যার, 01 দিয়ে শুরু)")
      }
      else{
        e.target.setCustomValidity("")
      }
    }
    
    else{
      setInputType("email")
      if(!emailRegex.test(value)){
        e.target.setCustomValidity("সঠিক ইমেইল লিখুন (abc@example.com)")
      }else{
        e.target.setCustomValidity("")
      }
    }
    
  }




  return (
    <label htmlFor="emailNumber">
      ফোন-নম্বর* আথবা ইমেইল*
      <input
        type="text"
        id="emailNumber"
        name={inputType}
        placeholder="ফোন-নম্বর আথবা ইমেইল"
        required
        maxLength={(inputType === "number") && 11}
        onInvalid={handleValidation}
        onInput={handleValidation}
        className="border p-2 rounded"
      />
    </label>
  );
}
