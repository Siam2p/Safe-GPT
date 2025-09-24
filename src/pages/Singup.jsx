import React from "react";
import { Link } from "react-router-dom";

function SingUp({ type }) {
  return (
    <section className="flex flex-col items-center bg-bg">
      <div className="flex flex-col items-center py-5">
        <h1 className="text-3xl font-bold md:text-4xl text-primary">
          অ্যাকাউন্টের ধরন নির্বাচন করুন
        </h1>
        <div className="mt-5">
          <Link
            to="/SingUp"
            className={`${
              type === "parent"
                ? "bg-primary-hover cursor-not-allowed pointer-events-none"
                : "bg-primary"
            } px-4 py-2 text-white rounded hover:bg-primary-hover transition m-2`}
          >
            প্যারেন্ট অ্যাকাউন্ট
          </Link>
          <Link
            to="/child"
            className={`${
              type === "child"
                ? "bg-primary-hover cursor-not-allowed pointer-events-none"
                : "bg-primary"
            } px-4 py-2 text-white rounded hover:bg-primary-hover transition m-2`}
          >
            শিশুর অ্যাকাউন্ট
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SingUp;
