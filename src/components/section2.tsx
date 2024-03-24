import { CiLocationOn } from "react-icons/ci";
import { FunctionComponent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
export default function Section2() {
  const newData = [
    {
      vertical: "/assets/images/section2/vertical1.png",
      horizontal: [
        {
          imgUrl: "/assets/images/section2/horizontal1.png",
          locationEng: "Asok",
          locationTh: "อโศก",
        },
        {
          imgUrl: "/assets/images/section2/horizontal2.png",
          locationEng: "Sukhumvit",
          locationTh: "สุขุมวิท",
        },
        {
          imgUrl: "/assets/images/section2/horizontal3.png",
          locationEng: "Sathon",
          locationTh: "สาทร",
        },
        {
          imgUrl: "/assets/images/section2/horizontal4.png",
          locationEng: "Thonglor",
          locationTh: "ทองหล่อ",
        },
      ],
    },
    {
      vertical: "/assets/images/section2/vertical1.png",
      horizontal: [
        {
          imgUrl: "/assets/images/section2/horizontal1.png",
          locationEng: "Asok",
          locationTh: "อโศก",
        },
        {
          imgUrl: "/assets/images/section2/horizontal2.png",
          locationEng: "Sukhumvit",
          locationTh: "สุขุมวิท",
        },
        {
          imgUrl: "/assets/images/section2/horizontal3.png",
          locationEng: "Sathon",
          locationTh: "สาทร",
        },
        {
          imgUrl: "/assets/images/section2/horizontal4.png",
          locationEng: "Thonglor",
          locationTh: "ทองหล่อ",
        },
      ],
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1299, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative mb-8 pb-6 px-3 lg:px-6 container-fluid w-full h-full overflow-hidden">
      <div className="flex justify-center">
        <h1 className="text-center text-2xl font-bold ">
          Top properties on Finder
        </h1>
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
        {newData.map((item, index) => (
          <div
            key={index}
            className="mx-4 my-12 overflow-hidden flex flex-col group cursor-pointer "
          >
            <div className="grid gap-4 md:grid-cols-2 w-full h-full items-center">
              <div className="relative">
                <img
                  src={item.vertical}
                  alt={`Slide ${index}`}
                  className="w-full object-cover md:h-[410px] rounded-lg"
                />
                <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/100 bg-opacity-10 text-white p-4">
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-xl font-semibold">Bangkok</p>
                    <div className="flex items-center gap-1">
                      <CiLocationOn />
                      <p>กรุงเทพ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
                {item.horizontal.map((item, idx) => (
                  <div key={idx} className="relative ">
                    <img
                      key={idx}
                      src={item.imgUrl}
                      alt={`Horizontal Slide ${index}-${idx}`}
                      className="w-full rounded-lg object-cover md:h-[196px]" // Adjust height as needed
                    />
                    <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/100 bg-opacity-10 text-white p-4">
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-xl font-semibold">
                          {item.locationEng}
                        </p>
                        <div className="flex items-center gap-1">
                          <CiLocationOn />
                          <p>{item.locationTh}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
