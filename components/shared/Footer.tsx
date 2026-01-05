import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <img
              src="/icons/logo-white.png"
              alt="Logo"
              className="h-auto w-32"
            />

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Making your life count. Heralding the Lordship of the Word and
              demonstrating the Influence of the Spirit.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/allsaintsmandatechurch"
                className="hover:text-primary text-gray-400 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/allsaintsglobalmandatechurch/"
                className="hover:text-primary text-gray-400 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@tpog23"
                className="hover:text-primary text-gray-400 transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-primary-foreground mb-6 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {siteConfig.menu_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-primary-foreground mb-6 text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Leotori Halls, <br />
                  Abule Egba, Lagos State.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+2348146610439"
                  className="transition-colors hover:text-white"
                >
                  +234 814 661 0439
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:allsaintsglobalmandatechurch@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  allsaintsglobalmandatechurch@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Times */}
          <div>
            <h3 className="text-primary-foreground mb-6 text-lg font-semibold">
              Service Times
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="mb-1 block font-medium text-white">
                    Sunday Service
                  </span>
                  <span>9:00 AM - 11:30 AM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="mb-1 block font-medium text-white">
                    Wednesday Service
                  </span>
                  <span>6:00 PM - 7:30 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500"></div>
        </div>
      </div>
    </footer>
  );
}
