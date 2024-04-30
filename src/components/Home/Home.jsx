import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, Hours, About, Contact} from '../index'
function Home() {
  const [moreIntro, setMoreIntro] = useState(false)

  const toggleIntro = () => {
    setMoreIntro(!moreIntro)
  }
  const foodImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      url: "https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      url: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      url: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      url: "https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
<>
{/* First Introduction of Resturant */}
<main className='mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
    <section className=''>
     <div className='py-2 flex flex-col gap-2 justify-center items-center '>
        <h1 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 '>Crown Mash</h1>
        <h3 className='text-gray-700 text-lg px-2'>Crown Mash is more than just a fast food restaurant—it's a culinary journey where every bite tells a story of flavor and tradition. With our commitment to quality ingredients and innovative recipes, we craft dishes that tantalize the taste buds and leave a lasting impression. 
        {moreIntro? (" From our sizzling burgers to our crispy fries, each menu item is a masterpiece of indulgence, prepared with care and served with pride. Step into Crown Mash and experience the epitome of fast food excellence, where every visit is a celebration of taste and satisfaction. Welcome to the Tasty House—welcome to Crown Mash. At Crown Mash, we're not just serving meals; we're creating moments of joy and satisfaction. Our dedication to exceptional service ensures that every guest feels welcomed and appreciated. Whether you're grabbing a quick bite or indulging in a leisurely meal, our inviting atmosphere and friendly staff make every visit memorable. Join us at Crown Mash and discover why we're more than just a restaurant—we're a destination for delicious experiences."): ""}
        <br /> 
     
       <span onClick = {toggleIntro}>
       <Button className= 'bg-pink-500 hover:bg-yellow-500 hover:text-gray-700 text-white hover:drop-shadow-md hover:drop-shadow-pink-300 duration-300 my-2 '  children={moreIntro? (
       <>
       <h1>See less</h1>
       <i className='bx bx-chevron-down text-2xl rotate-180'></i>
       </>
      ) : (
        <>
       <h1>See more</h1>
       <i className='bx bx-chevron-down text-2xl '></i>
       </>
      )}  />
       </span>
         </h3>

     </div>

   
    </section>
</main>
      {/* sliding image */}
      <div className="w-[95%] mb-8 md:w-[80%] mx-auto  text-red-500">
<Slider {...settings}>
        {foodImages.map((item, index) => {
          return (
            <>
              <div key={index} className="px-4">
                <div>
                  <img src={item.url} alt="" className="w-[95%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xl" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
</div>


{/* Box for some picture and description's of Resturant  */}
<main className='md:px-4 mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
    <section className=''>
     <div className='px-2 py-2 flex flex-col gap-2 '>
        <div className='flex flex-col justify-center items-center mx-auto gap-2 w-fit'>
        <h1 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto'>Reviews</h1>
        <span className='text-yellow-500'>
        <i className='bx bx-star text-4xl' ></i>
        <i className='bx bx-star text-4xl' ></i>
        <i className='bx bx-star text-4xl' ></i>
        <i className='bx bx-star text-4xl' ></i>
        <i className='bx bx-star text-4xl' ></i>
        </span>
        </div>
        <h3 className='text-gray-700 text-lg'>Discover what our patrons have to say about their dining experiences at Crown Mash. Our reviews reflect the satisfaction and delight of our customers, who praise our flavorful dishes and friendly service. From mouth-watering burgers to crispy fries, each review highlights the excellence we strive for in every meal. Join the chorus of satisfied diners and experience the taste sensation that is Crown Mash.</h3>

       <span className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 py-2 w-fit'>Trading</span>
       <h3 className='text-gray-700 text-lg'>Since its inception in 2020, Crown Mash has been a beacon of culinary excellence, delighting patrons with its flavorful creations and dedication to quality. Despite its relatively young age, our restaurant has quickly established itself as a beloved destination for food enthusiasts, offering a diverse menu that satisfies every craving. With each passing year, we continue to grow and evolve, staying true to our commitment to providing exceptional dining experiences. Join us on our journey as we celebrate our enduring passion for great food and hospitality.</h3>
     </div>

     <div className='px-2 py-2 flex flex-col gap-2 '>
        <div className='flex flex-col justify-center items-center mx-auto gap-2 w-fit'>
        <h1 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto'>Order Now!</h1>
       
        </div>
        <h3 className='text-gray-700 text-lg'>Order Freely at Crown Mash and indulge in the convenience of personalized dining experiences. With our streamlined ordering process, you're empowered to explore our enticing menu and select your favorites with ease. Whether you're craving our sizzling burgers, crispy fries, or delectable desserts, our online ordering system ensures that your preferences are met with precision. Enjoy the freedom to customize your meal exactly to your liking, and let us handle the rest. With Crown Mash, ordering has never been easier or more satisfying.</h3>
        <Button className= 'bg-pink-500 hover:bg-yellow-500 hover:text-gray-700 text-white hover:drop-shadow-md hover:drop-shadow-pink-300 duration-300 my-2 w-fit' children={
          <>
          <h1>Order Now</h1>
          <i className='bx bxs-package text-2xl'></i>
          </>
        } />
     </div>
    </section>
</main>
{/* Opening Hours */}
<main className='mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
<Hours/>
</main>
{/* About */}
<main className='mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
<About/>
</main>
{/* Contact */}
<main className='mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
<Contact/>
</main>
</>
  )
}

export default Home
