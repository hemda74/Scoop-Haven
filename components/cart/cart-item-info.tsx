interface CartItemInfoProps {
  product: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({ product }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text-sm fw-semibold text-dark">{product.name}</p>
      </div>
      <p className="mt-1 text-sm fw-medium text-dark">{product.price}</p>
    </div>
  );
};

export default CartItemInfo;
