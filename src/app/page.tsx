// ===== শুরু: এটা আমাদের প্রথম পেজ — PUB AssessAI হোমপেজ =====

// ===== শুরু: ডিফল্ট ইমপোর্ট (এখন দরকার নেই, তবে ভবিষ্যতে লাগবে) =====
// (কিছু নেই এখন)
// ===== শেষ: ডিফল্ট ইমপোর্ট =====

// ===== শুরু: Home কম্পোনেন্ট — এটাই ব্রাউজারে দেখা যাবে =====
export default function Home() {
  return (
    // ===== শুরু: মূল কন্টেইনার — পুরো পেজের মেইন বক্স =====
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">

      {/* ===== শুরু: কার্ড বক্স — আমাদের হোমপেজের লেখা ===== */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">

        {/* ===== শুরু: সাইটের নাম ===== */}
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          PUB AssessAI
        </h1>
        {/* ===== শেষ: সাইটের নাম ===== */}

        {/* ===== শুরু: সাবটাইটেল ===== */}
        <p className="text-gray-600 mb-6">
          AI Question Preparation, Assessment and Learning Portal
        </p>
        {/* ===== শেষ: সাবটাইটেল ===== */}

        {/* ===== শুরু: বিশ্ববিদ্যালয়ের নাম ===== */}
        <p className="text-sm text-gray-500 mb-8">
          Pundra University of Science and Technology — CSE Department
        </p>
        {/* ===== শেষ: বিশ্ববিদ্যালয়ের নাম ===== */}

        {/* ===== শুরু: বাটন (এখনো কাজ করবে না, শুধু দেখানোর জন্য) ===== */}
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
            Teacher Login
          </button>
          <button className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50">
            Student Login
          </button>
        </div>
        {/* ===== শেষ: বাটন ===== */}
      </div>
      {/* ===== শেষ: কার্ড বক্স ===== */}

    </main>
    // ===== শেষ: মূল কন্টেইনার =====
  );
}
// ===== শেষ: Home কম্পোনেন্ট =====

// ===== শেষ: এটা আমাদের প্রথম পেজ =====