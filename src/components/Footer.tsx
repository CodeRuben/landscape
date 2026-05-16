import Link from "next/link";
import { business, navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{business.legalName}</h2>
          <p>
            Excavation, grading, land clearing, drainage, and lawn preparation
            services for Natick and the MetroWest area.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            <a href={business.phoneHref}>{business.phone}</a>
            <br />
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state}
            <br />
            {business.address.zip}
          </p>
        </div>

        <div>
          <h3>Pages</h3>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {business.legalName}
      </div>
    </footer>
  );
}
