import { ProductInfo } from "../../utils/interfaces/Product";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeFromCart,
}: ProductInfo): JSX.Element {
  return (
    <li
      style={{
        borderBottom: "1px solid #444",
        paddingBottom: "16px",
      }}
    >
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
      <div>
        <button onClick={removeFromCart}>
          <RemoveShoppingCartIcon />
        </button>
      </div>
    </li>
  );
}
