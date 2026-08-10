"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { INDUSTRIES, slugify } from "@/lib/industries";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";
import { LOCATIONS } from "@/lib/locations";
import { PUBLISHED_PHONES, telHref } from "@/lib/contact-details";
import { SvgIcon } from "./icons";

const NAV = [{ label: "Blogs", href: "/blog" }];

const ABOUT_NAV = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Choose Us", href: "/why-choose-us" },
];

const MEGA_NAV = [
  {
    label: "Industries",
    href: "/industries",
    links: INDUSTRIES.map((industry) => ({
      label: industry.name,
      href: `/industries/${slugify(industry.name)}`,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    links: SOLUTIONS.map((solution) => ({
      label: solution.title,
      href: `/solutions/${slugify(solution.title)}`,
    })),
  },
  {
    label: "Services",
    href: "/services",
    links: SERVICES.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Locations",
    href: "/locations",
    links: LOCATIONS.map((location) => ({
      label: location.name,
      href: `/locations/${location.slug}`,
    })),
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Clicking a submenu link leaves it focused after the route changes,
    // which keeps its dropdown pinned open via :focus-within.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const aboutActive =
    pathname === "/about-us" || ABOUT_NAV.some((item) => pathname === item.href);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Business Process Outsourcing home">
          <Image
            className="brand-logo"
            src="/assets/img/logo.png"
            alt="Business Process Outsourcing"
            width={188}
            height={48}
            priority
            unoptimized
          />
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={navOpen}
          aria-controls="main-nav"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav${navOpen ? " open" : ""}`} id="main-nav">
          <div className={`nav-group${aboutActive ? " active" : ""}`}>
            <Link href="/about-us" onClick={() => setNavOpen(false)}>
              About Us
            </Link>
            <span className="nav-caret" aria-hidden="true">⌄</span>
            <div className="nav-submenu">
              {ABOUT_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {MEGA_NAV.map((group) => (
            <div
              className={`nav-group${isActive(group.href) ? " active" : ""}`}
              key={group.href}
            >
              <Link href={group.href} onClick={() => setNavOpen(false)}>
                {group.label}
              </Link>
              <span className="nav-caret" aria-hidden="true">⌄</span>
              <div className="nav-submenu nav-mega">
                <div className="nav-mega-grid">
                  {group.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={isActive(item.href) ? "active" : ""}
                      onClick={() => setNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-dark mobile-nav-cta"
            onClick={() => setNavOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>

        <div className="nav-actions">
          {PUBLISHED_PHONES[0] && (
            <a
              className="header-phone"
              href={telHref(PUBLISHED_PHONES[0].display)}
            >
              <SvgIcon name="customer-support" />
              {PUBLISHED_PHONES[0].display}
            </a>
          )}
          <Link className="btn btn-outline" href="/contact">
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
