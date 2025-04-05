import Image from "next/image";

export default function TestimonialBack() {
  return (
    <div className="w-full overflow-hidden tracking-wide">
      {/* Desktop - Centered Static Images */}
      <div className="hidden lg:flex justify-center items-center gap-4 px-4">
        {/* Item 1 */}
        <div className="relative">
          <Image
            src="/png/cupboard-image.png"
            alt="cupboard-image"
            width={268}
            height={394}
            className="w-[268px] h-[394px] flex-shrink-0 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm font-light mb-4">
              &quot;As a busy working parent, I barely have time for household
              chores. Snabbit has been a lifesaver!&quot;
            </p>
            <div className="text-md font-black text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <Image
            src="/png/people-discussing.png"
            alt="people-discussing"
            width={301}
            height={513}
            className="w-[301px] h-[513px] flex-shrink-0 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm font-light mb-4">
              &quot;I was in a pinch and needed help cleaning before a
              last-minute guest arrived. They were at my door in 15
              minutes!&quot;
            </p>
            <div className="text-md font-black text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <Image
            src="/png/women-sunglasses.png"
            alt="women-sunglasses"
            width={279}
            height={311}
            className="w-[279px] h-[311px] flex-shrink-0 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm font-light mb-4">
              &quot;I love that I don&apos;t have to pre-select services. I just
              tell the professional what I need when they arrive.&quot;
            </p>
            <div className="text-md font-black text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative">
          <Image
            src="/png/women-kitchen.png"
            alt="house-image"
            width={279}
            height={464}
            className="w-[279px] h-[464px] flex-shrink-0 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-sm font-light mb-4">
              &quot;Providing seamless home solutions with modern
              efficiency and care.&quot;
            </p>
            <div className="text-md font-black text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Scrollable Snap Container */}
      <div className="lg:hidden flex items-center overflow-x-auto snap-x snap-mandatory pl-4 pr-4 gap-4">
        {/* Item 1 */}
        <div className="relative flex flex-shrink-0 snap-start">
          <Image
            src="/png/cupboard-image.png"
            alt="cupboard-image"
            width={268}
            height={394}
            className="w-[218px] h-[344px] object-cover rounded-2xl ml-6"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl ml-6" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] bg-white p-4 rounded-xl shadow-md backdrop-blur-sm ml-3">
            <p className="text-sm text-black font-black mb-3">
              &quot;As a busy working parent, I barely have time for household
              chores. Snabbit has been a lifesaver!&quot;
            </p>
            <div className="text-md font-medium text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex flex-shrink-0 snap-start">
          <Image
            src="/png/people-discussing.png"
            alt="people-discussing"
            width={301}
            height={513}
            className="w-[251px] h-[463px] object-cover rounded-2xl"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-xl shadow-md backdrop-blur-sm">
            <p className="text-sm text-black font-black mb-3">
              &quot;I was in a pinch and needed help cleaning before a
              last-minute guest arrived. They were at my door in 15
              minutes!&quot;
            </p>
            <div className="text-md font-medium text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative flex flex-shrink-0 snap-start">
          <Image
            src="/png/women-sunglasses.png"
            alt="women-sunglasses"
            width={279}
            height={311}
            className="w-[229px] h-[261px] object-cover rounded-2xl"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-xl shadow-md backdrop-blur-sm">
            <p className="text-sm text-black font-black mb-3">
              &quot;I love that I don&apos;t have to pre-select services. I just
              tell the professional what I need when they arrive.&quot;
            </p>
            <div className="text-md font-medium text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative flex flex-shrink-0 snap-start">
          <Image
            src="/png/women-kitchen.png"
            alt="house-image"
            width={279}
            height={464}
            className="w-[229px] h-[414px] object-cover rounded-2xl"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white p-4 rounded-xl shadow-md backdrop-blur-sm">
            <p className="text-sm text-black font-black mb-3">
              &quot;Providing seamless home solutions with modern
              efficiency and care.&quot;
            </p>
            <div className="text-md font-medium text-black">
              <span className="block">Sarah H.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
