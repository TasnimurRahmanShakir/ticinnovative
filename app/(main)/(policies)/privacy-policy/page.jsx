import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="30.11.2025">
      <p className="mb-6">
        Pakphire.com (“we”, “us”, “our”) provides logistics, FBA/FBM prep, and
        3PL support services for Amazon and Walmart sellers. We are committed to
        protecting your privacy. This policy explains what information we
        collect and how we use it.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          Based on common practices in logistics and e-commerce support
          services, we may collect:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          a. Information You Provide
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business details (e.g., store name, business address)</li>
          <li>Order information you submit for service</li>
          <li>Shipment or product details required for logistics services</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          b. Automatically Collected Information
        </h3>
        <p className="mb-2">Typical analytics and system logs may include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>IP address</li>
          <li>Browser and device type</li>
          <li>Pages visited on our website</li>
          <li>Basic usage and interaction data</li>
        </ul>
        <p className="italic text-gray-600">
          (If your operations collect more specific data, you can add it.)
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">Your information is generally used to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide FBA/FBM prep and logistics services</li>
          <li>Process orders, shipments, and delivery tasks</li>
          <li>Communicate service updates, notices, and support</li>
          <li>Improve operational efficiency and website performance</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">3. Cookies</h2>
        <p className="mb-4">Cookies may be used for basic functions such as:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Remembering user preferences</li>
          <li>Analytics and performance tracking</li>
        </ul>
        <p>You can disable cookies anytime through your browser.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          4. Information Sharing
        </h2>
        <p className="mb-4">
          We only share information in the following situations:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Service Providers:</strong> Courier partners, warehouses,
            payment processors, or analytics tools assisting with service
            delivery
          </li>
          <li>
            <strong>Legal Requirements:</strong> When disclosure is required by
            law
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of merger or
            acquisition
          </li>
        </ul>
        <p>We do not sell personal information.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          5. Data Security
        </h2>
        <p className="mb-4">
          We take reasonable steps to protect your data during storage and
          transmission.
        </p>
        <p>
          As with any online system, complete security cannot be guaranteed.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
        <p className="mb-4">You may request:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access to your stored information</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data, when legally applicable</li>
          <li>Opt-out from marketing communications</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          7. Third-Party Platforms
        </h2>
        <p className="mb-4">
          Our services may interact with Amazon, Walmart, or other third-party
          platforms.
        </p>
        <p>Their privacy practices are not covered by this policy.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          8. Children’s Privacy
        </h2>
        <p>
          Our services are intended for businesses, not individuals under 13. We
          do not knowingly collect data from children.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          9. Policy Updates
        </h2>
        <p>
          This policy may be updated periodically. Changes will appear on this
          page with a revised date.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Us</h2>
        <p>
          For privacy questions or requests:{" "}
          <Link
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            contact Us
          </Link>
        </p>
      </section>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
