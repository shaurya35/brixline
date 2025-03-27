import Image from "next/image"

export default function ServiceBack(){
    return(
        <div className="pt-8 md:pt-10 overflow-x-auto snap-x snap-mandatory">
            <div className="flex flex-nowrap z-50">
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/png/planning.png"
                  alt="planning"
                  width={384}
                  height={406}
                  className="hidden md:block md:w-[384px] md:h-[406px]"
                />
                <Image
                  src="/png/planning-mobile.png"
                  alt="planning"
                  width={230}
                  height={320}
                  className="block md:hidden w-[230px] h-[320px]"
                />
              </div>
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/png/construction.png"
                  alt="Construction"
                  width={384}
                  height={406}
                  className="hidden md:block md:w-[384px] md:h-[406px]"
                />
                <Image
                  src="/png/construction-mobile.png"
                  alt="construction"
                  width={230}
                  height={320}
                  className="block md:hidden w-[230px] h-[320px]"
                />
              </div>
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/png/houses.png"
                  alt="houses"
                  width={384}
                  height={406}
                  className="hidden md:block md:w-[384px] md:h-[406px]"
                />
                <Image
                  src="/png/houses-mobile.png"
                  alt="houses"
                  width={230}
                  height={320}
                  className="block md:hidden w-[230px] h-[320px]"
                />
              </div>
            </div>
          </div>
    )
}