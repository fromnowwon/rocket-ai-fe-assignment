import KeyVisualSection from "@/components/home/KeyVisualSection";
import SajuSection from "@/components/home/SajuSection";
import SceneSection from "@/components/home/SceneSection";

export default function Home() {
  return (
    <main className="max-w-md w-full mx-auto pb-20 bg-gray-light">
      <h1 className="sr-only">제 1장 나의 사주 팔자</h1>
      <KeyVisualSection />
      <SceneSection />
      <SajuSection />
    </main>
  );
}
