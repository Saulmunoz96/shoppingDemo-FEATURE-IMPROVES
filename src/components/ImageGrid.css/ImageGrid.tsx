import { useNavigate } from "react-router-dom";
import "./ImageGrid.css";
import { ImagerGridProps } from "../../utils/interfaces/ImageGridProps.interface";

export const ImageGrid = ({ image, id }: ImagerGridProps) => {
  const navigate = useNavigate();
  return (
    <div className="image-div">
      <img
        src={image}
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      />
    </div>
  );
};
