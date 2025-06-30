import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const CoffeeCard = ({ name, image, price }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({ name, image, price })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white text-[#2e2e2e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-[#e5e5e5]"
    >
      <img src={image} alt={name} className="w-full h-52 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-[#666] mb-4">₹{price}</p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="w-full px-4 py-2 text-sm font-medium border border-[#2e2e2e] text-[#2e2e2e] hover:bg-[#2e2e2e] hover:text-white transition-all duration-300 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                ✅ Added
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default CoffeeCard
