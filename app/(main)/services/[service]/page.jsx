import React from "react";
import { notFound } from "next/navigation"; // 1. Import this function

export default async function Page({ params }) {
  const { service } = await params;
  console.log(service);

  // Check your condition
  if (service === "amazon-fba-fbm") {
    return <div>hello</div>;
  }

  // 2. Call the function. This stops execution and renders the not-found page.
  return notFound();
}
