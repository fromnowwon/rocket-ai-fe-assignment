import Image from "next/image";
import SajuTable from "@/components/saju/SajuTable";

export default function Home() {
  return (
    <main className="max-w-md w-full mx-auto pb-20 bg-gray-light">
      <h1 className="sr-only">제 1장 나의 사주 팔자</h1>

      <section className="relative w-full pb-28.5">
        <div className="relative w-full aspect-[375/652]">
          <Image
            src="/assets/images/key_visual.jpg"
            fill
            priority
            alt="제 1장 나의 사주 팔자 메인 이미지"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F3F2EF] pointer-events-none" />
        </div>

        <div className="absolute bottom-0">
          <Image
            src="/assets/images/bubble1.png"
            width={257}
            height={181}
            alt="말풍선"
            aria-hidden="true"
          />
          <div className="absolute bottom-11 left-1/2 -translate-x-1/2 flex items-center justify-center w-33.5">
            <p className="text-center leading-[1.5] tracking-[-0.025em]">
              이제 본격적으로
              <br />
              OO님의 사주팔자를
              <br />
              분석해볼 차례네요.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-71.25 pb-10">
        <div className="absolute right-6 bottom-10">
          <Image
            src="/assets/images/scene1.png"
            width={161}
            height={285}
            alt="제 1장 나의 사주 팔자 장면 1"
          />
        </div>
        <div className="absolute left-0 bottom-19.5">
          <Image
            src="/assets/images/deco1.svg"
            width={153}
            height={120}
            alt="icon"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="relative">
        <div className="absolute top-[-125px] left-1 z-19">
          <Image
            src="/assets/images/bubble2.png"
            width={281}
            height={181}
            alt="말풍선"
            aria-hidden="true"
          />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-42.75">
            <p className="text-center leading-[1.5] tracking-[-0.025em]">
              제가 oo님의 사주를
              <br />
              보기 쉽게 표로 정리했어요
            </p>
          </div>
        </div>
        <div className="relative aspect-[375/306]">
          <Image
            src="/assets/images/scene2.jpg"
            alt="제 1장 나의 사주 팔자 장면 2"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F3F2EF] pointer-events-none" />
        </div>
      </section>

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
    </main>
  );
}
