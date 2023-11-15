import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img1 from "../../images/handsome_pic_vtc.jpg";
import img2 from "../../images/IMG_6468.jpg";
import logos from "../../images/Untitled.png";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    // <div>
    //   <h3 style={{ textAlign: "center" }}>Team members</h3>
    //   <div style={{ display: "flex" }}>
    //     <Container style={{ justifyContent: "space-between" }}>
    //       <Row>
    //         <Col>
    //           <Image src={img1} rounded />
    //         </Col>
    //         <Col>
    //           <Image src={img2} rounded />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // </div>
    <div>
      <h3>The team behind this project</h3>
      <div className={Styles.maindiv}>
        <div style={{ width: "171px" }}>
          <Image src={img1} rounded style={{ marginTop: "40%" }} />
          <Link to="/about/papyan" style={{ textDecoration: "none" }}>
            <p className={Styles.Membername}>Levon Papyan</p>
          </Link>
          <p className={Styles.description}>Page developer </p>
          <p className={Styles.memberdescription}>
            Passionate web developer skilled in creating responsive and
            user-friendly websites, combining creativity with technical
            expertise to deliver seamless online experiences.
          </p>
        </div>
        <div style={{ width: "171px" }}>
          <Image
            src={img2}
            rounded
            style={{ marginTop: "40%", opacity: "1" }}
          />
          <Link to="/about/dnoyan" style={{ textDecoration: "none" }}>
            <p className={Styles.Membername}>Nane Dnoyan</p>
          </Link>
          <p className={Styles.description}>Page designer</p>
          <p className={Styles.memberdescription}>
            Creative web designer dedicated to crafting visually stunning and
            intuitive website designs, blending artistic flair with a keen eye
            for user experience to bring digital visions to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
