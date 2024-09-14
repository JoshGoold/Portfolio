import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const [hasBeenNotified, setHasBeenNotified] = useState(false)

  const nav = useNavigate()

  // useEffect(()=>{
    

  //   const handleNotification = () =>{
  //       if(!hasBeenNotified){
  //          Notification.requestPermission().then(perm => {
  //           if (perm === "granted"){
  //               const notification = new Notification("Thank you for your time.", {
  //                   body: "Prefer Phone? call 289-251-3504"
  //               })
  //               setHasBeenNotified(true)

  //               notification.addEventListener("close", e =>{
  //                   alert("example")
                    
  //               })
  //           }
  //          })
  //       }
  //   }

  //   window.addEventListener("scroll", handleNotification)
  // },[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pt2tzak", "template_9gy36sg", form.current, {
        publicKey: "TQqtfymqt8SBYPLIp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-4 my-8">
      <h1 className="my-20 text-center text-4xl">Contact <span className='text-neutral-500'>Me</span></h1>
      <div >
        <form className="w-full h-full flex flex-wrap flex-col gap-4 justify-center items-center" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-2 mb-8">
                <label className="">Name</label>
                <input className="py-2 bg-neutral-800 px-1 rounded font-thin text-2xl" type="text" placeholder="name" name="user_name" />
            
            
                <label>Email</label>
                <input className="py-2 px-1 bg-neutral-800 rounded font-thin text-2xl" type="email" placeholder="email" name="user_email" />
           </div>
         
                <label>Message</label>
                <textarea className="py-2 bg-neutral-800 px-1 rounded font-thin text-2xl" cols={25} rows={5} placeholder="message" name="message" />
          
          <input className="hover:bg-neutral-800 hover:scale-110 bg-neutral-900 py-2 px-2 rounded font-thin text-2xl" type="submit" value="Send" />
        </form>
      </div>
      <div className="text-center">
      <button className="bg-blue-500  text-white rounded-md p-2 mt-5" onClick={()=> nav('/')}>Back</button></div>
    </div>
  );
};

export default Contact;
