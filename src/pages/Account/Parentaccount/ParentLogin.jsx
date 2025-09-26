import SingUp from "../../Singup";
import { FaRegUser } from "react-icons/fa";
import { LuShield } from "react-icons/lu";
import { Link } from "react-router-dom";
import EmailNumber from "../../../components/EmailNumber";
import PasswordInput from "../../../components/PasswordInput";

function ParentLogin() {

  function Login(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const loginData = Object.fromEntries(formData.entries())
    console.log(loginData);
  }


  return (
    <section className="flex flex-col items-center pb-10 bg-bg">
      <SingUp type={"parent"} />
      <div className="flex flex-col items-center m-5 max-w-100 sm:max-w-125">
        <div className="">
          <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mt-5 mx-auto">
            <FaRegUser className="text-6xl text-primary mx-auto" size={40} />
          </div>
          <div className="flex flex-col items-center mt-3">
            <h1 className="font-bold text-2xl">প্যারেন্ট প্রোফাইল লগইন করুন</h1>
            <p>আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন</p>
          </div>

          <div className="w-full p-5 bg-white shadow-lg rounded-lg mt-5">
            <div className="flex justify-start space-x-2 w-full">
              <LuShield className="text-primary mt-1" size={20} />
              <h2 className="font-bold">লগইন তথ্য</h2>
            </div>
            <div className="pb-3">
              <p className="text-sm text-gray-600 mt-2">
                আপনার অ্যাকাউন্টে প্রবেশ করার জন্য ফোন নম্বর/ইমেইল এবং
                পাসওয়ার্ড দিন
              </p>
            </div>
            <form
              onSubmit={Login}
              className="flex flex-col space-y-4 pb-5 border-b border-gray-500"
            >
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
                লগইন করুন
              </button>
            </form>

            <div className="flex justify-center space-x-2 mt-3">
              <Link
                to="/parent/resetpassword"
                className="text-primary-hover cursor-pointer underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
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

export default ParentLogin;
