// import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FunctionComponent } from "react";
import {
  FaBath,
  FaBed,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ArrowProps {
  onClick?: () => void;
}

const ArrowLeft: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-[9px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all hover:text-[#fd5631]"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const ArrowRight: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-[9px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all hover:text-[#fd5631]"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);
export default function Section4() {
  const data = [
    {
      imageUrl: "/assets/images/section4/offer1.jpg",
      for: "FOR RENT",
      title: "3 Bed Apartment | 67 sq.m",
      location: "Ladprao 71 Krunthep 10230",
      isNew: false,
      isVerified: true,
      isFeatured: false,
      price: "123,142",
      bed: 2,
      toilet: 2,
      parking: 2,
      sqm: 126,
    },
    {
      imageUrl: "/assets/images/section4/offer2.jpg",
      for: "FOR SELL",
      title: "Family Home | 120 sq.m",
      location: "Ladprao 71 Krunthep 10230",
      isNew: false,
      isVerified: true,
      isFeatured: true,
      price: "20,000",
      bed: 4,
      toilet: 2,
      parking: 2,
      sqm: 126,
    },
    {
      imageUrl: "/assets/images/section4/offer3.jpg",
      for: "FOR RENT",
      title: "Greenpoint Rentals | 85 sq.m",
      location: "140-60 Beech Ave Flushing, NY 11355",
      isNew: false,
      isVerified: true,
      isFeatured: false,
      price: "1,234",
      bed: 1,
      toilet: 1,
      parking: 1,
      sqm: 126,
    },
    {
      imageUrl: "/assets/images/section4/offer4.jpg",
      for: "FOR SELL",
      title: "Studio : 32 sq.m",
      location: "42 Broadway New York, NY 10004",
      isNew: false,
      isVerified: true,
      isFeatured: true,
      price: "150,000",
      bed: 2,
      toilet: 2,
      parking: 1,
      sqm: 126,
    },
    {
      imageUrl: "/assets/images/section4/offer5.jpg",
      for: "FOR SELL",
      title: "Cottage : 120 sq.m",
      location: "3811 Ditmars Blvd Astoria, NY 11105",
      isNew: true,
      isVerified: true,
      price: "70,000",
      bed: 4,
      toilet: 2,
      parking: 2,
      sqm: 126,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative mx-auto w-full max-w-[1300px] px-3 mb-12 overflow-visible">
      <div className="flex justify-between">
        <h1 className="text-center text-2xl font-semibold my-8">Top offers</h1>
        <a className="text-center text-base flex items-center justify-center gap-2 cursor-pointer transition-all hover:text-[#fd5631] my-8">
          View all <MdArrowForward />
        </a>
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="w-full"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        swipeable={true}
        draggable={true}
        customLeftArrow={<ArrowLeft />}
        customRightArrow={<ArrowRight />}
        dotListClass="custom-dot-list-style"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="mx-4 border rounded-lg my-12 overflow-hidden flex flex-col group shadow-lg cursor-pointer "
          >
            <div className="relative w-full h-56">
              <div className="absolute inset-0 bg-[#1f1b2d] opacity-0 group-hover:opacity-45 rounded-lg transition-opacity"></div>
              <img
                src={item.imageUrl}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className=" absolute flex flex-col gap-2 top-0 left-0 m-2 ">
                <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-md animate-fadein">
                  Verified
                </span>
                <span
                  className={`bg-blue-500 text-white text-xs font-medium ${
                    !item.isNew && "hidden"
                  } px-2 py-1 rounded-md animate-fadein`}
                >
                  New
                </span>
                <span
                  className={`bg-[#f23c49] text-white text-xs font-medium ${
                    !item.isFeatured && "hidden"
                  } px-2 py-1 rounded-md animate-fadein`}
                >
                  Featured
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-sm group-hover:text-[#fd5631]">{item.for}</p>
                <p className="font-semibold line-clamp-2 group-hover:text-[#fd5631]">
                  {item.title}
                </p>
                <p className="text-gray-600 line-clamp-1">{item.location}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-lg font-bold">
                  <FaMoneyBillWave className="text-gray-600" />
                  <p>{item.price}</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-center items-center gap-2 text-center mb-2">
                <div className="flex text-gray-600 gap-2 items-center justify-center">
                  <FaBed />
                  <span>{item.bed}</span>
                </div>
                <div className="flex text-gray-600 gap-2 items-center justify-center">
                  <FaBath className="ml-4" />
                  <span>{item.toilet}</span>
                </div>
                <div className="flex text-gray-600 gap-2 items-center justify-center">
                  <FaCar className="ml-4" />
                  <span>{item.parking}</span>
                </div>
                <div className="flex text-gray-600 items-center justify-center">
                  <span>sq.m</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
