import Image from "next/image";

export default function KeyVisualSection() {
  return (
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
  );
}
