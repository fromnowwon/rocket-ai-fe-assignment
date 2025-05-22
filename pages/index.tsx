import { useEffect, useState } from "react";
import Head from "next/head";
import KeyVisualSection from "@/components/home/KeyVisualSection";
import SajuSection from "@/components/home/SajuSection";
import SceneSection from "@/components/home/SceneSection";
import { useSajuStore } from "@/store/useSajuStore";
import { fetchSaju } from "@/lib/fetchSaju";
import Spinner from "@/components/common/Spinner";

export default function Home() {
  const setData = useSajuStore((state) => state.setData);
  const setUserName = useSajuStore((state) => state.setUserName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaju()
      .then(({ userName, data }) => {
        setUserName(userName);
        setData(data);
      })
      .finally(() => setLoading(false));
  }, [setData, setUserName]);

  if (loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>운세박사</title>
        <meta name="description" content="[운세박사] 제 1장 나의 사주 팔자" />
        <meta property="og:title" content="[운세박사] 제 1장 나의 사주 팔자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-md w-full mx-auto pb-20 bg-gray-light">
        <h1 className="sr-only">제 1장 나의 사주 팔자</h1>
        <KeyVisualSection />
        <SceneSection />
        <SajuSection />
      </main>
    </>
  );
}
