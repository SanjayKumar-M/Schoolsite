import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
export default function WorksPage() {
  return (
    <>
      <Helmet>
        <title>Saveetha School</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row justify-between items-center w-full p-[15px]">
            <Img src="https://freesvg.org/img/logo_school.png" alt="image" className="h-[60px] ml-[149px]" />
            <div className="flex flex-row justify-between items-start w-[30%] mr-[166px]">
              <Heading as="h6" className="text-center">
                <Link to="/" >
                  Home
                </Link>
              </Heading>
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="text-center">
                  <Link to="/about" >
                    About
                  </Link>
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  <Link to="/works" >
                    Events
                  </Link>
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                <Link to="/contact" >
                  Contact
                </Link>
              </Heading>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[88%] mt-[54px] mr-14 gap-[111px]">
            <div className="flex flex-row justify-center w-full p-1 mx-auto bg-green-A100 max-w-[1180px] rounded-[90px]">
              <div className="flex flex-col items-start justify-start w-[97%] mt-[55px] mx-[22px]">
                <div className="flex flex-row justify-between items-start w-4/5">
                  <Img
                    src="images/img_rectangle_57.svg"
                    alt="image_one"
                    className="h-[114px] w-[114px] rounded-[10px]"
                  />
                  <div className="h-3.5 w-3.5 mt-3 bg-deep_orange-A100 rounded-[50%]" />
                </div>
                <div className="flex flex-row justify-between items-start w-3/4 mt-[25px] ml-[109px]">
                  <div className="h-3.5 w-3.5 mt-[49px] bg-light_blue-400 rounded-[50%]" />
                  <div className="flex flex-col items-end justify-start w-[93%] gap-[75px]">
                    <Heading size="5xl" as="h1" className="mr-[232px] text-center">
                      <span className="text-black-900">What gonna </span>
                      <span className="text-red-400_01">Happen</span>
                      <span className="text-black-900"></span>
                    </Heading>
                    <Text as="p" className="text-center !leading-10">
                      Christmas or Pongal! For every special day something will be there in our school either program or event or even free gifts
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[98%] mt-1.5 ml-[26px]">
                  <Img src="images/img_group_776.svg" alt="image_two" className="h-[114px] w-[114px] mt-[31px]" />
                  <div className="flex flex-row justify-between items-start w-[22%]">
                    <Img
                      src="images/img_polygon_1.svg"
                      alt="polygonone_one"
                      className="h-[196px] w-[196px] mt-[7px] rounded-[15px]"
                    />
                    <div className="h-3.5 w-3.5 bg-deep_purple-800 rounded-[50%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-11">
              <div className="flex flex-row justify-between items-start w-full">
                <Heading size="4xl" as="h2">
                  Upcoming Events
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[105px]">
                {/* First Event */}
                <div className="flex flex-row justify-start w-full mx-auto max-w-[1180px]">
                  <div className="flex items-center justify-center w-[40%] relative mr-8">
                    <Img
                      src="images/img_group_21.png"
                      alt="image_three"
                      className="h-[482px] w-auto max-w-full object-cover rounded-[30px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-[60%] p-10 bg-orange-A200 rounded-[30px]">
                    <Heading size="3xl" as="h3" className="text-white-A700 font-nunito font-extrabold mb-4">
                      Foodie.
                    </Heading>
                    <Text as="p" className="text-white-A700">
                      Launching website for Apps
                    </Text>
                  </div>
                </div>

                {/* Second Event */}
                <div className="flex flex-row justify-start w-full mx-auto max-w-[1180px]">
                  <div className="flex flex-col justify-center w-[60%] p-10 bg-indigo-800 rounded-[30px]">
                    <Heading size="3xl" as="h3" className="text-transparent bg-gradient bg-clip-text mb-4">
                      Floops
                    </Heading>
                    <Text as="p" className="text-white-A700">
                      Landing page for Website Service
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[40%] relative ml-8">
                    <Img
                      src="images/img_group_790.png"
                      alt="image_four"
                      className="h-[456px] w-auto max-w-full object-cover rounded-[30px]"
                    />
                  </div>
                </div>

                {/* Third Event */}
                <div className="flex flex-row justify-start w-full mx-auto max-w-[1180px]">
                  <div className="flex items-center justify-center w-[40%] relative mr-8">
                    <Img
                      src="images/img_web_1920_2_1.png"
                      alt="web19202one_one"
                      className="h-[456px] w-auto max-w-full object-cover rounded-[30px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-[60%] p-10 bg-red-A200 rounded-[30px]">
                    <Heading size="3xl" as="h3" className="text-white-A700 font-nunito font-extrabold mb-4">
                      Website for creative agency
                    </Heading>
                    <Text as="p" className="text-white-A700">
                      Description of the event goes here.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[110px] pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
