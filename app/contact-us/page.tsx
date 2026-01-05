import { Metadata } from "next";
import { Hero } from "@/components/shared/Hero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Location | The Place Of Grace Church",
  description:
    "Get in touch with The Place Of Grace Church. Find our location, service times, and contact information.",
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact Us"
        description={
          <p className="mb-2">
            We&apos;d love to hear from you. Reach out to us with any questions
            or prayer requests.
          </p>
        }
        showBanner={false}
      />

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Whether you have a question about our services, need prayer, or
                just want to say hello, we are here for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">Leotori Halls and Lodge</p>
                  <p className="text-gray-600">
                    <a
                      href="https://maps.app.goo.gl/dpGZbhc5ffbqcYDw5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Service Times
                  </h3>
                  <p className="text-gray-600">Sunday Service: 9:00 AM</p>
                  <p className="text-gray-600">Wednesday Service: 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call Us
                  </h3>
                  <p className="text-primary">
                    <a href="tel:+2348146610439" className="hover:underline">
                      +234 814 661 0439
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-primary">
                    <a
                      href="mailto:allsaintsglobalmandatechurch@gmail.com"
                      className="hover:underline"
                    >
                      allsaintsglobalmandatechurch@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-96 rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm lg:h-full lg:p-8">
            <h2 className="font-heading mb-6 text-2xl font-bold text-gray-900">
              Find Us
            </h2>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Leotori+Halls+and+Lodge&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Church Location"
              aria-label="Church Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
