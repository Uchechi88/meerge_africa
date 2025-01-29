"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "Yam",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830348/yam_h3n7wi.png",
  },
  {
    name: "Flour",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830198/flour_iqjx0l.png",
  },
  {
    name: "Semovita",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830628/golden-penny-semovita_dkuat1.jpg",
  },
  {
    name: "Groundnut Oil",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830282/oil_pyfoua.png",
  },
];

export function MyTopSelling() {
  return (
    <Card className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-[#FF6B00] mb-6">My Top-selling products</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.name} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image 
                src={product.image}
                alt={product.name}
                width={40}
                height={40}
                className="rounded object-contain"
              />
            </div>
            <span className="text-lg">{product.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
