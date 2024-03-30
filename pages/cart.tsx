import { useEffect, useState, ReactElement } from 'react';
import React from 'react';

import useCart from '../hooks/use-cart';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import Summary from '../components/cart/summary';
import CartItem from '../components/cart/cart-item';

export const revalidate = 0;

const CartPage: NextPageWithLayout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="container">
        <div className="px-4 py-16 sm-px-6 lg-px-8">
          <h1 className="text-3xl fw-bold text-dark">Shopping Cart</h1>
          <div className="mt-12 lg-grid lg-grid-cols-12 lg-items-start gap-x-12">
            <div className="lg-col-span-7">
              {cart.items.length === 0 && (
                <p className="text-secondary">No items added to cart.</p>
              )}
              <ul>
                {cart.items.map(item => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};
// adding Layout
CartPage.getLayout = function getLayout(CartPage: ReactElement) {
  return <ViewerLayout childern={CartPage}></ViewerLayout>;
};

export default CartPage;
