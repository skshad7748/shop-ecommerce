import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import { FaRegStar } from "react-icons/fa";

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Women Ethnic",
        rating: 4.5,
        color: "white",
        aosDelay: "0"
    },
    {
        id:2,
        img: Img2,
        title: "T-Shirt",
        rating: 4.9,
        color: "red",
        aosDelay: "0"
    },
    {
        id:3,
        img: Img3,
        title: "Women Western",
        rating: 4.2,
        color: "yellow",
        aosDelay: "0"
    },
    {
        id:4,
        img: Img4,
        title: "Women ",
        rating: 5.00,
        color: "purple",
        aosDelay: "0"
    }
]

function Products() {
  return (
    <div className="mt-14 mb-12">
        <div className="container ">
            {/* Header Section  */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p className="text-sm text-primary">Top Selling Product for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-500">Lorem ipsum dolor sit. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit.
                    Iusto, laborum.
                </p>
            </div>
            {/* body section  */}
            <div className=''>
                <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 place-items-center'>
                    {/* card section  */}
                    {
                        ProductsData.map((data)=>(
                                <div 
                                data-aos="fade-up"
                                data-aos-delay = {data.aosDelay}
                                key={data.id} className='space-y-4'>
                                    <img
                                    src={data.img}
                                    alt='product'
                                    className='h-[220px] w-[150px] rounded-md object-cover'/>
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                        <FaRegStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>


                        ))
                    }
                </div>
                {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Products