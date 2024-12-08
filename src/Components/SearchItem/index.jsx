import React from "react";
import Image from "../Image";
import { Link } from "react-router-dom";

export default function SearchItem({
  image = "",
  title = "",
  price,
  productId,
}) {
  return (
    <Link
      to={productId && `/product/${productId}`}
      className="flex p-2 rounded-md hover:bg-[#f6f8ff] cursor-pointer h-[60px] gap-3 decoration-current"
    >
      <div className="flex h-10 w-10">
        <Image
          className="object-cover rounded-md"
          src={image}
          alt={title || ""}
        />
      </div>

      <div className="flex flex-col flex-1 font-semibold  whitespace-nowrap overflow-hidden">
        <div className="text-ellipsis whitespace-nowrap overflow-hidden decoration-current">
          {title}
        </div>
        <span> {price.toLocaleString("vi-VN", { currency: "VND" })}₫</span>
      </div>
    </Link>
  );
}
