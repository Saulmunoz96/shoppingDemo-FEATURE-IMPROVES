import { Cart } from "../../components/Cart/Carts";
import { useCart } from "../../hooks/useCart";
import { ProductCart } from "../../utils/interfaces/Product";
//import TextField from "@mui/material/TextField";
import "./DetailCar.css";
// import { makeStyles } from "@material-ui/core/styles";
import { BillNote, DetailBill } from "../../utils/interfaces/BillNote";
import { useState } from "react";
import { REACT_APP_MS_URL } from "../../env";
import { useNavigatePages } from "../../hooks/useNavigatePages";

// const useStyles = makeStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "#01eac2",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "#01eac2",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#01eac2",
//       },
//       "&:hover fieldset": {
//         borderColor: "#01eac2",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#01eac2",
//       },
//       "& input": {
//         color: "#01eac2",
//       },
//       "& placeholder": {
//         color: "#01eac2",
//       },
//       "& .MuiFormLabel-root": {
//         color: "#01eac2",
//       },
//       "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
//         transform: "translate(14px, -6px) scale(0.75)",
//       },
//     },
//   },
// });

export function DetailCar() {
  const { cart } = useCart();
  let total: number = 0;

  const { handleNavigation } = useNavigatePages();

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: { target: { value: any } }) => {
    setCedula(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNombre = (event: { target: { value: any } }) => {
    setNombre(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApellido = (event: { target: { value: any } }) => {
    setApellido(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDireccion = (event: { target: { value: any } }) => {
    setDireccion(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmail = (event: { target: { value: any } }) => {
    setEmail(event.target.value);
  };

  const createBodyBill = (): BillNote => {
    const detailBill: DetailBill[] = [];

    cart.map((el) => {
      detailBill.push({
        idProduct: el.id ?? el.idProduct,
        quantity: el.quantity,
        value: el.price,
      });
    });

    return {
      customer: {
        name: nombre,
        lastName: apellido,
        address: direccion,
        mail: email,
        identificationNumber: cedula,
      },
      detailBill: detailBill,
    };
  };

  const callBill = () => {
    fetch(`${REACT_APP_MS_URL}/ms-comp-sales/bills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createBodyBill()),
    })
      .then(async (res) => await res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };
  return (
    <>
      <Cart />
      <div className="cart">
        <div className="dataCustomer">
          <div className="dataRow">
            <h2 className="cart-title">Datos de Facturacion</h2>

            <input
              type="text"
              id="cedula"
              value={cedula}
              onChange={handleChange}
            />
          </div>
          <div className="dataRow">
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombre}
            />
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={handleApellido}
            />
          </div>
          <div className="dataRow">
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={handleDireccion}
            />

            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <button
              onClick={() => {
                handleNavigation(`/bills`);
              }}
              className="cart-button-middle"
            >
              Consultar Facturas
            </button>
          </div>
        </div>

        <h1 className="cart-title">Carrito a Pagar</h1>

        <div className="cart-title-row">
          <div className="row-first">
            <span className="cart-span">Qauntity</span>
          </div>
          <div className="row-second">
            <span className="cart-span">Image</span>
          </div>
          <div className="row-third">
            <span className="cart-span">Detail Product</span>
          </div>
          <div className="row-four">
            <h2> Unit Price</h2>
          </div>
          <div className="row-five">
            <h2> Total Price</h2>
          </div>
        </div>

        {cart.map((ele: ProductCart) => {
          total += ele.price * ele.quantity;
          return (
            <div className="cart-list">
              <div className="row-first">
                <span className="cart-span">{ele.quantity}</span>
              </div>
              <div className="row-second">
                <img src={ele.thumbnail} className="list-img"></img>
              </div>
              <div className="row-third">
                <span className="cart-span">{ele.title}</span>
              </div>
              <div className="row-four">
                <span className="cart-span">{ele.price}</span>
              </div>
              <div className="row-five">
                <span className="cart-span">
                  {(ele.price * ele.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <h2>Total Price: </h2>

            <h1>$ {total.toFixed(2)}</h1>
          </div>
        </div>

        <button onClick={() => callBill()} className="cart-button">
          Pay
        </button>
      </div>
    </>
  );
}
