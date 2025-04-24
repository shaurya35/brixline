"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, Title } from "@/components/Tag";
import CustomInput from "@/components/Forms/CustomInput";
import CustomTextArea from "@/components/Forms/CustomTextArea";
import CustomSelect from "@/components/Forms/CustomSelect";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        contactNumber: "",
        location: "",
        enquiryType: "",
        enquiry: ""
    })

    const enquiryTypeOption = [{ label: "social", value: "Social" }]
    return (
        <main className="flex flex-col items-center lg:block" >
            <section className="container mt-10" >
                <div className="md:px-10 grid lg:grid-cols-2 grid-cols-1 relative items-center justify-center" >
                    <div className="relative h-[500px] md:h-full " >
                        <Image
                            src="/png/contact-hero.png"
                            alt="bookwithus"
                            width={634}
                            height={100}
                            className="block h-[500px] md:h-full  w-full"
                        />
                        <div className="absolute top-10 md:top-80 lg:top-96 flex flex-col gap-y-5 text-white z-20 p-10 bitter-font" >
                            <Title className="text-white text-left bitter-font text-4xl md:text-5xl">
                                We are here to <br /> answer your all  <br />queries
                            </Title>
                            <div className="flex gap-x-5 my-3" >
                                <p>+91 86189 60406</p>
                                <p>hello@brixline.com</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center bg-gray-100 h-full" >
                        <div className="-mt-32 md:mt-0 z-20 w-[90%] md:w-full lg:relative grid grid-cols-1 md:grid-cols-2 gap-5 p-10 bg-gray-100" >
                            <CustomInput
                                onChange={(val) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        firstName: val.target.value,
                                    }))
                                }
                                value={formData.firstName}
                                placeholder="First Name" />

                            <CustomInput
                                onChange={(val) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        contactNumber: val.target.value,
                                    }))
                                }
                                value={formData.contactNumber}
                                placeholder="Contact Number" />
                            <CustomInput
                                onChange={(val) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        location: val.target.value,
                                    }))
                                }
                                value={formData.location}
                                placeholder="Location of Plot"
                                icon={<Image
                                    src="/svg/SearchIcon.svg"
                                    alt="search"
                                    width={20}
                                    height={20}
                                    className="h-10"
                                />} />
                            <CustomSelect
                                onChange={(val) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        enquiry: val,
                                    }))
                                }
                                options={enquiryTypeOption}
                                value={formData.enquiryType}
                                placeholder="Enquiry Type" />
                            <div className="md:col-span-2" >
                                <CustomTextArea
                                    rows={10}
                                    onChange={(val) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            enquiry: val.target.value,
                                        }))
                                    }
                                    value={formData.enquiry}
                                    placeholder="Enquiry*"
                                />
                            </div>
                            <p className="text-black text-sm lg:text-base" >
                                By proceeding, you are indicating that you have read and agree to our <a className="underline" >terms of use </a>& <a className="underline" >privacy policy</a>
                            </p>
                            <Button className='text-white text-xs lg:text-sm border-white py-4 lg:w-full lg:py-2 md:py-2 bg-[#F55252]'>
                                SUBMIT
                            </Button>

                        </div>
                    </div>


                </div>
                {/* map section starts */}
                <div>

                </div>
                {/* map section ends */}

                <div className="flex flex-col gap-y-10 md:gap-y-0 lg:flex-row gap-x-5 text-black mt-20 px-5 md:px-0" >
                    <div className="w-full lg:w-[45%] flex flex-col gap-y-14 md:pl-10 mb-20 lg:mb-0 " >
                        <div className="text-center lg:text-left" >
                            <h2 className="text-3xl md:text-5xl" >Hire The Best House <br></br> Construction Service</h2>
                            <p className="text-[#131313] opacity-50 mt-4" >Backed by renowned investors who believe in our vision to revolutionize the sports ecosystem.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-x-5" >
                            <div className="flex items-center justify-start gap-x-2" >
                                <Image
                                    src="/svg/HomeIcon.svg"
                                    alt="home"
                                    width={50}
                                    height={50}
                                    className="h-10"
                                />
                                <div className="" >
                                    <h1 className="text-xl md:text-2xl font-semibold" >65+</h1>
                                    <p className="text-[#131313] text-xs md:text-sm font-thin whitespace-nowrap" >HOMES</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-x-2" >
                                <Image
                                    src="/svg/BricksIcon.svg"
                                    alt="home"
                                    width={50}
                                    height={50}
                                    className=" h-10"
                                />
                                <div className="" >
                                    <h1 className="text-xl md:text-2xl font-semibold" >30k+</h1>
                                    <p className="text-[#131313] text-xs md:text-sm font-thin whitespace-nowrap" >Sq. Ft. Delivered</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-x-2" >
                                <Image
                                    src="/svg/BadgeIcon.svg"
                                    alt="home"
                                    width={50}
                                    height={50}
                                    className=" h-10"
                                />
                                <div className="" >
                                    <h1 className="text-xl md:text-2xl font-semibold" >65+</h1>
                                    <p className="text-[#131313] text-xs md:text-sm font-thin whitespace-nowrap" >Quality Checks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow w-auto" >
                        <Image
                            src="/png/home-lg.png"
                            alt="home"
                            width={500}
                            height={500}
                            className="hidden lg:block w-full"
                        />
                        <Image
                            src="/png/home-sm.png"
                            alt="home"
                            width={500}
                            height={500}
                            className="lg:hidden block w-full"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ContactUs;