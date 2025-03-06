import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[103px] px-6">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-wide cursor-pointer">
          Brix
        </div>
        <button className="flex items-center border rounded-xl border-white py-3 px-4 lg:py-4 sm:px-6 gap-2.5 cursor-pointer">
          <div className="text-lg">BUILD WITH US</div>
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
