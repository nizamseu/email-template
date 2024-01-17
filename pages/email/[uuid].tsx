import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const SingleTemplate = () => {
  const router = useRouter();
  const { uuid } = router?.query;

  const PageComponent = dynamic(
    () => import("@/clients/editor").then((lib) => lib.default) as any,
    { ssr: false }
  );
  return <PageComponent />;
};

export default SingleTemplate;
