// import { CustomizeButton } from "../components/CustomizeButton/CustomizeButton";
// import { toast } from "sonner";
// // import TextField from "@mui/material/TextField";
// import { useNavigatePages } from "../hooks/useNavigatePages";

// export function Devolution() {
//   const { handleNavigation } = useNavigatePages();
//   return (
//     <>
//       <h1>Devolution</h1>
//       <label>Ingresa tu code de devolution</label>
//       <input
//         id="outlined-basic"
//         label="Code Devolution"
//         variant="outlined"
//         placeholder="12888999"
//         sx={{ backgroundColor: "white", width: "100%" }}
//       />

//       <CustomizeButton
//         text="Hacer devolución"
//         color="#FF4081"
//         onclick={() => {
//           toast.success(
//             `La devolución de su pedido  se ha ingresado correctamente correctamente.
//             Nos pondremos en contracto lo antes posible`,
//           );
//         }}
//       ></CustomizeButton>

//       <CustomizeButton
//         text="Regresar a comprar"
//         color="#01eac2"
//         onclick={() => {
//           handleNavigation(`/shopping`);
//         }}
//       ></CustomizeButton>
//     </>
//   );
// }
