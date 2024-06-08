import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";

const Disclaimer = async () => {
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
            ਇਹ ਪ੍ਰੋਗਰਾਮ Vasda Punjab Tv ਦੀ ਪ੍ਰਾਪਰਟੀ ਹੈ ਇਸਦੇ Content ਨੂੰ Audio
            ਜਾਂ Video ਦੇ ਰੂਪ ਵਿੱਚ ਚੋਰੀ ਕਰਕੇ, <br />
            ਕਿਸੇ ਵੀ ਮਾਧਿਅਮ ਰਾਹੀ Copyright ਕਾਨੂੰਨ ਦੀ ਉਲੰਘਣਾ ਹੈ ਅਜਿਹਾ ਕਰਨ ਤੇ
            ਕਾਨੂੰਨੀ ਕਾਰਵਾਈ ਕੀਤੀ ਜਾਵੇਗੀ
            <br />
            <br />
            ਜੇਕਰ ਤੁਹਾਨੂੰ ਇਹ Video ਪਸੰਦ ਆਵੇ ਤਾਂ ਇਸ ਦੇ Facebook ਅਤੇ Youtube Link
            ਨੂੰ ਛੇੜਛਾੜ ਕੀਤੇ ਬਿਨਾਂ ਤੁਸੀਂ Facebook ਜਾਂ WhatsApp ਰਾਹੀਂ ਸ਼ੇਅਰ ਕਰ ਸਕਦੇ
            ਹੋ
            <br />
            <br />
            All Rights Reserved VASDA PUNJAB TV
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

export default Disclaimer;
