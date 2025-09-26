import SingUp from "../../Singup";
import { FiUserCheck } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import PasswordInput from "../../../components/PasswordInput";
import EmailNumber from "../../../components/EmailNumber";
import { Link } from "react-router-dom";
import { useState } from "react";

function ChildSingup() {
  const [form, setForm] = useState(true)

  function singup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const singupData = {
      ...data,
      ...(data.email ? { number: "" } : { email: "" }),
    };
    setForm(prev => !prev)
    console.log(singupData);
  }

  return (
    <section className="flex flex-col items-center pb-10 bg-bg">
      <SingUp type={"child"} />
      <div className="flex flex-col items-center m-5 max-w-100 sm:max-w-125">
        
        {form ? (<div className="">
          <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mt-5 mx-auto">
            <FiUserCheck className="text-6xl text-primary mx-auto" size={40} />
          </div>
          <div className="flex flex-col items-center mt-3">
            <h1 className="font-bold text-2xl">শিশু প্রোফাইল সেটআপ</h1>
            <p>নিরাপত্তার জন্য আপনার তথ্য যাচাই করুন</p>
          </div>

          <div className="w-full p-5 bg-white shadow-lg rounded-lg mt-5">
            <div className="flex justify-start space-x-2 w-full">
              <LuShield className="text-primary mt-1" size={20} />
              <h2 className="font-bold">প্রোফাইল তথ্য</h2>
            </div>
            <div className="pb-3">
              <p className="text-sm text-gray-600 mt-2">
                আপনার সঠিক তথ্য প্রদান করুন যাতে আমরা আপনার পরিচয় যাচাই করতে
                পারি
              </p>
            </div>
            <form
              onSubmit={singup}
              className="flex flex-col space-y-4 pb-5 border-b border-gray-500"
            >
              <label htmlFor="name">
                পূর্ণ নাম*
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  required
                />
              </label>

              {/* phone */}
              <EmailNumber />

              <label htmlFor="password">
                পাসওয়ার্ড*
                {/* password  */}
                <PasswordInput />
              </label>

              <label htmlFor="reference">
                প্যারেন্ট রেফারেল কোড (৬ সংখ্যার)*
                <input
                  type="text"
                  name="referenceCode"
                  id="reference"
                  placeholder="প্যারেন্ট রেফারেল কোড"
                  required
                  maxLength={6}
                  pattern="\d{0,6}"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "৬ সংখ্যার প্যারেন্ট রেফারেল কোড লিখুন"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="border p-2 rounded"
                />
              </label>

              <button
                type="submit"
                className="w-full text-white rounded-md bg-primary hover:bg-primary-hover py-1.5 cursor-pointer"
              >
                প্রোফাইল তৈরি করুন
              </button>
            </form>

            <div className="flex justify-center space-x-2 mt-3">
              <Link
                to="/child/login"
                className="text-primary-hover cursor-pointer underline"
              >
                লগইন
              </Link>
            </div>
          </div>
        </div>) : (<div className="w-full p-5 bg-white shadow-lg rounded-lg mt-5">
          <div className="flex flex-col items-center mb-3">
            <span className="flex justify-center items-center bg-blue-100 w-12 h-12 rounded-full mb-3">
              <IoCheckmarkDoneCircleOutline className="text-primary" size={25} />
            </span>
            <h1 className="font-bold mb-1">আপনার শিশু প্রোফাইল সফলভাবে সম্পূর্ণ হচ্ছে</h1>
          </div>
          <div className="mt-5">
            <p className=" text-center text-gray-600">
              আপনার প্যারেন্ট অ্যাকাউন্টে একটি শিশু অ্যাকাউন্টের অনুরোধ পেয়েছে। প্যারেন্ট যদি অনুরোধটি গ্রহণ করে, তাহলে আপনি Safe GPT ব্যবহার করতে পারবেন। প্যারেন্ট যদি অনুরোধটি প্রত্যাখ্যান করে, তাহলে আপনার শিশু অ্যাকাউন্টটি ব্লক হয়ে যাবে
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 mt-3">
            <Link
              to="/child/login"
              className="text-primary-hover cursor-pointer underline"
            >
              লগইন
            </Link>
          </div>
        </div>)}

        
      </div>
    </section>
  );
}

export default ChildSingup;
