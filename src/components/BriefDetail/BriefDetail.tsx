import { Product } from "../../utils/interfaces/Product";
import "./BriefDetail.css";
export function BriefDetail({ itemShow }: { itemShow: Product }) {
  return (
    <>
      <h1>Detalles</h1>

      <div className="brief">
        <h2>Modelo</h2>
        <span>{itemShow.title}</span>
      </div>

      <div className="brief">
        <h2>Tipo</h2>
        <span>{itemShow.category}</span>
      </div>

      <div className="brief">
        <h2>Descuento</h2>
        <span>% {itemShow.discountPercentage}</span>
      </div>

      <div className="brief">
        <h2>Precio</h2>
        <span>{itemShow.price}</span>
      </div>
    </>
  );
}
