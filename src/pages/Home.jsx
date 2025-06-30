import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-[#f4f4f4] text-[#1e1e1e] py-20 px-4 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Why <span className="text-[#4d4d4d]">BrewBlend</span> Stands Out
          </h2>
          <p className="text-[#444] text-base sm:text-lg mb-6 leading-relaxed">
            From handpicked beans to artisan roasting, we pour care into every cup.
            Whether you love coffee or tea, we blend tradition and flavor in every sip.
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-[#2e2e2e] text-white font-medium rounded-full shadow hover:bg-[#444] transition duration-300"
          >
            Explore Menu
          </button>
        </motion.div>

        {/* Image hidden on small screens */}
        <div className="relative w-full max-w-[320px] mx-auto hidden md:block">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-[#e0e0e0]"
          >
            <img
              src="/coffee1.png"
              alt="coffee"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-3 py-1 text-sm rounded-full shadow border border-[#ccc]"
          >
            ☕ Premium Beans
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-24 top-1/2 -translate-y-1/2 bg-white px-3 py-1 text-sm rounded-full shadow border border-[#ccc]"
          >
            🔥 Roasted Fresh
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -right-24 top-1/2 -translate-y-1/2 bg-white px-3 py-1 text-sm rounded-full shadow border border-[#ccc]"
          >
            🛋 Cozy Vibes
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
