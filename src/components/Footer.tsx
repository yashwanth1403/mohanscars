import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold tracking-tight">Siri Auto Cars</h2>
            <p className="mt-2 text-sm opacity-75">
              Hyderabad, Telangana
              <br />
              Quality pre-owned cars you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Browse Cars", to: "/cars" },
                { label: "Sell Your Car", to: "/sell-car" },
                { label: "About Us", to: "/about" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="opacity-75 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">
              Contact
            </h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>📞 +91 90000 00000</li>
              <li>📧 info@siriauto.in</li>
              <li>📍 Hyderabad, Telangana</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-50">
          © {year} Siri Auto Cars. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
