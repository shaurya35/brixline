import Image from "next/image";

export default function ProcedureBack() {
  return (
    <div>
      <div>
        <Image
          src="/png/worker-image.png"
          alt="worker-image"
          width={284}
          height={291}
          className="w-[284px] h-[291px]"
        />
      </div>

      <div>
        <Image
          src="/png/construction-worker-image.png"
          alt="construction-worker-image"
          width={284}
          height={291}
          className="w-[284px] h-[291px]"
        />
      </div>

      <div>
        <Image
          src="/png/planning-image.png"
          alt="planning-image"
          width={284}
          height={291}
          className="w-[284px] h-[291px]"
        />
      </div>

      <div>
        <Image
          src="/png/cameras-image.png"
          alt="cameras-image"
          width={284}
          height={291}
          className="w-[284px] h-[291px]"
        />
      </div>

      <div>
        <Image
          src="/png/home-image.png"
          alt="home-image"
          width={284}
          height={291}
          className="w-[284px] h-[291px]"
        />
      </div>
    </div>
  );
}
