import Image from "next/image";
import Link from "next/link";
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <section className="lg:px-[100px] px-[40px] bg-[#000124] lg:pt-[150px] pt-[200px] overflow-hidden">
  <div className="relative lg:pt-[100px]">
    <Image 
    alt=""  width={1080}  height={1080}  
   
      src="/assets/Group 17812.png"
    
      className="w-full lg:h-auto"
    />

    <div className="absolute bottom-0 lg:!bottom-[500px] left-1/2 transform -translate-x-1/2 text-white text-center px-4 mb-4">
      <p className="text-lg lg:text-[2.8vw] text-[3.2vw] font-bold lg:leading-[3.2vw]">
        Become an <span className="text-[#7C99FF]">UAE Seller</span> & Simplify your path to <span className="text-[#D33A93]">Global Success</span>
      </p>

      <div className="flex justify-center">
        <div className="text-center mb-4 lg:text-[1vw] text-[2vw]">
          <p>Pay lesser selling fee* with every order on Dubai&apos;s most visited online shopping destination.</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <Link href="/contactus">
            <Image alt=""  width={1080}  height={1080}  

              src="/assets/Link.svg"
             
              className="w-[250px] h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[100px] pt-[50px] overflow-hidden  mb-4">

        <div className="col-lg-12 mb-4">
          <div className="flex justify-center">
            <div className="col-lg-10">
              <div className="lg:flex">
                <div className="col-lg-6 mb-4">
                  <div className="col-lg-10">
                    <Image alt=""  width={1080}  height={1080}  
                      src="/assets/Multinational people discussing and drinking coffee.png"
                      
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="col-lg-8 ">
                    <div className="flex gap-2">
                      <div className="col-lg-1">
                        <Image alt=""  width={1080}  height={1080}  
                          src="/assets/blue icon of house.svg"
                         
                          className="w-[40px]"
                        />
                      </div>
                      <div className="col-lg-8 mb-2">
                        <p className="lg:text-[1.2vw] text-[4vw] font-semibold text-black">Widespread Market Reach</p>


                      </div>

                    </div>
                    <div className="div">
                      <p className="">With a presence in 11+ strategic markets totaling over 1.5 billion people, amazon seller support connects you to a vast customer base and accelerates your business expansion.</p>
                    </div>

                  </div>
                  <div className="col-lg-8 mt-4">
                    <div className="flex gap-2">
                      <div className="col-lg-1">
                        <Image 
                        alt=""  width={1080}  height={1080}  
                          src="/assets/blue icon of world.svg"
                         
                          className="w-[40px]"
                        />
                      </div>
                      <div className="col-lg-8 mb-2">
                        <p className="lg:text-[1.2vw] text-[4vw] font-semibold text-black">End-to-End Services</p>


                      </div>

                    </div>
                    <div className="div">
                      <p className="">Access a complete suite of services for seamless multinational expansion—from fulfillment to marketing—so you can scale effortlessly and stress-free.</p>
                    </div>

                  </div>
                  <div className="col-lg-8 mt-4">
                    <div className="flex gap-2">
                      <div className="col-lg-1">
                        <Image alt=""  width={1080}  height={1080}  
                          src="/assets/blue icon of rocket.svg"
                         
                          className="w-[40px]"
                        />
                      </div>
                      <div className="col-lg-8 mb-2">
                        <p className="lg:text-[1.2vw] text-[4vw] font-semibold text-black">Quick and Efficient Solutions</p>


                      </div>

                    </div>
                    <div className="div">
                      <p className="">Rely on our rapid execution for global expansion projects, typically completed in six months or less, enabling your brand to capitalize on opportunities without hesitation.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#000124] overflow-hidden ">
        <div className="bg-[#F2F2F2] lg:px-[100px] px-[40px]  lg:pt-[100px] pt-[50px] rounded-b-[40px]  ">

          <div className="col-lg-12 mb-4">

            <div className="lg:flex">

              <div className="col-lg-6 mb-4">



                <div className="col-lg-7 mb-4">
                  <p className="lg:text-[1.5vw] text-[4vw] font-bold text-black">Specialized Consultancy Services for Amazon, Noon, and eBay to Drive Your Business Growth.</p>


                </div>


                <div className="col-lg-8 mb-4">
                  <p className="">Navigating today&apos;s competitive e-commerce platforms can be tough, but with expert guidance, success is within your grasp. Whether you&apos;re selling on Amazon, Noon, or eBay, our all-encompassing consultancy services are tailored to help you unlock your full potential.</p>
                </div>
                <div className="col-lg-8 mb-4">
                  <p className="">From account setup and product listings to advertising and sales optimization, we offer the expertise necessary to help you succeed across every marketplace.</p>
                </div>
                <div className="col-lg-4 mb-4">
                  <Link href="" className=" !no-underline"> <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-4 py-2 ">About Amazon Seller Support</p></Link>
                </div>



              </div>
              <div className="col-lg-6 mb-4">
                <div className="col-lg-12">
                  <Image alt=""  width={1080}  height={1080}  
                    src="/assets/ecommerce seo dubai.png"
                  
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-[100px] px-[40px] bg-[#000124] lg:pt-[80px] pt-[50px] overflow-hidden pb-[80px] ">
        <div className="col-lg-12 text-center lg:pt-[50px] pt-[20px] mb-4">
          <p className="lg:text-[1.9vw] lg:leading-[2vw] p-0 mb-2 text-[4vw] font-bold text-white">Our Services</p>
          <p className="lg:text-[1vw] lg:leading-[1vw] p-0 m-0 text-[3vw]  text-white">Discover services in a growing number of categories</p>
        </div>

        <div className="col-lg-12 items-center lg:pt-[50px] pt-[20px] pb-4">
          <div className="flex justify-center">
            <div className="col-lg-11">

              <div className="lg:flex gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="col-lg-4 mb-4">
                    <div className="h-full flex flex-col justify-between bg-white rounded-2xl px-8 pt-8 pb-6 shadow-sm">


                      <div>
                        <p className="lg:text-[1.5vw] text-[#EC7834] text-[4vw] font-bold">
                          {index === 0 ? "Amazon Consultancy" : index === 1 ? "Noor Consultancy" : "Ebay Consultancy"}
                        </p>
                        <p className="lg:text-[1vw] lg:leading-[1.3vw] font-semibold text-[3vw] text-[#0B3655] mt-2">
                          {index === 0
                            ? "Enhance your Amazon presence with customized strategies designed to boost visibility, drive sales, and streamline your operations."
                            : index === 1
                              ? "Leverage Noon's expanding marketplace with expert guidance to maximize your reach and boost sales potential."
                              : "Unlock eBay&apos;s global marketplace potential with expert support to boost your visibility and drive more sales."}
                        </p>
                        <ul className="list-disc mt-4 lg:text-[1vw] text-[#292929] text-[3vw] space-y-3">
                          {index === 0 && (
                            <>
                              <li>Account Registration and Compliance</li>
                              <li>SEO-Driven Product Listing Optimization</li>
                              <li>PPC Campaign Management and Optimization</li>
                              <li>FBA Integration and Inventory Optimization</li>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <li>Account Setup and Onboarding</li>
                              <li>Product Listing Optimization with Compelling Content</li>
                              <li>Ad Campaign Management and Sales Performance Tracking</li>
                              <li>Performance Tracking and Optimization Strategies</li>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <li>Optimized product listings with compelling content</li>
                              <li>Targeted ad campaign management and sales insights</li>
                              <li>Ongoing performance monitoring and strategic improvements</li>
                            </>
                          )}
                        </ul>
                      </div>


                      <div className="mt-10 col-lg-5">
                        <Link href="#" className="!no-underline">
                          <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-5 py-2">
                            Contact Us
                          </p>
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 items-center lg:pt-[20px] pt-[10px] pb-4">
          <div className="flex justify-center">
            <div className="col-lg-11">

              <div className="lg:flex gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="col-lg-4 mb-4">
                   
                    <div className="h-full flex flex-col justify-between bg-white rounded-2xl px-8 pt-8 pb-6 shadow-sm">


                      <div>
                        <p className="lg:text-[1.5vw] text-[#EC7834] text-[4vw] font-bold">
                          {index === 0 ? "Design and Development" : index === 1 ? "Digital Marketing" : "Company Setup & Tax Filing"}
                        </p>
                        <p className="lg:text-[1vw] lg:leading-[1.3vw] font-semibold text-[3vw] text-[#0B3655] mt-2">
                          {index === 0
                            ? "Transform your online presence with expert website design and development services that drive traffic and convert visitors into customers."
                            : index === 1
                              ? "Boost your brand visibility and drive measurable results with expert digital marketing solutions tailored to your business goals."
                              : "Simplify your business journey with expert company setup and tax filing services designed to keep you compliant and growth-ready."}
                        </p>
                        <ul className="list-disc mt-4 lg:text-[1vw] text-[3vw] space-y-3">
                          {index === 0 && (
                            <>
                              <li>Custom website planning and onboarding</li>
                              <li>Visually engaging and user-friendly design</li>
                              <li>Robust development and performance optimization</li>
                              <li>Ongoing support, analytics, and growth strategies</li>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <li>Strategic onboarding and goal alignment</li>
                              <li>High-impact content and campaign creation</li>
                              <li>Multichannel advertising and performance tracking</li>
                              <li>Continuous monitoring and growth optimization</li>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <li>Hassle-free company registration and onboarding</li>
                              <li>Accurate documentation and legal compliance</li>
                              <li>Timely tax filing and financial reporting</li>
                              <li>Ongoing support and advisory for growth</li>
                            </>
                          )}
                        </ul>
                      </div>


                      <div className="mt-10 col-lg-5">
                        <Link href="#" className="!no-underline">
                          <p className="border text-white !border-[#D33A93] text-center bg-[#D33A93] rounded-full px-5 py-2">
                            Contact Us
                          </p>
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[80px] pt-[50px] overflow-hidden">
      <div className="col-lg-12 text-center lg:pt-[50px] pt-[20px] mb-4">
          <p className="lg:text-[2vw] lg:leading-[2vw] p-0  text-[4vw] font-bold text-[#0B3655]"> Our Process</p>
          </div>
          <div className="lg:pt-[50px] pt-[20px] pb-[50px]">
          <div className="lg:flex justify-center ">
          <div className="col-lg-10">
            <div className="lg:flex gap-8 ">
          <div className="col-lg-6 mb-4">

            <div className="col-lg-10">
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">1.Introductory Consultation</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We start by gaining a deep understanding of your business, goals, and challenges through a comprehensive consultation. This allows us to craft a customized roadmap tailored to your needs on Amazon, Noon, and eBay.</p>
              </div>
         
            </div>
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">2. Account Registration & Compliance</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Our team ensures your seller accounts are properly set up and fully compliant with marketplace policies. From tax configurations to category approvals, we manage every detail to ensure a smooth start.</p>
              </div>
         
            </div>
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">3. Product Listing Enhancement</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We craft and optimize your product listings with compelling content, SEO-driven keywords, and high-quality visuals to boost visibility and increase conversions.</p>
              </div>
         
            </div>
            </div>
            </div>

            <div className="col-lg-6 mb-4">
            <div className="col-lg-10">
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">4. Advertising & Promotional Campaigns</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We design and manage targeted PPC and promotional campaigns to optimize your reach and ROI, ensuring your products shine in competitive marketplaces.</p>
              </div>
         
            </div>
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] text-[#0B3655] font-semibold p-0 m-0">5. Performance Tracking & Analytics</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">We consistently monitor your account&apos;s performance, analyzing sales data, customer feedback, and key metrics to uncover growth opportunities and areas for improvement.</p>
              </div>
         
            </div>
              <div className="flex gap-4">
              <div className="col-lg-2">
                <Image alt=""  width={1080}  height={1080}   
                src="/assets/pr2.svg"
                />
              </div>
              <div className="col-lg-10 mb-4">
                <p className="lg:text-[1vw] text-[3vw] font-semibold p-0 m-0">6. Continuous Support & Business Growth</p>
                <p className="lg:text-[0.8vw] lg:leading-[1vw] font-medium text-[3vw] text-[#666666] mt-2">Our team offers regular updates, strategic insights, and proactive solutions to support your business growth. Whether addressing challenges or exploring new opportunities, we&apos;re here to assist at every stage.</p>
              </div>
         
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           
          
            </div>
     
      
        </section>
        <section className="lg:px-[100px] px-[40px] bg-[#F2F2F2] lg:pt-[80px] pt-[50px] overflow-hidden pb-[80px]">
        <div className="col-lg-12 text-center lg:pt-[50px] pt-[20px] mb-4">
          <p className="lg:text-[2vw] lg:leading-[2vw] p-0  text-[4vw] font-bold text-[#0B3655]"> Our Proven Results</p>
          <div className="lg:pt-[40px] pt-[20px] mb-4 marquee-anim">
            <div className="flex gap-4">
            <div className="col-lg-4 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu1.png"
              className="w-full "
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu2.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu3.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu4.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu5.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu6.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu3.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu7.png"
              className="w-full h-full"
              />
            </div>
            <div className="col-lg-4">
            <Image alt=""  width={1080}  height={1080}  
              src="/assets/marqu8.png"
              className="w-full h-full"
              />
            </div>
            

          </div>
          </div>
          <div className="lg:pt-[40px] pt-[20px] mb-4 marquee-anim ">
            <div className="flex gap-8">
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Kyani logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 items-center ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Herbalife logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Fuxion logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Kyani logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 items-center ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Herbalife logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Fuxion logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Kyani logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Young Living logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 items-center">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Tupperware logo.svg"
              className="w-[100px]  "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Kyani logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Young Living logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 items-center">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Tupperware logo.svg"
              className="w-[100px]  "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/AMC logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Young Living logo.svg"
              className="w-[100px] "
              />
            </div>
            <div className="col-lg-1 items-center">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/Tupperware logo.svg"
              className="w-[100px]  "
              />
            </div>
            <div className="col-lg-1 ">
              <Image alt=""  width={1080}  height={1080}  
              src="/assets/AMC logo.svg"
              className="w-[100px] "
              />
            </div>
           
            </div>
            </div>
          </div>
          </section>

        <Footer/>
    </>
  );
}
