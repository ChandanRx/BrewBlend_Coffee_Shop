import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cart = () => {
  const { cart, removeFromCart, total } = useCart()
  const navigate = useNavigate()

  return (
    <section className="bg-[#f5f5f5] text-[#2e2e2e] min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#2e2e2e]">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-[#888]">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-[#555]">
                    ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </motion.div>
          ))}

          {/* Total & Proceed Button */}
          <div className="text-right mt-6">
            <div className="text-lg font-semibold mb-4">Total: ₹{total}</div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/cart/payment')}
              className="bg-[#2e2e2e] text-white px-6 py-3 rounded shadow hover:bg-[#444] transition"
            >
              Proceed to Payment
            </motion.button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
