"use client";
import { useState } from "react";
import { searchImages } from "@/components/lib/pexels";

import React from "react";
import Image from "next/image";

const ImaSearch = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!query) return;
    const result = await searchImages(query);
    setImages(result);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
   <div className="mt-10 mb-20">
     <h1>You can search any kind of picture in our search section.</h1>
 <div className="sticky top-19 z-40 bg-white p-20 flex flex-col sm:flex-row gap-2 px-4 sm:px-0 py-2">

  <input
    onChange={handleChange}
    value={query}
    placeholder="Search Image"
    className="border px-2 py-1 rounded w-full sm:w-auto flex-1"
  />
  <button
    className="px-3 py-1 bg-black text-white rounded w-full sm:w-auto hover:bg-gray-400 hover:text-black hover:font-semibold"
    onClick={handleSearch}
  >
    Search
  </button>
</div>

  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-4 px-4 sm:px-0">
  {images.map((img) => (
    <div key={img.id} className="mb-4 break-inside-avoid">
      <Image
        src={img.src.medium}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="w-full h-auto rounded"
      />
      <p className="text-sm text-gray-600 mt-1 font-bold">Photo by :{img.photographer}</p>
    </div>
  ))}
</div>
</div>
  );
};

export default ImaSearch;
