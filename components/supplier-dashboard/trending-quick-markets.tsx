"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "Bag of rice",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830274/mamagold_wmgwo2.png",
  },
  {
    name: "Spaghetti",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830338/spag_bybr4z.png",
  },
  {
    name: "Peak Milk",
    image: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737830291/peak_mi9k6j.png",
  },
];

export function TrendingQuickMarkets() {
  return (
    <Card className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-[#FF6B00] mb-6">
        Trending products in Quick-markets
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.name} className="text-center">
            <div className="bg-gray-100 rounded-lg mb-2 aspect-square relative">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-lg object-contain p-2"
                priority
              />
            </div>
            <span className="text-sm font-medium">{product.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
