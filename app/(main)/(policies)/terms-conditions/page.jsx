import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="30.11.2025">
      <p className="mb-6">
        Welcome to Pakphire.com (“we”, “us”, “our”). By accessing or using our
        website and services, you agree to the following Terms & Conditions.
        Please read them carefully.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          1. Use of Our Services
        </h2>
        <p className="mb-4">
          Our services are intended for Amazon/Walmart sellers and businesses
          needing logistics support, including FBA/FBM prep, warehousing,
          packaging, and delivery coordination.
        </p>
        <p>
          You agree to use our services only for lawful business purposes and in
          compliance with all applicable regulations.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          2. Account & Information Accuracy
        </h2>
        <p className="mb-4">
          To use certain services, you may need to provide accurate and complete
          information.
        </p>
        <p className="mb-2">You are responsible for:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Ensuring the information you share is correct</li>
          <li>Keeping login credentials secure (if applicable)</li>
          <li>Complying with all marketplace rules (Amazon, Walmart, etc.)</li>
        </ul>
        <p>
          We are not responsible for losses caused by inaccurate or incomplete
          information provided by you.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          3. Service Scope
        </h2>
        <p className="mb-4">Our services may include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>FBA/FBM prep</li>
          <li>Labeling, repackaging, bundling</li>
          <li>Inspection (visual only, unless otherwise agreed)</li>
          <li>Shipment coordination</li>
          <li>3PL storage and handling</li>
        </ul>
        <p className="mb-4">
          Details of each service depend on the agreement between you and us.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue services at
          any time.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">4. Payments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Payments must be made according to the pricing and billing terms
            discussed or listed on our platform.
          </li>
          <li>
            Failure to pay may result in delays, service suspension, or
            additional charges.
          </li>
          <li>All fees are non-refundable unless otherwise stated.</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          5. Shipment, Handling & Risk
        </h2>
        <p className="mb-4">
          While we follow standard industry practices, you acknowledge:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            We do not control carrier operations, delivery timelines, or damages
            caused during transport.
          </li>
          <li>
            Shipment delays or disruptions may occur due to courier, customs, or
            marketplace issues.
          </li>
          <li>
            You are responsible for ensuring your products comply with
            Amazon/Walmart requirements.
          </li>
        </ul>
        <p>
          Any insurance claims must be submitted through the respective courier
          or carrier, not Pakphire.com.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          6. Prohibited Items
        </h2>
        <p className="mb-4">
          We may refuse to handle items that are illegal, restricted, hazardous,
          or prohibited by Amazon/Walmart or by local laws.
        </p>
        <p>
          If such items are submitted, we may terminate service immediately.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">To the extent allowed by applicable law:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            We are not liable for indirect, incidental, or consequential
            damages.
          </li>
          <li>
            Our total liability for any claim is limited to the amount you paid
            for the specific service related to that claim.
          </li>
        </ul>
        <p>
          We do not guarantee marketplace performance, product approval, or
          sales outcomes.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          8. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on Pakphire.com — including text, graphics, branding, and
          design — is our property unless otherwise stated.
        </p>
        <p>You may not reproduce or distribute it without permission.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          9. Third-Party Links & Platforms
        </h2>
        <p className="mb-4">
          Our services may involve third-party platforms such as Amazon,
          Walmart, or courier companies.
        </p>
        <p className="mb-4">
          We do not control or endorse their content, policies, or services.
        </p>
        <p>Their rules and policies apply separately.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          10. Termination
        </h2>
        <p className="mb-4">
          We may suspend or terminate access to our services if you:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide false information</li>
          <li>Violate these Terms</li>
          <li>Use our services for unlawful purposes</li>
        </ul>
        <p>You may also stop using our services at any time.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          11. Changes to These Terms
        </h2>
        <p className="mb-4">
          We may update these Terms & Conditions from time to time.
        </p>
        <p>Changes will be posted on this page with the updated date.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Us</h2>
        <p>
          For any questions about these Terms:{" "}
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

export default TermsConditions;
