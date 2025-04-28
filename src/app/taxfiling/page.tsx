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
                    <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[5vw] font-bold text-[#1B1B1B]">Company Setup & Tax Filing Services</p>
                    <p className="lg:text-[1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-[#666666]">Start Your Business in the UAE with Expert Guidance</p>
                </div>
                <div className="col-lg-12 lg:pt-[80px] pt-[40px] mb-4">
                    <div className="lg:flex gap-4 items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="col-lg-11">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/tax1.png"
                            />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 ">
                            <div className="col-lg-6">
                                <p className="lg:text-[1vw] text-[5vw] font-bold text-[#090909]">Company Setup & Tax Filing Dubai</p>
                               
                             
                            </div>
                            <div className="col-lg-10">   <p className="text-[#5C5C5C]">Setting up a business in the UAE can be a complex process, but with the right support, it becomes an efficient and straightforward journey. Whether you&apos;re starting a new venture or expanding an existing one, our company setup and tax filing services ensure compliance and help you navigate the regulatory landscape seamlessly.</p></div>
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
            <section className="lg:px-[100px] px-[40px] bg-[#F2F2F2] lg:pt-[80px] pt-[50px] overflow-hidden  lg:pb-[80px] pb-[40px]">
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
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                               
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Business Setup Consultation</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We guide you through the entire process of establishing your company in the UAE, from choosing the right legal structure to obtaining the necessary licenses and permits. Our experts ensure that your business is set up in full compliance with local laws.</p>
                       
                        </div>
                        </div>
                      
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Company Registration & Licensing</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We handle the paperwork and formalities for company registration, ensuring all legal requirements are met. Whether you&apos;re setting up a free zone or mainland company, we provide all the necessary support to get you started.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Tax Filing & VAT Registration</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We assist with VAT registration, tax filings, and ensure your business meets UAE&apos;s tax regulations. Our experts ensure your tax submissions are accurate and timely, avoiding penalties and ensuring compliance.</p>
                        
                        </div>
                        </div>
                        </div>
                       
                        <div className=" lg:mt-[80px] mt-[40px]">
                        <p className="lg:text-[1.3vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Why Choose Us?</p>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Expert Knowledge of Local Laws:</span>  We understand UAE&apos;s business laws and tax regulations and provide tailored advice to suit your needs.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Expertise in Multiple Channels: </span>  From SEO and PPC to social media and content marketing, we&apos;ve got all your digital needs covered.
                            </li>
                        </ul>
                        <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Hassle-Free Company Setup:</span> We streamline the setup process, handling all the legalities and paperwork for you.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Timely Tax Filings: </span>  Our experts ensure that your tax filings and VAT submissions are done accurately and on time.
                            </li>
                            </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Comprehensive Services:   </span>From business registration to ongoing accounting and bookkeeping, we offer end-to-end solutions.
                            </li>
                        </ul>
                            <ul className="list-disc mt-4  lg:text-[0.8vw] lg:leading-[1.2vw] font-medium text-[3vw]">
                            <li className="">
                           <span className="text-[#000]  lg:text-[0.8vw] lg:leading-[1vw] font-bold text-[3vw]">Dedicated Support:   </span>We provide continuous guidance to ensure your business remains compliant and successful in the UAE.
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
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">Accounting & Bookkeeping Services</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Our accounting services include maintaining accurate financial records, preparing balance sheets, and providing monthly reports. We help you stay organized and compliant with tax regulations.</p>
                        
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                            <div className="col-lg-1">
                                <Image alt=""  width={1080}  height={1080}  
                                 src="/assets/vector2.svg"
                                className="w-10  p-0 m-0"
                                />
                            </div>
                            <div className="">
                        <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">PRO Services</p>
                        <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We offer professional services to handle all government documentation and approvals on your behalf, including visa processing, work permits, and other legal formalities, so you can focus on running your business.</p>
                      
                        </div>
                        </div>
                        </div>
                        <div className=" lg:mt-[40px] mt-[20px]">
                            <div className="flex gap-4 justify-center ">
                        
                        </div>
                        <div className=" lg:mt-[250px] mt-[40px]">
                            <Image alt=""  width={1080}  height={1080}  
                            src="/assets/tax2.png"
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