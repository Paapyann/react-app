import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img1 from "../../images/handsome_pic_vtc.jpg";
import img2 from "../../images/IMG_6468.jpg";
import logos from "../../images/Untitled.png";

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
      <h3 style={{ textAlign: "center" }}>Team members</h3>
      <div
        style={{
          backgroundColor: "beige",
          width: "70%",
          height: "500px",
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        <div>
          <Image src={img1} rounded style={{ marginTop: "20%" }} />
          <p style={{ fontSize: "20px", textAlign: "center" }}>Levon Papyan</p>
          <p style={{ fontSize: "16px", textAlign: "center" }}>
            Page developer
          </p>
        </div>
        <div>
          <Image src={img2} rounded style={{ marginTop: "20%" }} />
          <p style={{ fontSize: "20px", textAlign: "center" }}>Nane Dnoyan</p>
          <p style={{ fontSize: "16px", textAlign: "center" }}>Page designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
