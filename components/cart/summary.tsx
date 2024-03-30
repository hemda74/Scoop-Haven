'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useCart from '../../hooks/use-cart';
import { toast } from 'react-hot-toast';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map(item => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-light px-4 py-6 sm-px-6 lg-col-span-5 lg-mt-0 lg-p-8">
      <h2 className="text-lg fw-medium text-dark">Order summary</h2>
      <div className="mt-6">
        <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-4">
          <div className="text-base fw-medium text-dark">Order total</div>
          {totalPrice}
        </div>
      </div>
      <button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-100 mt-6">
        Checkout
      </button>
    </div>
  );
};

export default Summary;
