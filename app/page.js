import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-white flex max-md:flex max-md:flex-col max-md:h-[50em] w-screen h-100">
      <div className="w-[80%] max-md:h-[50%] max-md:w-full flex flex-col max-md: justify-center items-center gap-4 ">
        <h1 className="!text-3xl text-center text-shadow-[0px_25px_50px_#FF4C4C33]">The best <strong><Link href="/">URL-Shortener</Link></strong> in the Market</h1>
        <p className="!text-lg w-5/6 text-center">We are the most straightfoward URL Shortener in the world. Most of the un shortariers will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</p>
      </div>
      <div className="w-[20%] max-md:h-[50%] max-md:w-full flex justify-start max-md:justify-center max-md:items-center items-end">
        <div className="relative  h-80 w-80  rounded-full overflow-hidden max-md:shadow-[0px_0px_450px_#FF4C4C33] shadow-[0px_25px_50px_#FF4C4C33]">
        <Image className="max-md:hidden" src="/me.png" alt="me" fill={true} />
        </div>
      </div>
  </div>
  );
}
