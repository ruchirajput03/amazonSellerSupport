import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#000] sm:px-20  px-[10px] pt-14 pb-[10px]">
                <div className="container-fluid">
                    <div className="row justify-between sm:pb-[30px]">
                        <div className="col-lg-3">
                            <div>
                                <Image
                                    src="/assets/logo.svg"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                    className="w-[200px]"
                                />
                            </div>
                            <div className="pt-[20px]">
                                <p className="Syne-Regular text-[#E6E6E6] sm:text-[0.88vw] text-[3vw]  mb-2">Amazon Seller Support is a full-service global agency specializing in Amazon, eBay, and Noon, where sustainable growth and profitability are our top priorities for our partners. Our services include, but are not limited to: Account Management, Brand Protection, Logistics and Operations, Advertising, DSP, and tailored solutions designed to maximize your success on these platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row relative">
                                <div className="col-lg-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className=" font-bold text-[#FFF] sm:text-[1.5vw] text-[4vw]  mb-2">Company</p>
                                        <div>
                                            <Link href="/contactus" className="!no-underline">
                                                <span className="
                                                 text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">
                                                    Contact Us






                                                </span>
                                            </Link>
                                            


                                            <Link href="/FooterPages/Amazon3" className="!no-underline">
                                                <span className=" text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">Our team</span>
                                            </Link>
                                            <Link href="/FooterPages/Amazon4" className="!no-underline">
                                                <span className=" text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2"> Careers</span>
                                            </Link>
                                            <Link href="/FooterPages/Amazon5" className="!no-underline">
                                                <span className=" text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2"> Privacy Policy</span>
                                            </Link>




                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className="font-bold text-[#FFFF] sm:text-[1.5vw] text-[4vw]  mb-2">Our Services




                                        </p>
                                        <div>
                                            <Link href="/amazonConsultancy" className="!no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">Amazon Consultancy</span>
                                            </Link>
                                            <Link href="/noonConsultancy" className="!no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">Noon Consultancy</span>
                                            </Link>
                                            <Link href="/design&Dev" className="!no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">Design & Development</span>
                                            </Link>
                                            <Link href="/taxfiling" className="!no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[1vw] text-[3vw] block  mb-2">
                                                    Company Setup & Tax Filing</span>
                                            </Link>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 flex justify-end">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className=" font-bold text-[#FFF] sm:text-[1.5vw] text-[4vw]  mb-4">Subscribe to our newsletter*</p>

                                        <div className="relative bg-white text-white px-3 py-1 rounded-full flex justify-between items-center w-full max-w-[400px]">
                                            <input
                                                type="email"
                                                placeholder="Email Address..."
                                                className="text-black px-3 py-2 rounded-full w-full focus:outline-none"
                                            />

                                            <Link href="#" className="ml-3 bg-[#000000]  text-sm px-4 py-2 text-white rounded-full shadow hover:bg-gray-100 transition !no-underline">
                                                SUBMIT
                                            </Link>
                                        </div>


                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>



                    <div className="text-end w-auto ms-auto  sm:right-0 sm:bottom-0 sm:py-[0px] py-[30px] mb-4 ">
                        <Image
                            src="/assets/footer-icon copy.svg"
                            className="ms-auto"
                            width={360}
                            height={1080}
                            alt="no-img"
                        />
                    </div>



                    <div className="row border-t-[1px] justify-between sm:pt-[10px] pt-[5px] sm:px-[0px] px-[10px]">
                        <div className="col-lg-6 ps-0">
                            <div className="sm:pb-[20px]  sm:pt-[8px] pt-[10px]">
                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[16px] block  mb-2">2024-25 e-retailsolutions. All right reserved.</span>
                            </div>
                        </div>

                        <div className="col-lg-6 pe-0">
                            <div className="sm:pb-[20px] pb-[15px] sm:pt-[8px] sm:text-end">
                                <Link href="https://www.scriptstudio.io/" className="!no-underline"><span className="  text-[#E6E6E6] sm:text-[14px] text-[16px] block font-bold  mb-2">Design & Developed by Scriptstudio.io</span> </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
