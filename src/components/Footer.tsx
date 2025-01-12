import React from "react";
import FooterContactForm from "./FooterContactForm";

export default function Footer() {
  return (
    <footer className=" w-full bg-black m-2 mt-12">
      <section className="flex flex-col md:flex-row">
        <FooterContactForm />
      </section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <p className="font-bold">
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;
              Nextjs and Sanity.
            </span>
          </p>
          </div>
      
        <div>
          <p className="text-xs font-semibold text-light">
            © 2024 <span className="text-light font-bold">&nbsp;NextGen</span>
            <span className="text-accentDarkPrimary font-bold">
              Bytes&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>



      </section>

    </footer>
  );
}