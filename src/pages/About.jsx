import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
}

const About = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-[#f3f3f3] text-[#2e2e2e] min-h-screen py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={fadeInUp} custom={0}>
          <h2 className="text-4xl font-bold text-center text-[#2e2e2e]">
            About <span className="text-[#606060]">BrewBlend</span>
          </h2>
          <p className="mt-4 text-center text-[#4e4e4e] max-w-3xl mx-auto">
            At BrewBlend, we don’t just serve beverages — we serve moments. From locally-sourced beans to artisan blends, every sip is made with purpose.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            variants={fadeInUp}
            custom={1}
          >
            <img
              src="/About.jpg"
              alt="Our Cafe"
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeInUp} custom={2}>
            <h3 className="text-2xl font-semibold text-[#2e2e2e] mb-4">
              Our Story
            </h3>
            <p className="text-[#4e4e4e] leading-relaxed">
              Founded in 2020 by passionate brewers, BrewBlend was created to offer a space where everyone can relax, sip, and connect. Our café blends minimal design with maximum warmth.
            </p>

            <h4 className="text-xl font-semibold text-[#2e2e2e] mt-6 mb-3">
              What makes us unique?
            </h4>
            <ul className="list-disc list-inside space-y-1 text-[#2e2e2e]/90">
              <li>☕ Carefully selected ingredients</li>
              <li>🌿 Seasonal and signature brews</li>
              <li>🪑 Thoughtful, calming interiors</li>
              <li>🤝 Friendly, skilled staff</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
