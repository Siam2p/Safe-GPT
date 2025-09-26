import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import EmailNumber from "../../../components/EmailNumber";
import PasswordInput from "../../../components/PasswordInput";
import SingUp from "../../Singup";
import { Link } from "react-router-dom";
import { useState } from "react";

function ParentResetPassword() {
  const [reset, setReset] = useState({
    phone: true,
    otp: false,
    password: false,
  });

  const [info, setInfo] = useState({
    key: "",
    value: "",
  });

  const onInfoChick = () => {
    setReset((prev) => ({
      ...prev,
      phone: !prev.phone,
      otp: !prev.otp,
    }));
  };

  const checker = (type, array) => {
    const values = array[type];

    switch (type) {
      case "email":
      case "number":
        setReset((prev) => ({
          ...prev,
          phone: !prev.phone,
          otp: !prev.otp,
        }));
        setInfo((prev) => ({ ...prev, value: values, key: type }));
        break;

      case "otp":
        setReset((prev) => ({
          ...prev,
          otp: !prev.otp,
          password: !prev.password,
        }));
        break;

      case "password":
        setReset((prev) => ({
          ...prev,
          password: !prev.password,
        }));
        break;

      default:
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = Object.fromEntries(formData.entries());
    // console.log(loginData[Object.keys(loginData).pop()]);
    checker(...Object.keys(loginData), loginData);
  };

  return (
    <section className="flex flex-col items-center pb-10 bg-bg">
      <SingUp type={"parent"} />
      <div className="flex flex-col items-center m-5 max-w-100 sm:max-w-125">
        <div className="">
          <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mt-5 mx-auto">
            <IoKeyOutline className="text-6xl text-primary mx-auto" size={40} />
          </div>
          <div className="flex flex-col items-center mt-3">
            <h1 className="font-bold text-2xl text-center">
              প্যারেন্ট প্রোফাইল পাসওয়ার্ড রিসেট করুন
            </h1>
            <p>আপনার অ্যাকাউন্ট পুনরুদ্ধারের জন্য তথ্য দিন</p>
          </div>

          <div className="w-full p-5 bg-white shadow-lg rounded-lg mt-5">
            <div className="flex justify-start space-x-2 w-full">
              <MdOutlineMarkEmailRead className="text-primary mt-1" size={20} />
              <h2 className="font-bold">অ্যাকাউন্ট যাচাই</h2>
            </div>
            <div className="pb-3">
              <p className="text-sm text-gray-600 mt-2">
                পাসওয়ার্ড রিসেট করার জন্য আপনার নিবন্ধিত ফোন-নম্বর অথবা ইমেইল
                দিন
              </p>
            </div>
            <form
              onSubmit={resetForm}
              className="flex flex-col space-y-4 pb-5 border-b border-gray-500"
            >
              {/* phone */}

              {reset.phone && (
                <>
                  <EmailNumber />
                  <button
                    type="submit"
                    className="w-full text-white rounded-md bg-primary hover:bg-primary-hover py-1.5 cursor-pointer"
                  >
                    রিসেট কোড পাঠান
                  </button>{" "}
                </>
              )}

              {reset.otp && (
                <>
                  <p className="text-gray-500 text-center">
                    আমরা আপনার{" "}
                    <button
                      type="button"
                      onClick={onInfoChick}
                      className="text-primary-hover cursor-pointer underline"
                    >
                      {info.value}
                    </button>{" "}
                    এই {info.key === "email" ? "ইমেইলে" : "ফোন-নম্বরে"} একটি ৬
                    সংখ্যার কোড পাঠানো হয়ছে
                  </p>
                  <label htmlFor="otp">
                    OTP কোড (৬ সংখ্যার)*
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      maxLength={6}
                      pattern="\d*"
                      inputMode="numeric"
                      placeholder="Enter 6-digit OTP"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full text-white rounded-md bg-primary hover:bg-primary-hover py-1.5 cursor-pointer"
                  >
                    কোড যাচাই করুন
                  </button>
                </>
              )}

              {/* password  */}
              {reset.password && (
                <>
                  <label htmlFor="password">
                    নতুন পাসওয়ার্ড সেট করুন*
                    <PasswordInput />
                  </label>

                  <button
                    type="submit"
                    className="w-full text-white rounded-md bg-primary hover:bg-primary-hover py-1.5 cursor-pointer"
                  >
                    পাসওয়ার্ড পরিবর্তন করুন
                  </button>
                </>
              )}

              {!reset.phone && !reset.otp && !reset.password && (
                <p className="bg-blue-100 text-gray-500 text-center py-3 rounded-md">
                  আপনার পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে। এখন আপনি নতুন
                  পাসওয়ার্ড দিয়ে লগইন করতে পারবেন।
                  <Link
                    to="/parent/login"
                    className="text-primary-hover cursor-pointer underline"
                  >
                    লগইন করুন
                  </Link>
                </p>
              )}
            </form>

            <div className="flex justify-center space-x-2 mt-3">
              <Link
                to="/parent/login"
                className="text-primary-hover cursor-pointer underline"
              >
                লগইন করতে ফিরে যান
              </Link>
              <Link
                to="/parent"
                className="text-primary-hover cursor-pointer underline"
              >
                সাইনআপ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParentResetPassword;
