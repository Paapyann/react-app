import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import Image from "react-bootstrap/Image";
import image from "../../images/Untitled1.jpg";

const dnoyan = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "500px", margin: "auto" }}>
        <Image
          src={image}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        />
      </div>
      <Link to="/about">
        <button style={{ width: "110px", height: "40px" }}>Go back</button>
      </Link>
    </div>
  );
};

export default dnoyan;
