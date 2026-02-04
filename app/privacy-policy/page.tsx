import { NavBara } from "@/components/ui/navbar-view";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Healvora AI collects, uses, and protects your data.",
};

export default function Page() {
  const fullyear = new Date().getFullYear();
  return (
    <div className="flex flex-col  min-h-screen bg-white">
      <NavBara />
      <div className="w-full max-w-4xl   mx-auto  text-neutral-900 text-[16px]  font-sans font-medium">
        <div className="w-full    ">
          <div className="w-full flex flex-col justify-center items-center  p-4">
            <h1 className="text-xl sm:text-4xl  text-center font-sans  ">
              Privay Policy
            </h1>
            <p className="font-medium italic text-sm  text-center mt-1  font-sans text-neutral-800">
              Last updated:Feabruary {fullyear}
            </p>
          </div>
          <section className="space-y-8  font-medium font-sans text-[16px] leading-relaxed">
            <div>
              <h2 className="text-xl  font-semibold mb-2">1. Introduction</h2>
              <p>
                Welcome to our Privacy Policy. Your privacy is important to us.
                This document explains how we collect, use, and protect your
                information when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information such as name and email address</li>
                <li>Usage data including pages visited and interactions</li>
                <li>Technical data like browser type and device information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl  font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Communicate important updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl  font-semibold mb-2">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your data.
                However, no method of transmission over the internet is 100%
                secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl  font-semibold mb-2">
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party services that collect information to help
                us operate our platform. These services have their own privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold  mb-2">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                data. If you have questions, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold  mb-2">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
