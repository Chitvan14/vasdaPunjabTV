import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";

const Contact = async () => {
  return (
    <div>
      <Breadcrumb homeElement={"NEWS "} separator={" > "} />

      <Header title={"CONTACT US"} color={"black"} />

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
            Address - Ludhiana, Punjab & Vancouver, British Colombia
            <br />
            Number -{" "}
            <a href="tel:+919041755531" className="text-black underline">
              +91 90417 55531
            </a>
            <br />
            Email -{" "}
            <a href="mailto:vp@praeco.co" className="text-black underline">
              vp@praeco.co
            </a>{" "}
            or{" "}
            <a className="text-black underline" href="mailto:gurnaaz@praeco.co">
              gurnaaz@praeco.co
            </a>
          </div>
          <div className="h-60"></div>
          {/* <div>
            At Vasda Punjab we are always looking forward to hearing from you.{" "}
            <br />
            <br />
            If you have any questions, comments, suggestions for us please send
            them to
            <br />
            <br />
            editor@abc.com <br />
            SMS us with your suggestions at 5186618. <br />
            Phone: +91-120-4343818, 3912777 <br />
            <br />
            Write us at: <br />
            Corporate Office <br />
            Skymark one, Tower-E,
            <br /> Sector 98,
            <br /> Ludhiana,
            <br /> Punjab,
            <br /> India.
            <br /> PIN 201303 Grievance Officer <br />
            Satyajit Sahoo, <br />
            Sr Counsel Legal <br />
            Contact detail: complaint@abc.com
          </div> */}
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
