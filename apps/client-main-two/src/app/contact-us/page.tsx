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
        <section className="container mt-10" >
            <div className="grid grid-cols-2" >
                <div className="relative" >
                    <Image
                        src="/png/contact-hero.png"
                        alt="bookwithus"
                        width={634}
                        height={600}
                        className="hidden md:block h-[600] w-full"
                    />
                    <div className="absolute bottom-2 text-white z-20 p-10 bitter-font" >
                        <Title className="text-white text-left bitter-font">
                            We are here to <br /> answer your all  <br />queries
                        </Title>
                        <div className="flex gap-x-5 my-3" >
                            <p>+91 86189 60406</p>
                            <p>hello@brixline.com</p>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5 p-10 bg-gray-100" >
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
                    <div className="col-span-2" >
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
                    <p className="text-black " >
                        By proceeding, you are indicating that you have read and agree to our <a className="underline" >terms of use </a>& <a className="underline" >privacy policy</a>
                    </p>
                    <Button className='text-white border-white w-[320px] bg-[#F55252]'>
                        SUBMIT
                    </Button>

                </div>

            </div>
            {/* map section starts */}
            <div>

            </div>
            {/* map section ends */}

            <div className="flex flex-row gap-x-5 text-black mt-20" >
                <div className="w-[45%] flex flex-col gap-y-14 pl-10" >
                    <div>
                        <h2 className="text-5xl" >Hire the best house <br></br> construction service</h2>
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
                                <h1 className="text-2xl font-semibold" >65+</h1>
                                <p className="text-[#131313] text-sm font-thin whitespace-nowrap" >HOMES</p>
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
                                <h1 className="text-2xl font-semibold" >30k+</h1>
                                <p className="text-[#131313] text-sm font-thin whitespace-nowrap" >Sq. Ft. Delivered</p>
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
                                <h1 className="text-2xl font-semibold" >65+</h1>
                                <p className="text-[#131313] text-sm font-thin whitespace-nowrap" >Quality Checks</p>
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
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
};

export default ContactUs;