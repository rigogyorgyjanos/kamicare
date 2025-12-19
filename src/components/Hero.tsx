import { motion, type Variants } from "framer-motion";
import bgImage from "../assets/marble.jpg";

type HeroProps = {
  backgroundUrl?: string;
  title?: string;
  subtitle?: string;
  bookHref?: string;
  servicesHref?: string;
};

const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaContainer: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const ctaItem: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};


export default function Hero({
  backgroundUrl = bgImage,
  title = "KamiCare pedikűr",
  subtitle = "Nincs csúnya láb csak problémás",
  bookHref = "#elerhetoseg",
  servicesHref = "/szolgaltatasok",
}: HeroProps) {
  return (
    <section className="relative -mt-16 min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Háttér */}
      <div
        aria-hidden
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        className="absolute inset-0 bg-fixed bg-cover bg-no-repeat"
      />
      {/* Halványítás */}
      <div aria-hidden className="absolute inset-0 bg-gray-900/50" />

      {/* Tartalom */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-20 text-center">
        {/* Title + Subtitle animáció */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textItem}
            className=" font-handwritten tracking-wider text-5xl sm:text-6xl font-bold leading-tight text-white drop-shadow "
          >
            {title}
          </motion.h1>
          <motion.p
            variants={textItem}
            className="mt-8 text-base sm:text-lg text-white/75 "
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* CTA-k animáció (a szöveg után) */}
        <motion.div
          variants={ctaContainer}
          initial="hidden"
          animate="visible"
          className="md:mt-8 mt-18 flex flex-col sm:flex-row items-center justify-center md:gap-3 gap-8"
        >
          <motion.a
            variants={ctaItem}
            href={bookHref}
            className="min-w-64 min-h-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#9a7142] shadow-md hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9a7142]"
          >
            Időpontfoglalás
          </motion.a>

          <motion.a
            variants={ctaItem}
            href={servicesHref}
            className="min-w-64 min-h-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#9a7142] border border-[#9a7142] bg-white/70 backdrop-blur hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9a7142]"
          >
            Szolgáltatásaink
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
