import { useNavigatePages } from "../hooks/useNavigatePages";

export function NotFound() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Te equivocaste de URL</h1>
      <h2>Creo que te hace falta un cafe</h2>

      <h3>Para comprar esta taza o más productos da click en la img </h3>

      <img
        onClick={() => handleNavigation("/")}
        src="https://shedarts.com/cdn/shop/products/white-mug-Funny-Course-Developer-Mug-Coworker-Jobtitle-Gift-Idea-600709_800x.jpg?v=1650871375"
        style={{
          width: "400px",
        }}
      ></img>
    </>
  );
}
