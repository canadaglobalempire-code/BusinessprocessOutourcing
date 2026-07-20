import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <span className="decor decor-left">
            <SvgIcon name="chat" />
          </span>
          <span className="decor decor-right">
            <SvgIcon name="growth" />
          </span>
          <h2>Together we can do more. Feel free to say hello.</h2>
          <p>Let&apos;s build the right process for your business.</p>
          <Link className="btn btn-dark btn-large" href="/contact">
            Contact us
            <SvgIcon name="arrow-right" />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Business Process Outsourcing home">
              <Image
                className="brand-logo"
                src="/assets/img/logo.png"
                alt="Business Process Outsourcing"
                width={196}
                height={50}
                unoptimized
              />
            </Link>
            <p>
              Since 2000, we have made outsourcing easier, more economical, and
              less stressful for growing companies.
            </p>
          </div>
          <div>
            <h3>About Us</h3>
            <Link href="/about-us">About Us</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/why-choose-us">Why Choose Us</Link>
          </div>
          <div>
            <h3>Services</h3>
            <Link href="/services">All Services</Link>
            <Link href="/services/customer-support">Customer Support</Link>
            <Link href="/services/technical-support">IT &amp; Technical Support</Link>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/industries">Industries</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/blog">Blogs</Link>
          </div>
          <div>
            <h3>Support</h3>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Business Process Outsourcing. All Rights Reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
