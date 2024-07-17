import Image1 from "../../assets/hero/sale.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/women.png"
import Slider from 'react-slick'


const ImageList = [
    {
        id:1,
        img: Image1,
        title: "Upto 50% off on all Men's wear",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti placeat quo cupiditate totam voluptatibus unde neque, consequatur accusantium eos praesentium impedit a mollitia assumenda atque amet optio minima quod!"
    },
    {
        id:2,
        img: Image2,
        title: "Upto 50% off on all Men's wear",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti placeat quo cupiditate totam voluptatibus unde neque, consequatur accusantium eos praesentium impedit a mollitia assumenda atque amet optio minima quod!"
    },
    {
        id:3,
        img: Image3,
        title: "Upto 50% off on all Men's wear",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti placeat quo cupiditate totam voluptatibus unde neque, consequatur accusantium eos praesentium impedit a mollitia assumenda atque amet optio minima quod!"
    },
]


// eslint-disable-next-line react/prop-types
function Hero({handleOrderPopup}) {


    var settings = {
        dots: false,
        arrows: false,
        infinite:true,
        slideToScroll: 1, 
        autoplay: true , 
        autoplaySpeed : 4000, 
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }

  return (
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 relative overflow-hidden flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40  rotate-45 rounded-3xl -z-9 -top-1/2 absolute right-0">

        </div>
        {/* hero section  */}

        <div className="container pb-8 sm:pb-0 ">
            <Slider {...settings}>
                {
                    ImageList.map((data)=> (
                        <div key={data.id}>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* text content section  */}
                            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title} </h1>
                                <p 
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-sm">{data.description} </p>
                                <div 
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="300"
                                >
                                    <button
                                    onClick={handleOrderPopup}
                                     className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                        Order Now
                                        </button>
                                </div>
                            </div>
                            {/* image section  */}
                            <div className="order-1 sm:order-2">
                                <div data-aos="zoom-in"
                                data-aos-once="true"
                                className="relative z-10">
                                    <img src={data.img} alt=""
                                    className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] 
                                    object-contain sm:scale-125 lg:scale-125 mx-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
           
            </Slider>
           
        </div>
    </div>
  )
}

export default Hero