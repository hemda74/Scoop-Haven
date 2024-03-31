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
    <li>
      <div className="card my-cart-categories border-bottom rounded-0 dark px-0">
        <img
          src={data.imageUrl}
          alt=""
          className="card-img-top p-0 object-fit-cover border rounded-4"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '85px',
            height: '85px',
          }}
        />
        <div className="card-body pe-0">
          <div className="text-section">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <p className="title fs-6">{data.name}</p>
              <button
                onClick={onRemove}
                className="fs-7 fw-400 pointer text-center btn btn-outline-danger">
                Remove
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="price fs-6">{data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
