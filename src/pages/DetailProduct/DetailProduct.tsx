import "./DetailProduct.css";
import { Cart } from "../../components/Cart/Carts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BriefDetail } from "../../components/BriefDetail/BriefDetail";
import { CustomizeButton } from "../../components/CustomizeButton/CustomizeButton";
import { useDetailProducts } from "./hook/useDetailProducts";

function DetailProduct() {
  const { handleNavigation, itemShow, addToCart } = useDetailProducts();
  console.log(itemShow, "dssd");

  return (
    <>
      <Cart />
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <h1>{itemShow.title}</h1>

            <img
              src={itemShow.thumbnail}
              alt="Preview"
              className="grid-item-image"
            />
            <span>{itemShow.description}</span>
          </div>
          <div className="grid-item">
            <BriefDetail itemShow={itemShow} />

            <CustomizeButton
              onclick={() => {
                addToCart(itemShow);
              }}
              text="Agregar al carrito"
              color="#FF4D4D"
            >
              <ShoppingCartIcon />
            </CustomizeButton>

            <CustomizeButton
              onclick={() => {
                handleNavigation("/cart");
              }}
              text="Ir a Pagar"
              color="#01eac2"
            ></CustomizeButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
