import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const DynamicBlur: React.FC<{ src: string }> = async ({ src }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="relative w-72 aspect-[3/4] object-cover">
      <Image
        src={src}
        alt="image"
        fill
        sizes="30vw"
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
};

export default DynamicBlur;
