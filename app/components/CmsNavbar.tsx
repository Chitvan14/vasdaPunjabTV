import Link from "next/link";
import Image from "next/legacy/image";


const CmsNavbar = () => {
  // return (
  //   <div className="flex justify-between items-center py-1 px-5">
  //     <Link href="/">
  //       <BackArrowIcon />
  //     </Link>

  //     <div className={`${recursive.className} text-3xl dark:text-white-50`}>
  //       Dev
  //       <span className="text-purple-500">Blook</span>
  //     </div>
  //   </div>
  // );
  return (
        <Link href={"/"} className="flex items-center justify-center absolute z-[101] left-1 top-2">
          <Image
            src={"/images/vasda-punjab-logo.png"}
            alt={"vasda-punjab-logo"}
            width={80}
            height={0}
            className="bg-white rounded-sm"
          />
        </Link>
     
  );
};

export default CmsNavbar;
