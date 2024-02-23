import { useNavigatePages } from "../hooks/useNavigatePages";
import { CustomizeButton } from "../components/CustomizeButton/CustomizeButton";
import { Slider } from "../components/Slider/Slider";

export function Welcome() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Welcome to Shopping</h1>

      <CustomizeButton
        text="Comprar"
        color="#01eac2"
        onclick={() => {
          handleNavigation(`/shopping`);
        }}
      ></CustomizeButton>

      <CustomizeButton
        text="Solicitar Devolution Fast"
        color="#acc2ef"
        onclick={() => {
          handleNavigation(`/bills`);
        }}
      ></CustomizeButton>

      <Slider />
    </>
  );
}
