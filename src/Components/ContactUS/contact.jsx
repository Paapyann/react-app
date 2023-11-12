import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TextControlsExample() {
  return (
    <div style={{ margin: "auto" }}>
      <Form>
        <h3 style={{ textAlign: "center" }}>Any questions?</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describe your problem</Form.Label>
          <Form.Control style={{ width: "50%" }} as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success">Send</Button>{" "}
      </Form>
    </div>
  );
}

export default TextControlsExample;
