import Image from "next/image";

export default function SceneSection() {
  return (
    <>
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
    </>
  );
}
