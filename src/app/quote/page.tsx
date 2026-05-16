import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free estimate from K.H. White Bobcat Services for excavation, grading, drainage, land clearing, or lawn preparation work in MetroWest MA.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return (
    <section className="page-section quote-page">
      <div className="container split">
        <div>
          <p className="eyebrow">Request a Quote</p>
          <h1 className="page-title">
            Contact us today for a free estimate
          </h1>
          <p className="lede">
            Get a free estimate for your bobcat loader excavation work by dialing
            our business line or sending us a message here, and we will contact
            you.
          </p>
          <div className="quote-callout">
            <span>Fastest response</span>
            <strong>{business.phone}</strong>
            <p>
              Share the town, access conditions, and a short description of the
              work needed.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
