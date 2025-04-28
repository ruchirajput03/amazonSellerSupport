import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import PricingSection from '@/app/components/pricingSection';
export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[40px]">
                <div className="col-lg-12 text-center lg:pt-[80px] pt-[40px] mb-4">
                    <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[5vw] font-bold text-[#1B1B1B]">eBay Consultancy Services</p>
                    <p className="lg:text-[1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Grow Your Business on eBay with Expert Support</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[40px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/ebay1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-6">
                                <p className="lg:text-[1vw] text-[5vw] font-bold text-[#090909]">Sell On Ebay</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className="text-[#5C5C5C]">Unlock the full potential of eBay in the UAE with expert local support. Whether you&apos;re a new seller or looking to scale, our eBay consultancy services are built to help you succeed in one of the region&apos;s fastest-growing online marketplaces. From account setup to sales optimization, we provide tailored solutions that drive real results—right here in the UAE.</p></div>
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
                    <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-[#1B1B1B]">What We Do</p>
                    </div>
                    <div className="col-lg-12 lg:mt-[80px] mt-[40px]">
                 <div className="lg:flex mb-4 justify-center">
                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                        <div className="col-lg-9 ">
                            <div className="flex gap-4 justify-center">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                               
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">eBay Store Setup & Compliance</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We take care of the entire eBay store setup process, making sure your account is fully compliant with eBay&apos;s seller policies. From registering your business to setting up payment and shipping preferences, we ensure a hassle-free start to your eBay journey.</p>
                       
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Product Listing & Optimization</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We create well-structured, keyword-rich listings that grab attention and drive sales. Our team handles everything from writing SEO-friendly titles and descriptions to uploading high-quality images and setting item specifics that improve discoverability.</p>
                        
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Market Research & Competitive Analysis</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Before you list, we dig deep into your product category, pricing trends, and competitors. This ensures you&apos;re entering the market with a strong pricing strategy and product positioning that helps you stand out from the crowd.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">eBay Advertising & Promotions</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Want more visibility? We create and manage Promoted Listings campaigns to get your products in front of more buyers. With optimized budgets and targeting, we help you get the most from every ad rupee.</p>
                        
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">UAE-Specific Expertise: </span>   We specialize in the local market, understanding logistics and buyer behavior in the UAE.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]"> End-to-End eBay Services: </span> From account setup to advertising, we manage every aspect of your eBay business.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Data-Driven Growth:</span> We use research and analytics to optimize your listings and increase visibility.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Fast & Efficient:</span>  Get your eBay store up and running quickly, with optimized strategies for immediate impact.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Responsive Support:</span> Our dedicated team is always available to resolve issues and offer guidance.
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
                            <div className="flex gap-4 justify-center">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">eBay SEO & Visibility Boost</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2"> We optimize your listings to rank higher in eBay&apos;s search results. By using targeted keywords, category relevance, and backend SEO techniques, we help increase your product visibility and get more eyes on your listings.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Order & Inventory Management</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Our team helps you maintain smooth operations by guiding you through eBay’s order fulfillment process, inventory syncing, and stock level updates — all while keeping your seller metrics healthy and reliable.</p>
                      
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector3.svg"
                                className="w-15 p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Customer Support & Feedback Handling</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We assist in managing buyer messages, returns, and disputes. Our support ensures fast responses, polite communication, and a professional tone that helps maintain a top-rated seller status.</p>
                       
                        </div>
                        </div>
                        <div className=" lg:mt-[250px] mt-[40px]">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/ebay3.png"
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