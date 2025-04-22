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
        <section className="container px-8 mt-10" >
            <div className="grid grid-cols-2" >
                <div className="relative" >
                    <Image
                        src="/png/contact-hero.png"
                        alt="bookwithus"
                        width={634}
                        height={600}
                        className="hidden md:block h-[600] w-full"
                    />
                    <div className="absolute bottom-2 text-white z-20 p-10" >
                        <Title className="text-white text-left">
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
                    <CustomSelect
                        onChange={(val) =>
                            setFormData((prev) => ({
                                ...prev,
                                location: val,
                            }))
                        }
                        options={enquiryTypeOption}
                        value={formData.location}
                        placeholder="Location of Plot" />
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
                    <p className="text-black" >
                        By proceeding, you are indicating that you have read and agree to our <span className="underline" >terms of use </span>& <span className="underline" >privacy policy</span>
                    </p>
                    <Button className='text-white border-white w-[320px] bg-[#F55252]'>
                        Submit
                    </Button>

                </div>

            </div>
        </section>
    )
};

export default ContactUs;