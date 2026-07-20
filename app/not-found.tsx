import Link from "next/link";
import { MiniMark } from "@/components/mini-mark";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow center">
        <p className="eyebrow">
          <MiniMark /> 404
        </p>
        <h1>That page is not here.</h1>
        <p>Return to the homepage or explore our services.</p>
        <Link className="btn btn-dark btn-large" href="/">
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
