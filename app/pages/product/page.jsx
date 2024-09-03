"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";  
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fake-coffee-api.vercel.app/api");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-screen h-screen  px-6">
      <div className="flex justify-center items-center pt-8">
        <h2 className="text-[40px] text-[#F7E1BC]">Our Products</h2>
      </div>
      <div className="p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-[#54372B] rounded-md shadow-md ">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={300} 
                    height={240} 
                  className="w-full h-60 object-cover rounded-t-md" 
                />
                <div className="p-4 text-white">
                  <h3 className="text-lg font-medium mb-4">{product.name}</h3>
                  
                  <span className="font-bold text-green-300 mb-4">${product.price}</span>
               
                  <button className="mt-4 rounded-full w-full bg-[#F7E1BC]  text-[#54372B] font-bold py-2 px-4 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductPage;
