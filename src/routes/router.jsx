import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Payment from '../components/Payment'
import TrackOrder from '../components/TrackOrder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/cart/payment', element: <Payment /> }, // ✅ Not nested under Cart
      { path: '/trackorder', element: <TrackOrder /> }
    ]
  }
])

export default router
