

import { createBrowserRouter } from 'react-router-dom';
import ProductListing from '../pages/Products/ProductListing';
import ProductDetails from '../pages/Products/ProductDetails';
import Cart from '../pages/Cart/Cart';
import Hero from '../components/Hero';
import App from '../App';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: '/products',
          element: <ProductListing />,
        },
        {
          path: '/product/:productId',
          element: <ProductDetails />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],{
    basename: "/online-store"
  });
