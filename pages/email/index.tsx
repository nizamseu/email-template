import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios
        .get("https://daadaak.hamim.dev/api/default_email_template/")
        .then((res) => {
          setData(res?.data?.results);
        });
    };

    loadData();
  }, []);

  console.log(data);

  return (
    <div className="h-screen bg-gray-500">
      <div className=" px-10 py-5 mx-10">
        <p className=" text-lg text-white">Template name</p>
        {data?.map((item: any, index: number) => (
          <Link
            href={`/email/${item?.uuid}`}
            key={index}
            className="w-full  text-white"
          >
            <p className=" my-2"> {item.subject}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
