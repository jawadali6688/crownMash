import React from 'react'
import {Button} from '../index'
import { FiMapPin, FiClock, FiPhone, FiUser, FiMail } from 'react-icons/fi';
function Contact() {
  return (
    <main className="mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg">
              <section className="">
        <div className="px-2 py-2 flex flex-col gap-2 ">
          <div className="flex flex-col justify-center items-center mx-auto gap-2 w-fit">
            <h1 className="text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto">
              Contact Us
            </h1>
          </div>
          <h3 className="text-gray-700 text-lg">
          Get in touch with Crown Mash for any inquiries or reservations at our convenient contact number. Our friendly staff is here to assist you with any questions or requests you may have. Feel free to reach out via email for business collaborations or feedback. At Crown Mash, we value your feedback and are committed to providing exceptional service.
          </h3>
          </div>
          </section>
          <section className='w-full lg:w-[80%] py-4'>
       <div className=" bg-pink-600  rounded-lg overflow-hidden shadow-md mx-auto mt-8">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white border-b-2 w-fit mb-4">Crown Mash</h2>
        <div className="flex items-center mb-3">
          <FiMapPin className="text-white mr-2" />
          <p className="text-sm text-white">263 High Road, Benfleet, Essex, SS7 5HA</p>
        </div>
        <div className="flex items-center mb-3">
          <FiClock className="text-white mr-2" />
          <p className="text-sm text-white">1:00 PM to 11:00 PM (7 days a week)</p>
        </div>
        <div className="flex items-center mb-3">
          <FiPhone className="text-white mr-2" />
          <p className="text-sm text-white">0141 611 1866</p>
        </div>
        <div className="flex items-center mb-3">
          <FiUser className="text-white mr-2" />
          <p className="text-sm text-white">Mr. Adrian Venoin</p>
        </div>
        <div className="flex items-center mb-3">
          <FiMail className="text-white mr-2" />
          <p className="text-sm text-white">clearbusinessbyadrian@gmail.com</p>
        </div>
      </div>
    </div>
       </section>
 <section className='flex flex-col md:flex-row gap-4 justify-between'>
        <div>
        <img src="https://media.gettyimages.com/id/1297050085/photo/young-businessman-using-a-digital-tablet-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=RUWsrJui6vjKFohcOn71smnQ14TI4ehtmpaQoBDkYjU=" alt="" className="w-[99%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xl" />
        </div>
       <div className='bg-pink-600 drop-shadow-xl w-[98%] md:w-2/4 flex flex-col gap-2 justify-start items-center mx-auto p-4 rounded-lg'>
        <div>
            <h3 className='text-white  font-bold text-2xl border-b-2 border-b-whtie text-center flex  justify-center items-center w-fit mx-auto'>Get In Touch With Us</h3>
        </div>
        <form >
        <div className='flex flex-col gap-4'>
           <input type="text" className='w-[250px] md:w-[320px] outline-none px-4 py-1 rounded-md focus:ring-2 focus:ring-gray-500' placeholder='Name' required />
           <input type="text" className='w-[250px] md:w-[320px] outline-none px-4 py-1 rounded-md focus:ring-2 focus:ring-gray-500' placeholder='Subject' required />
           <textarea type="text" rows="5" className='w-[250px] md:w-[320px] outline-none px-4 py-1 rounded-md focus:ring-2 focus:ring-gray-500' placeholder='Message' required> </textarea>
           <Button className='bg-yellow-500 hover:bg-yellow-600 text-white'>
            Submit
           </Button>
        </div>
        </form>
            
        </div>
       </section>

</main>
  )
}

export default Contact
