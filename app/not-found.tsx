import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center font-noto text-center w-full h-screen">
      <h3 className="text-base font-bold uppercase">Oops! Page not found</h3>
      <h1 style={{ lineHeight: "85%" }} className="text-10xl font-black">
        404
      </h1>
      <p className="text-lg font-light uppercase">
        We are sorry, but the page
        <br />
        you requested was not found
      </p>
      <Link
        href="/"
        className="flex py-2 px-4 border border-black rounded-xl mt-6 hover:bg-black hover:text-white transition"
      >
        Back to home
      </Link>
    </div>
  );
}
