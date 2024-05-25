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
            Welcome to Vasda Punjab—your trusted source for honest journalism
            focusing on all things Punjab. Whether you{"'"}re in Punjab or abroad,
            our mission is to keep you informed and engaged. We provide
            comprehensive updates on the political landscape, crime reports,
            social insights, and the latest entertainment buzz. Our highly
            dedicated team ensures that you receive quality content every day.
            <br />
            <br />
            As the fastest-growing IPTV channel in the industry, we operate out
            of Canada and beyond to bring timely on-the-ground reports to our
            international viewers. Our programming includes talk shows, debates,
            and exclusive interviews with prominent personalities from Punjab
            and throughout the Indian diaspora in Canada.
            <br />
            <br />
            Join us on our journey to keep you connected and informed. Tune in
            for your daily dose of essential news and insightful discussion,
            crafted with integrity and a commitment to excellence.
          </div>
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

export default AboutUs;
