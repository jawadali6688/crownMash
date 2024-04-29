import React from 'react'
import {Button} from '../index'
function Hours() {
  return (
<main className='mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg'>
    <section className=''>
     <div className='px-2 py-2 flex flex-col gap-2 '>
        <div className='flex flex-col justify-center items-center mx-auto gap-2 w-fit'>
        <h1 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto'>Opening Hours</h1>
        </div>
        <h3 className='text-gray-700 text-lg'>Experience convenience with Crown Mash's extended opening hours, welcoming guests from 1:00 PM to 11:00 PM, seven days a week. Whether it's a midday snack or a late-night craving, our doors are always open to serve you.</h3>

       <section className='flex flex-col md:flex-row gap-4 justify-between'>
        <div>
        <img src="https://media.gettyimages.com/id/1003743930/photo/waitress-talking-on-the-phone-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=WA76RWnnu2wY39-ps-fDr6X8zkcTrCAMYyY2m1qv7P4=" alt="" className="w-[99%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xl" />
        </div>
       <div className='bg-pink-600 drop-shadow-xl w-[98%] md:w-2/4 flex flex-col gap-2 justify-start items-start mx-auto p-4 rounded-lg'>
        <div>
        <h3 className='text-white text-lg'>Discover the allure of Crown Mash, where every bite is a journey into culinary delight. Join us and experience the fusion of flavor and tradition in every dish.</h3>
        </div>
            <div className='flex gap-2'>
            <span className='md:text-lg font-bold text-white '>Opening Hours:</span>
            <span className='md:text-lg font-bold text-white underline underline-offset-4'>1:00 PM to 11:00 PM</span>
            </div>
            <div className='flex gap-2'>
            <span className='md:text-lg font-bold text-white'>Opening Days:</span>
            <span className='md:text-lg font-bold text-white underline underline-offset-4'>Every Day (7 Days per week) </span>
            </div>
            <div>
                <Button children={
                    <span className='flex gap-1 items-center justify-center '>
                    <span>
                    <i className='bx bx-phone-call text-2xl'></i>
                    </span>
                <span>
                0141 611 1866
                </span>
                </span>
                } className='bg-yellow-500 text-gray-600 hover:text-gray-700 hover:bg-yellow-600'/>
            </div>
            
        </div>
       </section>
     </div>

     <div className='px-2 py-2 flex flex-col gap-2 '>
        <div className='flex flex-col justify-center items-center mx-auto gap-2 w-fit'>
        <h1 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto'>Comfortable With Crown Mash</h1>
       
        </div>
        <h3 className='text-gray-700 text-lg'>Step into our inviting comfort area at Crown Mash, where plush seating and soothing ambiance await. Let the hustle and bustle fade away as you sink into relaxation, surrounded by warm hospitality. Take a moment to unwind and savor your favorite dishes in a space designed for your comfort. Whether you're dining alone or with friends, our comfort area provides the perfect setting for a memorable culinary experience. Embrace tranquility and indulge in every moment at Crown Mash.</h3>
     </div>
    </section>

    <section className='flex flex-col md:flex-row gap-4 justify-between'>
        <div>
        <img src="https://media.gettyimages.com/id/1313326784/photo/a-cook-finally-assembling-with-spatula-a-lovely-beef-burger-served-with-lettuce-mayo-chilli.jpg?s=612x612&w=0&k=20&c=-DfuET6Gx9dOakFG2F0IDjYSQNHGDfyLyUfNlxOr_t8=" alt="" className="w-[99%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xll" />
        </div>
        <div>
        <img src="https://media.gettyimages.com/id/1415605166/photo/businesswoman-working-at-laptop-with-fast-food-on-restaurant-table.jpg?s=612x612&w=0&k=20&c=_IUvIOiJLjyM6TfPPRCy9omI_YokhgHfFbDfVkN2LN8=" alt="" className="w-[99%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xl" />
        </div>
       
       </section>
</main>
  )
}

export default Hours
