import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative w-full bg-transparent text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[103px] px-6">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-wide cursor-pointer">
          Brixline
        </div>
        <button className="flex justify-center items-center border rounded-xl border-white py-2 px-3 lg:py-3 sm:px-6 gap-2.5 cursor-pointer">
          <div className="text-md sm:text-lg">BUILD WITH US</div>
          <Image
            src="/svg/right-arrow.svg"
            alt="right-arrow"
            width={15}
            height={17}
            className="w-4 h-4"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
