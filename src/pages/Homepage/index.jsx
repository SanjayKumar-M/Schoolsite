import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Saveetha School</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[70px] bg-white-A700 ">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <header className="flex flex-row justify-between items-center w-full p-[15px]">
            <Img src="images/img_group_642.svg" alt="image" className="h-[50px] ml-[149px]" />
            <div className="flex flex-row justify-between items-start w-[30%] mr-[166px]">
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  <Link to="/home" >
                    Home
                  </Link>
                </Heading>
                <div className="h-1.5 w-1.5 bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="text-center">
                <Link to="/about" >
                  About
                </Link>
              </Heading>
              <Heading as="h6" className="text-center">
                <Link to="/works" >
                  Events
                </Link>
              </Heading>
              <Heading as="h6" className="text-center">
                <Link to="/contact" >
                  Contact
                </Link>
              </Heading>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[95px] max-w-[1181px]">
              <div className="h-[646px] w-full relative">
                <div className="flex flex-col items-start justify-center w-full h-full pl-[71px] pr-14 gap-[39px] left-0 bottom-0 right-0 top-0 py-[71px] m-auto bg-cyan-50 absolute rounded-[35px]">
                  <Text as="p" className="w-[42%] mt-[245px] ml-[3px] !text-black-900_60 !leading-[35px]">
                    Get quality education from quality institute
                  </Text>
                  <div className="flex flex-row justify-start mb-[83px] gap-6">
                    <Button size="md" className="font-bold min-w-[201px] rounded-[5px]">
                      <Link to="/contact" >
                        Contact Us
                      </Link>
                    </Button>
                    <Button size="md" variant="outline" className="font-bold min-w-[201px] rounded-[5px]">
                      <Link to="/about" >
                        About us
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-start w-[94%] h-full right-0 bottom-0 top-0 m-auto absolute">
                  <Heading size="6xl" as="h1" className="w-[55%] mt-[45px] z-[1]">
                    <span className="text-black-900">Empowering Minds, </span>
                    <span className="text-red-400_01"> Building Tomorrow</span>
                  </Heading>
                  <Img src="images/img_group_665.png" alt="image_one" className="w-1/2 ml-[-44px] object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[33px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h2">
                    Meet our team
                  </Heading>
                  <a href="/" className="mt-[11px]">
                    <Heading size="lg" as="h3" className="!text-red-400_01 text-right">
                      View All
                    </Heading>
                  </a>
                </div>
                <div className="flex flex-row w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[32%] mb-1 gap-[39px]">
                    <Img src="images/img_rectangle_16.png" alt="image" className="w-full object-cover rounded-[10px]" />
                    <div className="flex flex-col items-center justify-start w-[44%] gap-3">
                      <Heading size="xl" as="h4" className="!text-gray-800_01">
                        Sarah Jae
                      </Heading>
                      <Text as="p" className="!text-black-900_68">
                        Branding Specialist
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[32%] gap-[35px]">
                    <Img src="images/img_rectangle_15.png" alt="image" className="w-full object-cover rounded-[10px]" />
                    <div className="flex flex-col items-center justify-start w-[39%] gap-3 py-1">
                      <Heading size="xl" as="h5" className="!text-gray-800_01">
                        John Doe
                      </Heading>
                      <Text as="p" className="!text-black-900_68 text-center">
                        Product Designer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[32%] mb-[5px] gap-[39px]">
                    <Img src="images/img_rectangle_17.png" alt="image" className="w-full object-cover rounded-[10px]" />
                    <div className="flex flex-col items-center justify-start w-[33%] gap-3">
                      <Heading size="xl" as="h6" className="!text-gray-800_01 text-center">
                        Samantha
                      </Heading>
                      <Text as="p" className="!text-black-900_68 text-center">
                        SEO Specialist
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                <Heading size="4xl" as="h1">
                  What we do
                </Heading>
                <div className="flex flex-row justify-center w-full px-14 py-28 bg-red-50 rounded-[90px]">
                  <div className="flex flex-row w-[85%] mb-1.5 gap-[102px] mx-[27px]">
                    <div className="flex flex-col items-start justify-start w-[23%] gap-9 my-[35px] cursor-pointer hover:shadow-xs">
                      <Button color="red_300" className="w-[46px]">
                        <Img src="images/img_group_670.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          UIUX Design
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          We can make your website or application design better with this service
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[31%] gap-[34px] p-[25px] bg-white-A700 shadow-xs cursor-pointer rounded-[30px] hover:shadow-xs">
                      <Button color="cyan_400" className="w-[46px] mt-3">
                        <Img src="images/img_support_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start mb-2 gap-[15px]">
                        <Heading size="xl" as="h4">
                          Website Dev
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          Make your business more leverage by having an optimal website and we are ready to help
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[27%] gap-9 my-[35px] cursor-pointer hover:shadow-xs">
                      <Button color="lime_800" className="w-[46px]">
                        <Img src="images/img_idea_1.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <Heading size="xl" as="h4">
                          Branding & Product
                        </Heading>
                        <Text size="xs" as="p" className="!leading-[30px]">
                          we can also help you in the affairs of product branding so that your products can be more
                          riveting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  color="red_400_01"
                  size="lg"
                  shape="circle"
                  className="w-[68px] ml-[124px] z-[1] border-white-A700 border-[9px] border-solid"
                >
                  <Img src="images/img_group_682.svg" />
                </Button>
                <div className="h-[525px] w-full mt-[-34px] relative">
                  <Img
                    src="images/img_bg.png"
                    alt="bg_one"
                    className="justify-center h-[525px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-center justify-center w-max h-max gap-[61px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-between items-start w-full">
                      <Heading size="4xl" as="h1">
                        What our clients are saying
                      </Heading>

                    </div>
                    <div className="flex flex-row w-full gap-[30px]">
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          I am very satisfied with the work on the Nexus team. good service, satisfying work results and
                          can also increase my business turnover. Thank you so much to the Nexus team.
                        </Text>
                        <div className="flex flex-row justify-start w-3/5 mb-[11px] ml-1.5 gap-[25px]">
                          <Img
                            src="images/img_rectangle_52.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[61%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              John Richard
                            </Heading>
                            <Text size="xs" as="p">
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] gap-5 p-[30px] bg-white-A700 shadow-xl rounded-[10px]">
                        <Text size="s" as="p" className="w-[99%] ml-1.5">
                          since branding with the oracle team i feel my business has a very fast and good development,
                          everything also always goes through a process of discussion that is really valid
                        </Text>
                        <div className="flex flex-row justify-start w-[63%] mb-[11px] ml-1.5 gap-6">
                          <Img
                            src="images/img_rectangle_52_49x49.png"
                            alt="image"
                            className="w-[49px] object-cover rounded-[12px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[63%] gap-1">
                            <Heading size="lg" as="h5" className="!font-semibold">
                              Andrew Smith
                            </Heading>
                            <Text size="xs" as="p">
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pt-[47px] px-[47px] rounded-tr-[50px] bg-gray-800" />
      </div>
    </>
  );
}
