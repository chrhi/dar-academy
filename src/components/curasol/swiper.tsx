"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Title from "../typography/Title";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "../blog-card";

export default function SwiperCurousel() {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <div className="h-[100px] w-full mt-4 flex items-center justify-between">
        <Title text="What Our Students Are Saying" />
        <div className="w-[50%] gap-x-6 h-[100px] flex items-center justify-end">
          <Button
            size="icon"
            className="rounded-[50%] w-[50px] h-[50px] flex items-center justify-center text-white bg-black"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </Button>
          <Button
            size="icon"
            className="rounded-[50%] w-[50px] h-[50px] flex items-center justify-center text-white bg-black"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={30}
        className="mySwiper w-full h-fit mb-8"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
