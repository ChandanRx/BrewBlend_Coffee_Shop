import { motion } from 'framer-motion'

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
})

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
      }}
      className="bg-[#f3f3f3] text-[#2e2e2e] min-h-screen py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={fadeIn(0)} className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-2 text-[#555]">
            We’d love to hear from you — feedback, queries or just a friendly hello!
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={fadeIn(0.2)} className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">📍 Our Location</h4>
              <p className="text-[#444]">102 Bean Street, Navrangpura, Ahmedabad, India</p>
            </div>
            {/* <div>
              <h4 className="text-lg font-semibold mb-1">📞 Phone</h4>
              <p className="text-[#444]">+91 98765 43210</p>
            </div> */}
            <div>
              <h4 className="text-lg font-semibold mb-1">✉️ Email</h4>
              <p className="text-[#444]">hello@brewblend.com</p>
            </div>

            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0321347180716!2d72.54384731436764!3d23.041597084947927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fda3efbdfb%3A0x94e9c993166f0e0c!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1617176762730!5m2!1sen!2sin"
                width="100%"
                height="270"
                className="rounded-md border border-[#ddd]"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn(0.3)}
            className="bg-white shadow-md border border-[#ddd] p-6 rounded-lg space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2e2e2e]">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-[#ccc] focus:ring-2 focus:ring-[#aaa] outline-none text-[#2e2e2e]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2e2e2e]">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-[#ccc] focus:ring-2 focus:ring-[#aaa] outline-none text-[#2e2e2e]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2e2e2e]">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-[#ccc] focus:ring-2 focus:ring-[#aaa] outline-none text-[#2e2e2e] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#2e2e2e] text-white font-semibold hover:bg-[#444] transition rounded"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
