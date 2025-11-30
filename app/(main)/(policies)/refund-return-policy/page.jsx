import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import Link from "next/link";

const RefundReturnPolicy = () => {
  return (
    <PolicyLayout title="Refund & Return Policy" lastUpdated="30.11.2025">
      <p className="mb-6">
        This Refund & Return Policy applies to all logistics, prep, warehousing,
        and 3PL services provided by Pakphire.com (“we”, “us”, “our”). Because
        we provide service-based support (not physical retail products), the
        conditions for refunds and returns differ from standard e-commerce
        policies.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          1. Service Fees Are Generally Non-Refundable
        </h2>
        <p className="mb-4">
          Logistics and prep work require labor, time, and resources.
        </p>
        <p className="mb-4">
          For this reason, all completed services — including receiving,
          inspection, labeling, packaging, storage, and shipment coordination —
          are non-refundable once performed.
        </p>
        <p>
          If a service has already been started or completed, refunds do not
          apply.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          2. When Refunds May Be Considered
        </h2>
        <p className="mb-4">
          Refunds may be reviewed on a case-by-case basis only if:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A service was charged but not performed</li>
          <li>A clear billing error occurred</li>
          <li>A duplicated payment was made</li>
          <li>The cancellation request was submitted before work began</li>
        </ul>
        <p>
          We cannot confirm any specific refund scenarios without reviewing each
          request individually.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          3. No Refunds for Marketplace Outcomes
        </h2>
        <p className="mb-4">
          Because results on Amazon, Walmart, or other platforms depend on
          factors we do not control, we do not offer refunds for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Shipment delays caused by carriers</li>
          <li>Marketplace rejections, suppressions, or check-in delays</li>
          <li>
            Lost, damaged, or misrouted inventory by carriers or fulfillment
            centers
          </li>
          <li>Changes in marketplace rules or policies</li>
          <li>Seller account issues</li>
        </ul>
        <p>
          Any claims related to shipment damages must be filed directly with the
          carrier.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          4. Product Returns (From Amazon/Walmart)
        </h2>
        <p className="mb-4">
          If Amazon/Walmart returns items back to our warehouse:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Standard receiving and handling fees will apply</li>
          <li>
            Additional prep or forwarding services will incur separate charges
          </li>
          <li>We do not issue refunds for returned or unsellable inventory</li>
        </ul>
        <p>
          We do not offer buyback or compensation for customer-returned items.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          5. Cancellation Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You may request cancellation of a service only if work has not
            started.
          </li>
          <li>
            Once receiving, prep, or handling has begun, cancellation is not
            possible.
          </li>
          <li>
            If you prepaid for a service that has not started, cancellation may
            qualify for a refund review.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          6. Disputes & Resolution
        </h2>
        <p className="mb-4">
          If you believe a refund is justified due to an error:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Email us with order details</li>
          <li>Provide all relevant documentation</li>
          <li>
            We will review the case and respond within a reasonable timeframe
          </li>
        </ol>
        <p>Decisions are made based on available records and service logs.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          7. How to Request a Refund
        </h2>
        <p className="mb-2">
          To request a refund or billing review, contact:{" "}
          <Link
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            contact Us
          </Link>
        </p>
        <p>
          Include your order number, service date, and a brief description of
          the issue.
        </p>
      </section>
    </PolicyLayout>
  );
};

export default RefundReturnPolicy;
