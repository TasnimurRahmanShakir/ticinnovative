import { serviceMetadata } from "@/Constants/ServiceMetadata";

export async function generateMetadata({ params }) {
  const { service } = await params;
  const metadata = serviceMetadata[service];

  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
    };
  }

  return {
    title: "Pakphire",
    description: "Logistics and Fulfillment Services",
  };
}

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
