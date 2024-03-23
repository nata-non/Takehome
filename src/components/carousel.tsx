import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBed,
  FaBath,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const images = [
  "/assets/images/section3/poolvilla1.jpg",
  "/assets/images/section3/poolvilla2.jpg",
];
type PropertyDetailsType = {
  for: string;
  name: string;
  address: string;
  bed: number;
  toilet: number;
  parking: number;
  sqm: number;
  info: string;
  butType: string;
} | null;
const data: PropertyDetailsType[] = [
  {
    for: "FOR SELL",
    name: "Luxury Rental Villa",
    address: "1510 Castle Hill Ave Bronx, NY 10462",
    bed: 5,
    toilet: 3,
    parking: 1,
    sqm: 140,
    info: "Sagittis faucibus feugiat integer quam vel ornare. Tellus, vel consequat, sagittis ut penatibus urna, ante. Mattis fermentum lectus sed nisl ac viverra lacus. A at iaculis etiam nunc, diam urna in.",
    butType: "Sale for $160,000",
  },
  {
    for: "FOR RENT",
    name: "Duplex with Garage",
    address: "28 Jackson Ave Long Island City, NY 67234",
    bed: 4,
    toilet: 2,
    parking: 2,
    sqm: 126,
    info: "Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim ut quis ac. Amet, cras orci justo, tortor nisl aliquet.",
    butType: "Rent form $2,850",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [propertyDetails, setPropertyDetails] = useState<any>([]);

  const goToPrevious = () => {
    setPropertyDetails([]);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setPropertyDetails([]);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setPropertyDetails(data[currentIndex]);
    }, 800);

    const index = setTimeout(() => {
      goToNext();
    }, 8000);
    return () => {
      clearTimeout(timer), clearTimeout(index);
    };
  }, [currentIndex]);

  return (
    <div className="mx-auto w-full max-w-[1300px]">
      <div className="flex justify-between">
        <h1 className="text-center text-2xl font-semibold my-8">
          Newly listed properties
        </h1>
        <a className="text-center text-base flex items-center justify-center gap-2 cursor-pointer transition-all hover:text-[#fd5631] my-8">
          View all <MdArrowForward />
        </a>
      </div>

      <div className="flex gap-4 items-start" key={currentIndex}>
        <div className="relative">
          <div className="py-6">
            <Image
              src={images[currentIndex]}
              width={808}
              height={480}
              alt="Property Image"
              className="rounded-lg shadow-lg animate-fadein"
            />
          </div>
          <div className="absolute top-5 left-0 m-4 space-x-2">
            <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-md uppercase animate-fadein">
              New
            </span>
            <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-md uppercase animate-fadein">
              Verified
            </span>
          </div>

          <div className="flex gap-2">
            <div
              className="flex items-center justify-center p-2 rounded-full shadow-lg cursor-pointer transition-all hover:text-[#fd5631]"
              onClick={goToPrevious}
            >
              <FaChevronLeft />
            </div>
            <div
              className="flex items-center justify-center p-2 rounded-full shadow-lg cursor-pointer transition-all hover:text-[#fd5631]"
              onClick={goToNext}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        {propertyDetails && (
          <div className="flex flex-col p-4 max-w-[420px]">
            <p
              className="text-base text-[#fd5631] mb-2 transition-all animate-fadeindrop"
              style={{ animationDelay: "800ms" }}
            >
              {propertyDetails.for}
            </p>
            <div
              key={currentIndex}
              className="transition-all animate-fadeinleft"
              style={{ animationDelay: "800ms" }}
            >
              <h2 className="text-xl font-bold mb-2">{propertyDetails.name}</h2>
              <p className="text-sm text-gray-600 mb-6">
                {propertyDetails.address}
              </p>
              {propertyDetails.bed && (
                <div className="flex divide-x divide-gray-300 gap-4 text-center mb-6">
                  <div className="flex gap-2 items-center justify-center">
                    <FaBed />
                    <span>{propertyDetails.bed}</span>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <FaBath className="ml-4" />
                    <span>{propertyDetails.toilet}</span>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <FaCar className="ml-4" />
                    <span>{propertyDetails.parking}</span>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <span className="ml-4">{propertyDetails.sqm}</span>
                    <span>sq.m</span>
                  </div>
                </div>
              )}
              <p className="text-sm mb-4">{propertyDetails.info}</p>
            </div>
            <div
              className={`flex divide-x-[0.1px] max-w-[250px] ${
                propertyDetails.butType
                  ? "visible animate-scaleUp"
                  : "invisible"
              }`}
            >
              <button className="bg-[#fd5631] hover:shadow-lg hover:shadow-[#fd5631]/30 text-white font-semibold py-2 px-4 rounded-l-lg transition-shadow duration-300 ease-in-out">
                {propertyDetails.butType}
              </button>

              <button className="bg-[#fd5631] hover:shadow-lg hover:shadow-[#fd5631]/30 text-white p-2 rounded-r-lg hover:bg-[#fd390e] transition-shadow">
                <CiHeart size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
