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
    const response = await axios.post(`/checkout`, {
      productIds: items.map(item => item.id),
    });

    window.location = response.data.url;
  };

  return (
    <>
      <p className="title pb-2">Order summary</p>
      <ul className="list-group list-group-flush order-summary-list">
        <li className="list-group-item">
          Subtotal
          <span>{totalPrice}</span>
        </li>
        <li className="list-group-item">
          Tax
          <span>€0.00</span>
        </li>
        <li className="list-group-item fw-700 text-success">
          Order Total
          <span className="fw-700 text-success">{totalPrice}</span>
        </li>
      </ul>

      <button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="btn-primary rounded-3 mt-4 text-center">
        Checkout
      </button>
    </>
  );
};

export default Summary;
