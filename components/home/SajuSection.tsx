import Image from "next/image";
import SajuTable from "./SajuTable";

export default function SajuSection() {
  return (
    <section className="relative flex flex-col items-center w-full max-w-87.75 mx-auto -mt-[23px] pt-10 pb-8.25 px-4 bg-ivory border-3 border-navy-deep shadow-custom">
      <h2 className="text-center text-darkGray leading-[100%]">
        김로켓님의 사주
      </h2>
      <p className="mt-3 font-bold text-xl text-center text-darkGray leading-[100%]">
        1980년 8월27일 08:10
      </p>

      <div className="max-w-77.5 mt-6.5 w-full">
        <SajuTable />
      </div>

      <div className="absolute left-1.75 top-11.25">
        <Image
          src="/assets/images/deco2.svg"
          width={56}
          height={38}
          alt="배경 무늬"
          aria-hidden="true"
        />
      </div>

      <div className="absolute right-1.75 top-6.5">
        <Image
          src="/assets/images/deco3.svg"
          width={56}
          height={38}
          alt="배경 무늬"
          aria-hidden="true"
        />
      </div>

      <div className="absolute left-0 right-0 top-1.75 h-[1px] bg-navy"></div>
      <div className="absolute left-1.75 top-0 bottom-0 w-[1px] h-full bg-navy"></div>
      <div className="absolute right-1.75 top-0 bottom-0 w-[1px] h-full bg-navy"></div>
      <div className="absolute left-0 right-0 bottom-1.75 h-[1px] bg-navy"></div>
    </section>
  );
}
