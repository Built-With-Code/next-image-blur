import Image from "next/image";
import ExampleImage from "../../public/image.jpg";
import DynamicBlur from "@/components/DynamicBlur";

export default function Home() {
  const remoteUrl =
    "https://images.unsplash.com/photo-1526404423292-15db8c2334e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA";

  return (
    <main className="p-20 flex justify-center gap-16">
      {/* <img> Static image */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Static image (img)</h1>
        <img
          className="w-72 aspect-[3/4] object-cover"
          src={ExampleImage.src}
          alt="image"
        />
        <p>The windy roads of San Francisco.</p>
      </div>
      {/* next/image Static image */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Static image (next/image)</h1>
        <div className="relative w-72 aspect-[3/4] object-cover">
          <Image
            src={ExampleImage}
            alt="image"
            fill
            placeholder="blur"
            sizes="30vw"
          />
        </div>
        <p>The windy roads of San Francisco.</p>
      </div>
      {/* next/image Dynamic image */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Dynamic image (next/image)</h1>
        <DynamicBlur src={remoteUrl} />
        <p>The windy roads of San Francisco.</p>
      </div>
    </main>
  );
}
