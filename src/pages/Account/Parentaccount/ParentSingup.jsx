import { useState } from "react";
import SingUp from "../../Singup";
import { FiUserCheck } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import PasswordInput from "../../../components/PasswordInput";
import EmailNumber from "../../../components/EmailNumber";
import { Link } from "react-router-dom";

function ParentSingup() {
  const [secureCode, setSecureCode] = useState(null);

  function singup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const allData = {
      ...data,
      ...(data.email ? { number: "" } : { email: "" }),
    };

    const singupData = { ...allData, secureCode: handleGenerate() };
    console.log(singupData);
    // window.alert(...allData)
  }

  const handleGenerate = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const otp = String(array[0] % 1_000_000).padStart(6, "0");
    setSecureCode(otp);
    return otp;
  };

  return (
    <section className="flex flex-col items-center pb-10 bg-bg">
      <SingUp type={"parent"} />
      <div className="flex flex-col items-center m-5 max-w-100 sm:max-w-125">
        {secureCode === null ? (
          <div className="">
            <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mt-5 mx-auto">
              <FiUserCheck
                className="text-6xl text-primary mx-auto"
                size={40}
              />
            </div>
            <div className="flex flex-col items-center mt-3">
              <h1 className="font-bold text-2xl">প্যারেন্ট প্রোফাইল সেটআপ</h1>
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
                <label htmlFor="nid">
                  জাতীয় পরিচয়পত্র নম্বর*
                  <input
                    type="text"
                    id="nid"
                    name="nid"
                    placeholder="১০ বা ১৭ ডিজিটের NID নম্বর"
                    required
                    minLength="10"
                    maxLength="17"
                    pattern="\d{10,17}"
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "১০ থেকে ১৭ সংখ্যার মধ্যে একটি বৈধ NID নম্বর লিখুন"
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    className="border p-2 rounded"
                  />
                </label>
                <label htmlFor="age">
                  বয়স (অবশ্যই ৩০+)*
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="আপনার বয়স"
                    min={30}
                    max={120}
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "বয়স অবশ্যই ৩০ থেকে 1২০ বছরের মধ্যে হতে হবে"
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    className="border p-2 rounded"
                  />
                </label>

                {/* phone */}
                <EmailNumber />

                <label htmlFor="password">
                  পাসওয়ার্ড*
                {/* password  */}
                <PasswordInput />
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
                  to="/parent/login"
                  className="text-primary-hover cursor-pointer underline"
                >
                  লগইন
                </Link>
              </div>
            </div>

            <div className="bg-blue-200 w-full shadow-lg text-white p-4 rounded-lg mt-5">
              <h1 className="text-primary-hover font-bold text-center pb-3">
                নিরাপত্তা বিজ্ঞপ্তি
              </h1>
              <p className="text-primary-hover text-center">
                আপনার তথা সম্পূর্ণ নিরাপদ এবং শুধুমাত্র যাচাইকরণের জন্য ব্যবহৃত
                হবে। প্রোফাইল যাচাই হওয়ার পর আপনি একটি সিকিউর কোড পাবেন। যা দিয়ে
                শিশু যোগ করতে পারবেন।
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full p-5 bg-white shadow-lg rounded-lg mt-5">
            <div className="flex flex-col items-center mb-3">
              <span className="flex justify-center items-center bg-amber-100 w-12 h-12 rounded-full mb-3">
                <CiWarning className="text-amber-500" size={25} />
              </span>
              <h1 className="font-bold mb-1">যাচাই প্রক্রিয়াধীন</h1>
              <p className="text-gray-600">আপনার প্রোফাইল যাচাই করা হচ্ছে</p>
            </div>
            <div className="mt-5">
              <p className=" text-center text-gray-600">
                আপনার জাতীয় পরিচয়পত্র এবং বয়স যাচাই করা হচ্ছে। এই প্রক্রিয়া
                সাধারণত ২৪ ঘন্টার মধ্যে সম্পন্ন হয়।
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center mt-5 p-5 bg-blue-100 rounded-lg">
              <h3 className="font-semibold text-primary">
                আপনার সিকিউর কোড: {secureCode}
              </h3>
              <p className="text-primary">
                এই কোডটি শিশু যোগ করার সময় প্রয়োজন হবে।
              </p>
            </div>
            <div className="flex justify-center space-x-2 mt-3">
                <Link
                  to="/parent/login"
                  className="text-primary-hover cursor-pointer underline"
                >
                  লগইন
                </Link>
              </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ParentSingup;
