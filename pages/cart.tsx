import { useEffect, useState, ReactElement } from 'react';
import React from 'react';

import useCart from '../hooks/use-cart';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import Summary from '../components/cart/summary';
import CartItem from '../components/cart/cart-item';
import Link from 'next/link';

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
    <>
      <div className="breadcrumb-sec">
        <div className="container">
          <nav className="px-2">
            <h3 className="page-title text-white mb-2">My Cart</h3>
            <ol className="breadcrumb d-flex text-capitalize">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">
                  {' '}
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active ">My Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="theme-1-margin-top">
        <div className="container">
          <div className=" py-4">
            <div className="row border-top gx-2">
              <div className="col-md-12 col-lg-8 pb-4 px-0 pe-lg-5">
                <div className="row align-items-center py-3">
                  {cart.items.length === 0 && (
                    <p className="text-secondary">No items added to cart.</p>
                  )}
                  <ul>
                    {cart.items.map(item => (
                      <CartItem key={item.id} data={item} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 px-0">
                <div className="card my-4 border p-3 rounded-4 shadow">
                  <Summary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// adding Layout
CartPage.getLayout = function getLayout(CartPage: ReactElement) {
  return <ViewerLayout childern={CartPage}></ViewerLayout>;
};

export default CartPage;
