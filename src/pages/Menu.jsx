import { motion } from 'framer-motion'
import CoffeeCard from '../components/CoffeeCard'

const coffeeItems = [
  {
    name: "Espresso",
    price: 120,
    image: "/Espresso.jpg"
  },
  {
    name: "Cappuccino",
    price: 150,
    image: "/Cappuccino.jpg"
  },
  {
    name: "Latte",
    price: 130,
    image: "/Latte.jpg"
  },
  {
    name: "Mocha",
    price: 160,
    image: "/Mocha.jpg"
  },
  {
    name: "Cold Brew",
    price: 140,
    image: "ColdBrew.jpg"
  },
  {
    name: "Americano",
    price: 110,
    image: "Americano.jpg"
  },
  {
    name: "Macchiato",
    price: 135,
    image: "Macchiato.jpg"
  },
  {
    name: "Affogato",
    price: 180,
    image: "Affogato.jpg"
  }
]

// Container animation
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

// Card animation
const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    }
  }
}

const Menu = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-[#f4f4f4] py-16 px-4 text-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-[#2e2e2e]"
        >
          Our Coffee Menu
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {coffeeItems.map((item, index) => (
            <motion.div key={index} variants={cardItem}>
              <CoffeeCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Menu
