import React from "react";
import Image from "next/image";

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
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
const Page = ({ params }: { params: { chapter: string } }) => {
  console.log("Params ", params);
  return (
    <div className={"max-w-7xl mx-auto"}>
      {chapters
        .filter((chapter: { title: string }) => chapter.title == params.chapter)
        .map((chapter: { images: string[]; title: string; folder: string }) => (
          <div key={chapter.title}>
            {chapter.images.map((image: string) => (
              <Image
                key={image}
                src={`/overgeared/${chapter.folder}/${image}`}
                alt={image}
                width={1000}
                height={500}
                placeholder={"blur"}
                blurDataURL={rgbDataURL(2, 129, 210)}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default Page;
