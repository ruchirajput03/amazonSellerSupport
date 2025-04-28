
"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";




function Header1() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };
    const handleMouseLeave = () => {
        setOpenMenu(null);
    };
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () => {
        setIsVisible(!isVisible);
    }








    return (
        <>
            <section className="lg:px-[100px] px-[20px] z-100 fixed w-full bg-[#000124] lg:py-3">
                <div className="flex justify-items-center justify-center ">
                    <div className="container-fluid w-full col-lg-12 z-100 flex items-center !justify-center py-4 lg:h-30 lg:pt-[40px]">



                        <div className="col-lg-8 lg:bg-[#151A29D9] lg:py-4  lg:px-5 text-center items-center rounded-full ">


                            <nav className="mx-auto  hidden lg:flex items-center justify-between lg:text-[1vw] text-[2vw] lg:leading-[1vw] text-white leading-[3vw] font-medium">

                                <div className="col-lg-2 flex justify-start">
                                    <Link href="/">
                                        <Image src='/assets/logo.svg' className="lg:w-[150px]" width={1080} height={1080} alt="amazonsellersupport.ae" />
                                    </Link>
                                </div>

                                <Link href="/" className=" text-white !no-underline hover:text-gray-400">Home</Link>

                                <Link href="/contactus" className=" !no-underline text-white hover:text-gray-400">Contact us</Link>


                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter("products")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center text-lg  group ">
                                        Services
                                        <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                        </span>
                                    </button>

                                    {openMenu === "products" && (
                                        <div className="absolute top-[15px] py-3 mt-2 w-[250px] bg-white shadow-sm rounded-md">
                                            <ul className="text-left px-8 text-black space-y-3 list-disc ">
                                                <li>
                                                    <Link href="/amazonConsultancy" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">Amazon Consultancy</Link>
                                                </li>
                                                <li>
                                                    <Link href="/noonConsultancy" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">Noon Consultancy</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ebayConsultancy" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">eBay Consultancy</Link>
                                                </li>
                                                <li>
                                                    <Link href="/design&Dev" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">Design & Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="/digitalMarketing" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">Digital Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/taxfiling" className="lg:text-[0.9vw] text-[1vw] !no-underline text-black">Company Setup & Tax Filing</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                </div>



                                {/* <Link href="/pricing" className=" !no-underline text-white hover:text-gray-400">Feedback</Link> */}

                                <Link href="/contactus" className="!no-underline"><p className="p-0 m-0  text-white border-2 !border-[#BD1E7B] px-5 py-3 rounded-full">Schedule a Call</p></Link>





                            </nav>





                            <div className="flex gap-40 lg:hidden ">
                                <Image src='/assets/logo.svg' className="w-[180px] flex jutsify-start" width={1080} height={1080} alt="amazonsellersupport.ae" />
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden inline-flex items-center justify-center p-2 rounded-3xl text-gray-500 hover:bg-gray-100 focus:outline-none"
                                >
                                    <Bars3Icon className="h-6 w-6" />
                                </button>
                            </div>


                            {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
    <div className="fixed overflow-y-auto top-0 right-0 w-full h-full bg-white shadow-lg p-5 flex flex-col">
      <button onClick={() => setIsOpen(false)} className="self-end text-gray-600">
        <XMarkIcon className="h-6 w-6" />
      </button>

      <nav className="mt-4 flex flex-col items-start space-y-4">
        <Link href="/" className="text-black !no-underline hover:text-black">
          Home
        </Link>

        <Link href="/contactus" className="text-black !no-underline hover:text-black">
          Contact Us
        </Link>

        <button type="button" onClick={toggleContent} className="text-black !no-underline hover:text-gray-400">
          <div className="flex flex-row items-center gap-1">
            <p className="p-0 m-0">Services</p>
            <MdOutlineArrowDropDown className="w-5 h-5" />
          </div>

          {isVisible && (
            <div className="z-100 rounded-lg py-4 px-4 shadow-md w-auto bg-white mt-2">
              <div className="flex flex-col items-start space-y-2">
                <Link href="/amazonConsultancy" className="lg:text-[1vw] text-black text-[3vw] !no-underline">
                  Amazon Consultancy
                </Link>
                <Link href="/noonConsultancy" className="lg:text-[1vw] text-black text-[3vw] !no-underline">
                  Noon Consultancy
                </Link>
                <Link href="/ebayConsultancy" className="lg:text-[1vw] text-black text-[3vw] !no-underline">
                  eBay Consultancy
                </Link>
                <Link href="/design&Dev" className="lg:text-[1vw] text-black text-[3vw] !no-underline">
                  Design & Development
                </Link>
                <Link href="/taxfiling" className="lg:text-[1vw] text-black text-[3vw] !no-underline">
                  Company Setup & Tax Filing
                </Link>
              </div>
            </div>
          )}
        </button>
      </nav>
    </div>
  </div>
)}

                        </div>
                    </div>
                </div>

            </section>











        </>
    );
}

export default Header1;



