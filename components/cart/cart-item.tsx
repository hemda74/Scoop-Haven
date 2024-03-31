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
      <div className="  rounded-md overflow-hidden d-flex align-items-center justify-content-center sm-h-48 sm-w-48">
        <img
          src={data.imageUrl}
          alt=""
          className="img-fluid"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className=" ml-4 d-flex justify-content-between sm-ml-6">
        <div className="ms-auto ">
          <button onClick={onRemove}>X</button>
        </div>
        <div className=" pr-9 sm-grid sm-grid-cols-2 sm-gap-x-6 sm-pr-0">
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
