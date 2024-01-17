import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className=" h-screen bg-gray-500">
      <div className=" grid grid-cols-3 gap-4 mx-4 py-5">
        <Link
          href={`/email/${1}`}
          className=" w-full h-40 border rounded bg-white text-gray-900"
        >
          Template one{" "}
        </Link>
        <Link
          href={`/email/${2}`}
          className=" w-full h-40 border rounded bg-white text-gray-900"
        >
          Template two{" "}
        </Link>
        <Link
          href={`/email/${3}`}
          className=" w-full h-40 border rounded bg-white text-gray-900"
        >
          Template three{" "}
        </Link>
      </div>
    </div>
  );
};

export default index;
