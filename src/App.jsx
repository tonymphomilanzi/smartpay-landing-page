import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function HeroFintech() {
  const gradientRef = useRef(null);

  // ✅ Animate gradient line
  useEffect(() => {
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        backgroundPosition: "200% center",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  // ✅ Card rotation with mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative bg-dark text-white min-h-screen flex flex-col items-center justify-start overflow-hidden px-6">
      {/* ✅ Simple Top Navbar */}
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 z-50 relative">
        <h1 className="font-sora text-2xl font-bold tracking-tight">
          Smart<span className="text-accent">Pay</span>
        </h1>
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm mr-5">
          <li className="hover:text-white cursor-pointer transition">Products</li>
          <li className="hover:text-white cursor-pointer transition">Solutions</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>
      </nav>

      {/* Animated Gradient Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            backgroundPositionX: ["0%", "100%"],
            backgroundPositionY: ["0%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,200,150,0.25)_0%,transparent_40%,rgba(0,200,150,0.25)_100%)] bg-[length:200%_200%] blur-3xl opacity-20"
        />
      </motion.div>

      {/* Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-3xl" />
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(0,200,150,0.15),transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 mt-3">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="font-sora text-5xl md:text-7xl font-extrabold leading-tight relative">
            Smarter. <span className="text-accent">Faster.</span>
            <br /> Borderless Finance.
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-accent text-xl font-semibold"
          >
            +$2.5M Transactions Processed
          </motion.div>

          <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
            Experience next-generation banking that moves with you — global
            payments, zero borders, total control.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00C896" }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-dark font-semibold px-6 py-3 rounded-full flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-white font-medium"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SECTION — Layered Cards */}
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex-1 flex items-center justify-center perspective-1000"
        >
          {/* BACK CARDS */}
          <motion.div
            className="absolute w-72 h-44 rounded-2xl bg-gradient-to-br from-[#03E1FF]/40 to-[#00C896]/20 rotate-[-10deg] translate-x-[-50px] translate-y-[40px] border border-white/10 z-[5]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-44 rounded-2xl bg-gradient-to-br from-[#00C896]/30 to-[#FFFFFF]/10 rotate-[10deg] translate-x-[50px] translate-y-[40px] border border-white/10 z-[6]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* MAIN CARD */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-80 h-48 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl overflow-hidden z-[10]"
          >
            {/* Glass Shine */}
            <motion.div
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/30 to-white/0 blur-xl rounded-2xl"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />

            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-between text-sm text-gray-200">
                <span>SmartPay</span>
                <span>VISA</span>
              </div>
              <div>
                <p className="text-gray-300 tracking-widest text-xs mb-2">
                  **** **** **** 3921
                </p>
                <p className="text-lg font-semibold">Tony Milanzi</p>
              </div>
            </div>
          </motion.div>

          {/* Glow Orb */}
          <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl z-[1]" />
        </motion.div>
      </div>
    </section>
  );
}
