export default function LandingPage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-linear-to-b from-zinc-100 via-gray-50 to-white text-gray-900">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-zinc-400 rounded-full blur-3xl opacity-20"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-16 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="text-zinc-600 font-semibold text-sm uppercase tracking-[0.2rem] mb-4">
            Simple • Fast • Secure
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Send Money Instantly with
            <span className="bg-linear-to-r from-zinc-700 to-gray-500 bg-clip-text text-transparent">
              {" "}PayTM App
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Experience seamless digital payments, instant transfers,
            and secure transactions — all in one modern platform built
            for speed and simplicity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="/signup"
              className="
                px-8 py-4
                rounded-xl
                bg-zinc-800
                text-white
                text-lg
                font-semibold
                hover:bg-black
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-xl
                text-center
              "
            >
              Create Account
            </a>

            <a
              href="/signin"
              className="
                px-8 py-4
                rounded-xl
                border
                border-gray-300
                bg-white/70
                backdrop-blur-md
                text-lg
                font-semibold
                hover:bg-gray-100
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                text-center
                shadow-md
              "
            >
              Login
            </a>
          </div>
        </div>

        {/* Right Payment Card */}
        <div className="w-full max-w-md animate-[float_5s_ease-in-out_infinite]">

          <div
            className="
              bg-white/80
              backdrop-blur-md
              rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              p-8
              border
              border-white/50
              hover:scale-[1.03]
              transition-all
              duration-300
            "
          >

            <div className="flex items-center justify-between mb-6">

              <div>
                <p className="text-gray-500 text-sm">
                  Available Balance
                </p>

                <h3 className="text-4xl font-bold text-gray-900">
                  ₹25,450
                </h3>
              </div>

              <div
                className="
                  w-14 h-14
                  rounded-full
                  bg-zinc-100
                  flex
                  items-center
                  justify-center
                  text-2xl
                  shadow-inner
                "
              >
                💳
              </div>
            </div>

            <div className="space-y-4">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-xl
                  bg-green-50
                  border
                  border-green-100
                "
              >
                <div>
                  <p className="font-semibold">Received</p>

                  <p className="text-sm text-gray-500">
                    From Nidhi
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  + ₹2,000
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-xl
                  bg-red-50
                  border
                  border-red-100
                "
              >
                <div>
                  <p className="font-semibold">Sent</p>

                  <p className="text-sm text-gray-500">
                    To Jyoti
                  </p>
                </div>

                <p className="font-bold text-red-600">
                  - ₹850
                </p>
              </div>
            </div>

            <button
              className="
                w-full
                mt-8
                py-4
                rounded-xl
                bg-zinc-800
                text-white
                font-semibold
                hover:bg-black
                hover:scale-[1.02]
                active:scale-95
                transition-all
                duration-300
                shadow-lg
              "
            >
              Transfer Money
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-16 py-20 bg-white/70 backdrop-blur-sm">

        <div className="text-center mb-16">

          <p className="text-zinc-600 font-semibold uppercase tracking-[0.2rem] mb-3">
            Features
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Everything You Need for Digital Payments
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A modern payment experience with security, speed,
            and simplicity at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature Card */}
          <div
            className="
              p-8
              rounded-2xl
              bg-zinc-50
              border
              border-zinc-200
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-2xl font-bold mb-3">
              Instant Transfers
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Send and receive money instantly with secure
              real-time transfers.
            </p>
          </div>

          <div
            className="
              p-8
              rounded-2xl
              bg-zinc-50
              border
              border-zinc-200
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="text-4xl mb-4">🔒</div>

            <h3 className="text-2xl font-bold mb-3">
              Secure Payments
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Advanced authentication and encrypted transactions
              for complete safety.
            </p>
          </div>

          <div
            className="
              p-8
              rounded-2xl
              bg-zinc-50
              border
              border-zinc-200
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="text-4xl mb-4">📱</div>

            <h3 className="text-2xl font-bold mb-3">
              Easy to Use
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Clean and intuitive interface designed
              for a smooth experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-16 py-24">

        <div
          className="
            bg-linear-to-r
            from-zinc-800
            to-gray-700
            rounded-3xl
            p-10
            md:p-16
            text-center
            text-white
            shadow-2xl
          "
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Sending Money Today
          </h2>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
            Join thousands of users using PayTM App for secure
            and fast digital transactions.
          </p>

          <a
            href="/signup"
            className="
              inline-block
              px-10
              py-4
              rounded-xl
              bg-white
              text-zinc-800
              text-lg
              font-bold
              hover:bg-gray-100
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              shadow-lg
            "
          >
            Create Free Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          border-t
          border-gray-200
          py-8
          text-center
          text-gray-500
          text-sm
          bg-white/60
          backdrop-blur-sm
        "
      >
        © 2026 PayTM App. All rights reserved.
      </footer>
    </div>
  );
}