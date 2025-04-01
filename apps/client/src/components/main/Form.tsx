import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.contact.trim() ||
      !formData.location.trim()
    ) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
      setFormData({
        name: "",
        contact: "",
        location: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-96 lg:w-full flex items-center justify-center bg-inherit">
      <div className="w-full max-w-md bg-white py-6 px-4 rounded-2xl shadow-lg">
        <h3 className="text-center text-gray-500 text-sm font-medium">
          FREE CONSULTATION
        </h3>
        <h2 className="text-center text-3xl font-normal text-black mt-2">
          Connect with our <br /> Construction Experts
        </h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="First Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              disabled={isSubmitting}
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/profile-logo.svg"
                alt="profile-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                First Name
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder=""
              aria-label="Contact Number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              disabled={isSubmitting}
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/phone-logo.svg"
                alt="phone-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                Contact Number
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="Location of Plot"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              disabled={isSubmitting}
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/search-logo.svg"
                alt="search-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                Location of Plot
              </span>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-black text-white py-4 text-base rounded-md font-bold transition flex justify-center items-center gap-2.5 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-900"
            }`}
          >
            {isSubmitting ? "Submitting..." : "GET A FREE QUOTE"}
            {!isSubmitting && (
              <Image
                src="/svg/right-arrow.svg"
                alt="right-arrow"
                width={15}
                height={17}
                className="w-4 h-4"
              />
            )}
          </button>
          {submitStatus === "success" && (
            <p className="text-center text-green-600 mt-2">
              Thank you! Your submission has been received.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-center text-red-600 mt-2">
              Submission failed. Please try again.
            </p>
          )}
        </form>
        <p className="text-center font-thin text-xs text-gray-500/80 mt-3 px-9">
          By proceeding, you are indicating that you have read and agree to our
          <a href="#" className="font-normal underline">
            {" "}
            terms of use{" "}
          </a>
          &amp;
          <a href="#" className="font-normal underline">
            {" "}
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Form;
