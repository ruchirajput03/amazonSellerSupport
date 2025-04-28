import Image from "next/image";
import Link from "next/link";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import PricingSection from '@/app/components/pricingSection';
export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[40px]">
                <div className="col-lg-12 text-center lg:pt-[80px] pt-[40px] mb-4">
                    <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-[#1B1B1B]">Noon Consulting Services</p>
                    <p className="lg:text-[1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Expand Your Business on Noon with Professional Guidance</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[40px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/noon1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-6">
                                <p className="lg:text-[1vw] text-[5vw] font-bold text-[#090909]">Start Selling on Noon</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className="text-[#5C5C5C]">Expanding your business on the Noon Marketplace opens up exciting opportunities to connect with millions of customers in the UAE and beyond. However, success on Noon demands a strategic approach and expert guidance. Our Noon consultancy services are tailored to streamline your journey, boost sales, and ensure your business flourishes in the competitive e-commerce environment.</p></div>
                            <div className="mt-10 col-lg-3">
                        <Link href="/contactus" className="!no-underline">
                          <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-5 py-2">
                            Contact Us
                          </p>
                        </Link>
                      </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            <section className="lg:px-[100px] px-[40px] bg-[#F2F2F2] lg:pt-[80px] pt-[50px] overflow-hidden  ">
                <div className="col-lg-12 text-center  mb-4">
                    <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-[#1B1B1B]">Our Services</p>
                    </div>
                    <div className="col-lg-12 lg:mt-[80px] mt-[40px]">
                 <div className="lg:flex mb-4 justify-center">
                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                        <div className="col-lg-9 ">
                            <div className="flex gap-2">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                               
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Account Setup and Compliance Management</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We handle the complete account registration process, ensuring it complies with Noon’s requirements. From documentation to tax registration, we make your onboarding experience seamless and hassle-free.</p>
                       
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-2 ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Advertising Campaign Optimization and Management</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We create and manage targeted PPC campaigns and promotional strategies designed for Noon’s audience. Using data-driven methods, we maximize your ad ROI and drive sales growth.</p>
                        
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-2">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Performance Tracking and Analytics</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We monitor your sales, customer reviews, and account performance to uncover growth opportunities and refine your business strategy. Regular reports keep you updated and in control.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Marketplace Knowledge: </span>  Extensive experience with the Noon Marktplace.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]"> Personalized Solutions:</span> Customized strategies to meet your business needs.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Comprehensive Support:  </span>We manage every aspect of your Noon seller account.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Analytics-Driven Approach:</span> Making informed decisions through data and insights.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Proven Success: </span>Assisting clients in achieving measurable growth on Noon.
                            </li>
                        </ul>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                        <div className="col-lg-9 ">
                            <div className="flex gap-2">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Product Listing Enhancement and Optimization</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2"> Our team crafts compelling, SEO-optimized product listings with targeted keywords, captivating descriptions, and high-quality images to help your products rank higher and drive better conversions.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-2 ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Inventory and Order Control Management</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Avoid losing sales due to stock shortages! We assist in efficiently managing your inventory, tracking stock levels, and streamlining order processing to ensure customer satisfaction.</p>
                      
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-2 ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Continuous Support and Business Growth Strategies</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Our team is always here to offer support, address challenges, and help you uncover new growth opportunities. We’re with you throughout your entire journey.</p>
                       
                        </div>
                        </div>
                        <div className=" lg:mt-[80px] mt-[40px]">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/noon2.png"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>
                 </div>
                
                </section>
<PricingSection/>
<Footer/>
        </>
    )
}