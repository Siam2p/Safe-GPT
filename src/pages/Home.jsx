import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-bg">
            <h1 className="text-4xl font-bold mb-4">SafeGPT-এ স্বাগতম</h1>
            <p className="text-lg text-center mb-8">
                একটি শিশু-বান্ধব AI পরিবেশ, যেখানে রয়েছে পিতামাতার নিয়ন্ত্রণ এবং মনিটরিং ফিচার।
            </p>
            <Link to="/SingUp" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition">
                অ্যাকাউন্টে যান
            </Link>
        </div>
    );
}

export default Home