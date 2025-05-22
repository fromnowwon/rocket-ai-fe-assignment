import Image from "next/image";
import SajuTable from "@/components/saju/SajuTable";

export default function Home() {
  return (
    <main className="max-w-md w-full mx-auto pb-20 bg-gray-light">
      <section className="w-full pt-21">
        <div className="flex flex-col items-center gap-3">
          <p className="text-white leading-[100%] tracking-[-0.005em]">
            제 1장
          </p>
          <Image
            src="/assets/images/line.svg"
            width={157}
            height={20}
            alt="line"
            aria-hidden="true"
          />
          <h1 className="text-white leading-[100%] tracking-[-0.005em]">
            나의 사주 팔자
          </h1>
        </div>
      </section>

      <section>
        <div className="relative w-full aspect-[375/306]">
          <Image
            src="/assets/images/scene2.jpg"
            alt="scene"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F3F2EF] pointer-events-none" />
        </div>
      </section>

      <section className="relative flex flex-col items-center w-full max-w-87.75 mx-auto -mt-[23px] pt-10 pb-8.25 bg-ivory border-3 border-navy-deep shadow-custom">
        <h2 className="text-center text-darkGray leading-[100%]">
          김로켓님의 사주
        </h2>
        <p className="mt-3 font-bold text-xl text-center text-darkGray leading-[100%]">
          1980년 8월27일 08:10
        </p>

        <div className="max-w-77.5 mt-6.5">
          <SajuTable />
        </div>

        <div className="absolute left-0 right-0 top-2 h-[1px] bg-navy"></div>
        <div className="absolute left-2 top-0 bottom-0 w-[1px] h-full bg-navy"></div>
        <div className="absolute right-2 top-0 bottom-0 w-[1px] h-full bg-navy"></div>
        <div className="absolute left-0 right-0 bottom-2 h-[1px] bg-navy"></div>
      </section>
    </main>
  );
}
