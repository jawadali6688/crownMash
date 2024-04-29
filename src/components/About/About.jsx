import React from "react";

function About() {
  return (
    <main className="mx-auto my-6 flex flex-col justify-center items-center mx-atuo rounded-lg">
      <section className="">
        <div className="px-2 py-2 flex flex-col gap-2 ">
          <div className="flex flex-col justify-center items-center mx-auto gap-2 w-fit">
            <h1 className="text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto">
              About Us
            </h1>
          </div>
          <h3 className="text-gray-700 text-lg">
            At Crown Mash, we embody more than just a culinary destination;
            we're a sanctuary for food enthusiasts seeking an extraordinary
            experience. Nestled in the heart of Benfleet, Essex, Crown Mash has
            established itself as a beacon of excellence since its inception in
            September 2020. Our journey is steeped in a rich tapestry of flavors
            and traditions, meticulously woven into every dish we craft. With a
            commitment to quality ingredients and innovative recipes, we elevate
            fast food into an art form, tantalizing taste buds and creating
            lasting memories.
          </h3>

          <section className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="md:w-2/4 order-2 md:order-1">
            <h3 className="text-gray-700 text-lg">
            Beyond our delectable offerings, Crown Mash is a
            testament to hospitality, where each guest is welcomed as family.
            Our warm ambiance and friendly service set the stage for
            unforgettable moments shared with loved ones. Rooted in community
            and driven by passion, we invite you to embark on a culinary
            adventure like no other. Join us at Crown Mash and discover why
            we're more than just a restaurant; we're a destination for delicious
            experiences and cherished memories.
           
                </h3>
            </div>
            <div className="md:w-2/4">
          <img
            src="https://media.gettyimages.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?s=612x612&w=0&k=20&c=jwKJmGErrLe2XsTWNYEEyiNicudYVA4j8jvnTiJdp58="
            alt=""
            className="w-[99%] md:w-[90%] h-[300px] md:h-[350px] xl:h-[350px] mx-auto object-cover rounded-3xl"
          />
        </div>
          </section>
          <div>
           <h3 className="text-gray-700 text-lg">
           For inquiries, reservations, or simply to say hello, reach out to us at <br /> <span className="bg-yellow-200 rounded-lg text-yellow-700 px-2">0141 611 1866</span>. Meet the visionary behind Crown Mash, Mr. Adrian Venoin, who embodies a passion for culinary excellence and warm hospitality. For business collaborations or feedback, connect with us via email at <span className="bg-yellow-200 rounded-lg text-yellow-700 px-2">clearbusinessbyadrian@gmail.com</span>. Experience the convenience of online ordering by sending your orders to the same email address. At Crown Mash, we're always here to serve you with dedication and care.
           </h3>
            </div>
        </div>
      </section>
    </main>
  );
}

export default About;
