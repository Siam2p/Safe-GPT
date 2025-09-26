import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

function PasswordInput() {
  const [show, setShow] = useState(true);
  const [length, setLength] = useState(false);

  const handleValidation = (e) => {
    const value = e.target.value;

    const rules = [
      {
        test: (val) => val.length >= 6,
        message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
      },

      // {
      //   test: (val) => /[A-Z]/.test(val),
      //   message: "🔠 কমপক্ষে একটি বড় হাতের অক্ষর থাকতে হবে (A-Z)",
      // },
      // {
      //   test: (val) => /[a-z]/.test(val),
      //   message: "🔡 কমপক্ষে একটি ছোট হাতের অক্ষর থাকতে হবে (a-z)",
      // },
      // {
      //   test: (val) => /[0-9]/.test(val),
      //   message: "🔢 কমপক্ষে একটি সংখ্যা থাকতে হবে (0-9)",
      // },
      // {
      //   test: (val) => /[!@#$%^&]/.test(val),
      //   message: " কমপক্ষে একটি বিশেষ চিহ্ন থাকতে হবে (!@#$%^&)",
      // },
      {
        test: (val) => !/^(.)\1+$/.test(val),
        message: "একই অক্ষর বারবার ব্যবহার করা যাবে না",
      },
      {
        test: (val) => !/123456|654321|qwerty|password|abcdef/i.test(val),
        message: "সাধারণ পাসওয়ার্ড ব্যবহার করবেন না",
      },
    ];

    const failedRule = rules.find((rule) => !rule.test(value));

    if (failedRule) {
      e.target.setCustomValidity(failedRule.message);
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <div className="flex w-full border-2 items-center border-gray-400 rounded-md p-1 px-2 mt-2 mb-2">
      <input
        type={show ? "password" : "text"}
        id="password"
        name="password"
        placeholder="পাসওয়ার্ড "
        required
        onChange={(e) => {
          e.target.value.length === 0 ? setLength(false) : setLength(true);
        }}
        onInvalid={handleValidation}
        onInput={handleValidation}
        className="rounded outline-0 w-full"
      />

      {length && (
        <button
          type="button"
          className="rounded-full select-none hover:bg-gray-200 cursor-pointer transition-all"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <BiHide size={20} className="text-gray-500" />
          ) : (
            <BiShow size={20} className="text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
}

export default PasswordInput;
