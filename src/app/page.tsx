import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
// import _chapters from '../../data/chapters.json'

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  // const chapters: { chapter: [] } = _chapters
  const chapters = [
    {
      title: "chapter101",
      folder: "ch101",
      images: [
        "ch101-01.jpg",
        "ch101-02.jpg",
        "ch101-03.jpg",
        "ch101-04.jpg",
        "ch101-05.jpg",
        "ch101-06.jpg",
        "ch101-07.jpg",
        "ch101-08.jpg",
        "ch101-09.jpg",
        "ch101-10.jpg",
        "ch101-11.jpg",
        "ch101-12.jpg",
        "ch101-13.jpg",
        "ch101-14.jpg",
      ],
    },
    {
      title: "chapter102",
      folder: "ch102",
      images: [
        "ch102-01.jpg",
        "ch102-02.jpg",
        "ch102-03.jpg",
        "ch102-04.jpg",
        "ch102-05.jpg",
        "ch102-06.jpg",
        "ch102-07.jpg",
        "ch102-08.jpg",
        "ch102-09.jpg",
        "ch102-10.jpg",
        "ch102-11.jpg",
        "ch102-12.jpg",
        "ch102-13.jpg",
        "ch102-14.jpg",
      ],
    },
  ];

  console.log("Chapters ", chapters);
  // @ts-ignore
  return (
    <main className={"max-w-7xl  mx-auto"}>
      <div className={"my-8"}>
        <h1 className={`text-center text-4xl ${inter.className} leading-6 `}>
          Overgeared
        </h1>
        <div className={"mt-10 "}>
          {chapters.map(
            (chapter: { folder: string; images: string[]; title: string }) => (
              <div
                className={`hover:underline group hover:bg-black bg-slate-800 cursor-pointer flex  m-4 p-4 ${inter.className}`}
                key={chapter.title}
              >
                <Image
                  src={`/overgeared/${chapter.folder}/${chapter.images[0]}`}
                  className={"w-[200px] h-[100px] object-cover object-center "}
                  alt={chapter.title}
                  width={200}
                  height={100}
                />
                <div className={"mx-5 text-white"}>
                  <Link href={`/chapter/${chapter.title}`}>
                    {chapter.title.toUpperCase()}
                  </Link>
                </div>
              </div>
            )
          )}
          {/*{chapters.map((chapter: {title: string, images: []}, index: { index: number }) => (*/}
          {/*  <div key={index}>{}</div>*/}
          {/*))}*/}
        </div>
      </div>
    </main>
  );
}
