import Image from "next/image";
import Link from "next/link";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[40px]">
                <div className="col-lg-12 text-center lg:pt-[80px] pt-[40px] mb-4">
                    <p className="lg:text-[2.5vw] lg:leading-[2vw] p-0 mb-3 text-[5vw] font-bold text-[#1B1B1B]">Digital Marketing Services</p>
                    <p className="lg:text-[1.1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Boost Your Online Visibility and Drive Growth</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[40px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/marketing1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-6">
                                <p className="lg:text-[1.5vw] text-[5vw] font-bold text-[#090909]">Grow Your Brand Online</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className="lg:text-[1vw] text-[3vw] text-[#5C5C5C]">In today&apos;s competitive digital landscape, a strong digital marketing strategy is essential for attracting and retaining customers. Whether you&apos;re looking to increase website traffic, engage with your audience on social media, or run effective ad campaigns, our digital marketing services are designed to deliver results that drive growth and success.</p></div>
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
            <section className="lg:px-[100px] px-[40px] bg-[#F2F2F2] lg:pt-[80px] pt-[50px] overflow-hidden  lg:pb-[80px] pb-[40px]">
                <div className="col-lg-12 text-center  mb-4">
                    <p className="lg:text-[2.5vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-[#1B1B1B]">What We Do</p>
                    </div>
                    <div className="col-lg-12 lg:mt-[80px] mt-[40px]">
                 <div className="lg:flex mb-4 justify-center">
                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                        <div className="col-lg-9 ">
                            <div className="lg:flex gap-4 justify-center">
                          
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] lg:flex gap-3 font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Search Engine Optimization (SEO)</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">We optimize your website&apos;s content and structure to improve its ranking on search engines, driving organic traffic and increasing visibility. Our SEO strategies are tailored to your business and market to ensure sustained growth.</p>
                       
                        </div>
                        </div>
                      
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center">
                           
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] lg:flex gap-3 text-[#0B3655] font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Pay-Per-Click (PPC) Advertising</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">Maximize your ROI with targeted PPC campaigns on platforms like Google Ads and Bing. Our experts create, manage, and optimize campaigns that attract the right audience and drive conversions.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                        
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] lg:flex gap-3 font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Social Media Marketing</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">Engage with your audience on the platforms they use most. We craft tailored social media strategies, create compelling content, and manage paid ads to help grow your followers and increase brand awareness.</p>
                        
                        </div>
                        </div>
                        </div>
                       
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.5vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">Results-Driven Strategy: </span>    We focus on measurable results that align with your business goals.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">Expertise in Multiple Channels: </span>  From SEO and PPC to social media and content marketing, we&apos;ve got all your digital needs covered.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">Tailored Solutions: </span>Every campaign is customized to fit your target audience and market.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">SEO-Focused Development: </span> We build websites optimized for search engines to drive traffic and improve visibility.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">Analytics & Reporting:  </span>Transparent reporting to track progress and continuously improve campaign performance.
                            </li>
                        </ul>
                            <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1vw] font-bold text-[3vw]">Ongoing Support:  </span>We offer continuous optimization and strategy adjustments to ensure long-term success.
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
                            <div className="lg:flex gap-4 justify-center">
                          
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] lg:flex gap-3 text-[#0B3655]  font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Email Marketing Campaigns</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium text-[3vw] lg:pl-14 pl-0 text-[#666666] mt-2">Stay connected with your customers through personalized email marketing campaigns. We design visually appealing emails, segment your audience, and track performance to ensure maximum open rates and conversions.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                           
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] lg:flex gap-3 text-[#0B3655] font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Content Marketing</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] font-medium lg:pl-14 pl-0 text-[3vw] text-[#666666] mt-2">We create high-quality, SEO-optimized content that resonates with your audience and builds brand authority. From blog posts and articles to videos and infographics, we ensure your content drives engagement and adds value to your customers.</p>
                      
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                        
                        </div>
                        <div className=" lg:mt-[250px] mt-[40px]">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/marketing2.png"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>
                 </div>
                
                </section>

<Footer/>
        </>
    )
}