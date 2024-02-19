import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="py-5 bg-gray-400 border-t-2 border-t-black">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between">
          <Logo width="100px" />
          <p className="text-sm text-gray-900">
            &copy; Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
