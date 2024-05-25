import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";

const AboutUs = async () => {
  return (
    <div>
      <Breadcrumb homeElement={"NEWS "} separator={" > "} />

      <Header title={"About Us"} color={"black"} />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3  h-auto">
          <div className="md:w-[20%] w-[50%] mb-4">
            <Image
              width={0}
              height={0}
              src={"/images/vasda-punjab-logo-English.webp"}
              alt={"vasdapunjab-logo"}
              layout="responsive"
            />
          </div>
          <div>
            At Vasda Punjab, we are committed to protecting the privacy and
            security of our users personal information. This Privacy Policy
            outlines how we collect, use, share, and protect the information you
            provide to us when you use our news channel and website.
            <br />
            <br />
            1. Information We Collect
            <br />
            We collect both personal and non-personal information from users in
            various ways, including when you visit our website, subscribe to our
            newsletter, participate in surveys, or interact with our content.
            The types of information we may collect include:
            <br />
            Personal Information: Such as your name, email address, phone
            number, and any other information you provide voluntarily.
            Non-Personal Information: Such as your IP address, browser type,
            device information, and browsing behavior on our website.
            <br />
            <br />
            2. How We Use Your Information
            <br />
            We may use the information we collect for the following purposes:
            <br />
            To provide and personalize our services, including delivering news
            content and updates. To communicate with you, including responding
            to your inquiries and sending you marketing communications. To
            analyze and improve the quality of our content, services, and user
            experience. To comply with legal obligations and enforce our Terms
            of Service.
            <br />
            <br />
            3. Sharing of Information
            <br />
            We may share your information with third parties for the following
            purposes:
            <br />
            With service providers: To help us operate our business and deliver
            our services, including hosting our website, processing payments,
            and analyzing data. With advertising partners: To serve
            advertisements that may be of interest to you based on your browsing
            behavior. With legal authorities: If required by law or to protect
            our rights, property, or safety, we may disclose your information to
            law enforcement agencies or other governmental authorities.
            <br />
            <br />
            4. Data Security
            <br />
            We take reasonable measures to protect the security of your
            information and prevent unauthorized access, disclosure, alteration,
            or destruction. However, no method of transmission over the internet
            or electronic storage is completely secure, so we cannot guarantee
            absolute security.
            <br />
            <br />
            5. Your Choices and Rights
            <br />
            You have the right to access, update, or delete your personal
            information. You can also opt out of receiving marketing
            communications from us by following the instructions provided in the
            communication or by contacting us directly.
            <br />
            <br />
            6. Updates to this Privacy Policy
            <br />
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            or by other means as required by law.
            <br />
            <br />
            7. Contact Us
            <br />
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <a href="mailto:vp@praeco.co" className="text-black underline">
              vp@praeco.co
            </a>{" "}
            or{" "}
            <a className="text-black underline" href="mailto:gurnaaz@praeco.co">
              gurnaaz@praeco.co
            </a>
            
            <br />
            <br />
            By using Vasda Punjab news channel and website, you consent to the
            collection, use, and sharing of your information as described in
            this Privacy Policy.
          </div>
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
