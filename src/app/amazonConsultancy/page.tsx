import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from '@/app/components/footer';
import PricingSection from '@/app/components/pricingSection';
export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[80px]">
                <div className="col-lg-12 text-center lg:pt-[80px] pt-[40px] mb-4">
                    <p className="lg:text-[2.5vw] lg:leading-[2vw] p-0 mb-4 text-[4vw] font-bold text-[#1B1B1B]">Amazon Seller Account Handling Services</p>
                    <p className="lg:text-[1.1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Expand Your Amazon Business with Professional Assistance</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[20px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image
                            alt=""  width={1080}  height={1080} 
                            src="/assets/amazon1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-6">
                                <p className="lg:text-[1.5vw] text-[5vw] font-bold text-[#090909]">Start Selling on Amazon</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className="text-[#5C5C5C] lg:text-[1vw] text-[3vw]">Selling on Amazon offers great growth opportunities, but true success takes more than just listing a product—it demands a well-planned approach. Our expert Amazon consulting services guide you through every step, from setting up your account to boosting sales with effective marketing and streamlined operations. Let us help you master the Amazon marketplace and reach your business goals.</p></div>
                            <div className="mt-10 col-lg-3">
                        <Link href="/contactus" className="!no-underline">
                          <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-4 w-full py-2">
                            Contact Us
                          </p>
                        </Link>
                      </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            <section className="lg:px-[100px] px-[40px] bg-[#F2F2F2] lg:pt-[80px] pt-[50px] lg:pb-[80px] pb-[40px] overflow-hidden  ">
                <div className="col-lg-12 text-center  mb-4">
                    <p className="lg:text-[3vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-[#1B1B1B]">Our Services</p>
                    </div>
                    <div className="col-lg-12 lg:mt-[80px] mt-[40px]">
                 <div className="lg:flex mb-4  ">
                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                        <div className="col-lg-9 ">
                            <div className="lg:flex gap-2 ">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="col-lg-11">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Amazon Account Creation & Enhancement</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">We offer a smooth and hassle-free Amazon seller account setup, making sure it meets all regulatory requirements and is fully prepared for sales. Our team fine-tunes your account settings to enhance visibility and performance, setting a solid groundwork for your business success.</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">Account Setup and Customization</li>
                            <li  className="mt-1">Tax, Payment, and Delivery Configuration</li>
                            <li  className="mt-1">Product Category Authorization and Brand Registration</li>
                        </ul>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-2 ">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                  className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="col-lg-11">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Amazon PPC Campaign Management</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">Boost your product visibility with targeted Amazon PPC campaigns. We manage your advertising efforts to maximize return on investment (ROI), using proven strategies to reach more customers while keeping ad costs efficient..</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">Sponsored Products and Sponsored Brands Campaigns</li>
                            <li  className="mt-1">Campaign Setup, Management, and Optimization</li>
                            <li  className="mt-1">Bidding Strategies and Keyword Targeting Optimization</li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-2">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                  className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="col-lg-11">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Account Performance Tracking</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">Maintaining a healthy account is essential to prevent suspension and ensure smooth operations. We monitor your account for potential issues, ensure compliance with Amazon’s policies, and assist in resolving any problems promptly.</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">Regulatory Compliance Audits</li>
                            <li  className="mt-1">Suspension Prevention and Appeal Management</li>
                            <li  className="mt-1">Review and Feedback Management</li>
                        </ul>
                        </div>
                        </div>
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.5vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Global Amazon Market Expertise:</span> Global Amazon Market Expertise: Whether you&apos;re selling locally or internationally, our team has the experience to expand your business across Amazon&apos;s global marketplaces.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]"> Analytics-Driven Strategy:</span> We leverage data and insights to make informed decisions, ensuring continuous improvement for your business.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Continuous Assistance: </span>We don&apos;t just set you up and walk away—our team offers ongoing support to ensure your business operates seamlessly.
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
                            <div className="lg:flex gap-2">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                  className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Product Listing Enhancement</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">To gain visibility on Amazon, it&apos;s essential to have captivating and optimized product listings. Our team applies the latest SEO strategies to enhance your product titles, descriptions, and images, helping your listings rank higher and drive more conversions.</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">Keyword Analysis & Implementation</li>
                            <li  className="mt-1">Engaging Product Titles & Descriptions</li>
                            <li  className="mt-1">Premium Images and A+ Content Development</li>
                        </ul>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-2 ">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                  className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Inventory and Order Tracking Management</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">Efficient inventory management prevents stockouts or excess inventory on Amazon. We assist with demand forecasting, supply chain management, and seamless integration with Amazon’s fulfillment system.</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">Inventory Monitoring and Demand Forecasting</li>
                            <li  className="mt-1">FBA (Fulfillment by Amazon) Optimization</li>
                            <li  className="mt-1">Restock Notifications and Inventory Analysis</li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-2 ">
                            <div className="col-lg-1">
                                <Image
                                alt=""  width={1080}  height={1080} 
                                src="/assets/Vector.svg"
                                  className="lg:w-full w-[60px]"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Amazon FBA and Shipping Optimization Solutions</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] text-[#666666] mt-2">Fulfillment by Amazon (FBA) offers great advantages, but it requires careful planning. We assist with setting up FBA, optimizing your shipping processes, and ensuring timely deliveries to improve customer satisfaction.</p>
                        <ul className="mt-2 list-disc text-[#666666] lg:text-[0.88vw] lg:leading-[1vw] font-medium text-[3vw]">
                            <li className="mt-1">FBA Setup and Streamlining</li>
                            <li  className="mt-1">Shipping Expense Optimization</li>
                            <li  className="mt-1">Inventory Storage and Logistics Strategy</li>
                        </ul>
                        </div>
                        </div>
                        <div className=" lg:mt-[80px] mt-[40px]">
                            <Image
                            alt=""  width={1080}  height={1080} 
                            src="/assets/amazon2.png"
                              className="w-full "
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