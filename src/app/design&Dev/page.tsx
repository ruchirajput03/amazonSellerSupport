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
                    <p className="lg:text-[2.5vw] lg:leading-[2vw] p-0 mb-3 text-[5vw] font-bold text-[#1B1B1B]">Web Design & Development Services</p>
                    <p className="lg:text-[1.1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Unlock Growth with a High-Impact Online Presence</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[40px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/web1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-10">
                                <p className="lg:text-[1.5vw] text-[5vw] font-bold text-[#090909]">Web Design & Development Dubai</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className=" lg:text-[1vw] text-[3vw] text-[#5C5C5C]">In today&apos;s digital world, a strong online presence is crucial for business success. Whether you need a sleek portfolio, a robust e-commerce site, or a corporate platform, the right web design and development strategy can help you stand out. Our web design and development services are crafted to build websites that not only look great but also perform at their best, driving growth and engagement.</p></div>
                            <div className="mt-10 col-lg-3">
                        <Link href="/contactus" className="!no-underline">
                          <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-4 e-full py-2">
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
                        <p className="lg:text-[1.3vw] text-[3vw] lg:flex gap-3 text-[#0B3655] font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                               
                                />Custom Web Design</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw] lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">We design websites tailored to your brand, ensuring your vision is brought to life with a visually stunning and user-friendly interface. Every design is responsive, mobile-friendly, and optimized for performance.</p>
                       
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                          
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] lg:flex gap-3 text-[#0B3655] font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Website Development</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw]  lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">From front-end to back-end, we develop scalable, secure, and high-performing websites. Whether it’s a content management system (CMS), custom web application, or e-commerce platform, we use the latest technologies to meet your needs.</p>
                        
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center">
                           
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] lg:flex gap-3 font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />E-commerce Solutions</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw]  lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">Ready to sell online? We design and develop e-commerce websites with seamless shopping experiences, secure payment gateways, and optimized product listings to boost your sales.</p>
                        
                        </div>
                        </div>
                       
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.5vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Local Expertise: </span>   Understanding the Dubai market and its unique needs.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Custom Solutions: </span> Websites designed specifically to meet your business objectives.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Mobile-First Design:</span>  We prioritize mobile-friendly, responsive websites.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">SEO-Focused Development: </span> We build websites optimized for search engines to drive traffic and improve visibility.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[1vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[1vw] lg:leading-[1.2vw] font-bold text-[3vw]">Ongoing Support: </span> Full support and maintenance to ensure your website stays secure and up-to-date.
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
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] lg:flex gap-3 font-semibold p-0 m-0"> <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />SEO Optimization & Content Strategy</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw]  lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">Our web development process includes integrated SEO best practices, ensuring your website ranks well on search engines and attracts organic traffic. We also provide content strategy and support to keep your site relevant and engaging.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                          
                            <div className="">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] lg:flex gap-3 font-semibold p-0 m-0">  <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />Maintenance & Support</p>
                        <p className="lg:text-[0.88vw] lg:leading-[1.2vw]  lg:pl-14 pl-0 font-medium text-[3vw] text-[#666666] mt-2">We offer ongoing support and website maintenance to ensure your site remains secure, up-to-date, and performs at its best. Our team is always available for troubleshooting, updates, and improvements.</p>
                      
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="lg:flex gap-4 justify-center ">
                        
                        </div>
                        <div className=" lg:mt-[250px] mt-[40px]">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/web2.png"
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