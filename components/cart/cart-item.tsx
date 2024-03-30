import { toast } from 'react-hot-toast';
import { FaRegTimesCircle } from 'react-icons/fa';
import useCart from '../../hooks/use-cart';
import { Product } from '../../types';

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="d-flex py-6 border-bottom">
      <div className="position-relative h-24 w-24 rounded-md overflow-hidden d-flex align-items-center justify-content-center sm-h-48 sm-w-48">
        <img
          src={data.imageUrl}
          alt=""
          className="img-fluid"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="position-relative ml-4 d-flex flex-column justify-content-between sm-ml-6">
        <div className="position-absolute top-0 end-0">
          <button onClick={onRemove}>
            <FaRegTimesCircle />
          </button>
        </div>
        <div className="position-relative pr-9 sm-grid sm-grid-cols-2 sm-gap-x-6 sm-pr-0">
          <div className="d-flex justify-content-between">
            <p className="text-lg fw-bold text-black">{data.name}</p>
          </div>
          <div>{data.price}</div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
