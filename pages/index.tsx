import SajuTable from "@/components/saju/SajuTable";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-md w-full mx-auto px-3 pb-20 bg-gray-light">
      <section className="relative flex flex-col items-center w-full max-w-87.75 pt-10 pb-8.25 bg-ivory border-3 border-navy-deep shadow-custom">
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
