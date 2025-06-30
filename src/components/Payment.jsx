import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const Payment = () => {
  const { total } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [showSuccess, setShowSuccess] = useState(false)

  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    pin: ''
  })

  const gst = total * 0.18
  const delivery = 30
  const grandTotal = total + gst + delivery

  const handlePayment = () => {
    if (!address.name || !address.street || !address.city || !address.pin) {
      alert('Please fill your address details.')
      return
    }
    setShowSuccess(true)
  }

  const handleClose = () => {
    setShowSuccess(false)
  }

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-12 px-6 text-[#2e2e2e]">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8 border border-[#e2e2e2]">
        <h2 className="text-3xl font-bold text-center">Payment Checkout</h2>

        {/* Address Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Shipping Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-[#ccc] rounded"
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Street Address"
            className="w-full px-4 py-2 border border-[#ccc] rounded"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 px-4 py-2 border border-[#ccc] rounded"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="w-1/2 px-4 py-2 border border-[#ccc] rounded"
              value={address.pin}
              onChange={(e) => setAddress({ ...address, pin: e.target.value })}
            />
          </div>
        </div>

        {/* Billing Summary */}
        <div className="space-y-2 pt-4 border-t border-[#ccc]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%):</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges:</span>
            <span>₹{delivery}</span>
          </div>
          <div className="border-t border-[#ccc] pt-4 flex justify-between text-lg font-semibold">
            <span>Total Payable:</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Choose Payment Method</h3>
          <div className="flex gap-6">
            {['card', 'upi', 'razorpay'].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="capitalize">{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Inputs */}
        {paymentMethod === 'card' && (
          <motion.div key="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border border-[#ccc] rounded"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-4 py-2 border border-[#ccc] rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 px-4 py-2 border border-[#ccc] rounded"
              />
            </div>
          </motion.div>
        )}

        {paymentMethod === 'upi' && (
          <motion.div key="upi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <input
              type="text"
              placeholder="UPI ID (e.g. example@upi)"
              className="w-full px-4 py-2 border border-[#ccc] rounded"
            />
          </motion.div>
        )}

        {paymentMethod === 'razorpay' && (
          <motion.div key="razorpay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#666]">
            Razorpay simulation: click pay to simulate payment.
          </motion.div>
        )}

        {/* Pay Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#2e2e2e] text-white py-3 rounded hover:bg-[#444] transition"
          onClick={handlePayment}
        >
          Pay ₹{grandTotal.toFixed(2)}
        </motion.button>
      </div>

      {/* MODAL */}
     <AnimatePresence>
  {showSuccess && (
    <motion.div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 14 }}
        className="bg-white w-[90%] max-w-md mx-auto px-8 py-6 rounded-xl shadow-2xl text-center text-[#2e2e2e]"
      >
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
        <p className="text-[#444] mb-4">Your order is confirmed and on its way to your location 🚚</p>
        <p className="text-[#666] text-sm mb-6">You can track the order live on map.</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleClose}
            className="bg-gray-200 text-[#2e2e2e] px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Close
          </button>
          <button
            onClick={() => {
              setShowSuccess(false)
              window.location.href = '/trackorder' // 👈 or use navigate('/track-order')
            }}
            className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#444] transition"
          >
            Track Order
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  )
}

export default Payment
