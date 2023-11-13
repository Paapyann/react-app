import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Styles from "./styles.module.css";

function TextControlsExample() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Any questions?</h3>
      <br />
      <br />
      <br />
      <div className={Styles.maindiv}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={Styles.labels} style={{ marginTop: "1%" }}>
              Email address
            </Form.Label>
            <Form.Control
              className={Styles.formcontrol}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className={Styles.labels}>
              Describe your problem
            </Form.Label>
            <Form.Control
              className={Styles.formcontrol}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="success" className={Styles.button}>
            Send
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
}

export default TextControlsExample;
