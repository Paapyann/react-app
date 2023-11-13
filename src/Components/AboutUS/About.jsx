import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img1 from "../../images/handsome_pic_vtc.jpg";
import img2 from "../../images/IMG_6468.jpg";
import logos from "../../images/Untitled.png";
import Styles from "./styles.module.css";

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
      <h3>Team members</h3>
      <div className={Styles.maindiv}>
        <div>
          <Image src={img1} rounded style={{ marginTop: "40%" }} />
          <p className={Styles.Membername}>Levon Papyan</p>
          <p className={Styles.description}>Page developer</p>
        </div>
        <div>
          <Image src={img2} rounded style={{ marginTop: "40%" }} />
          <p className={Styles.Membername}>Nane Dnoyan</p>
          <p className={Styles.description}>Page designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
