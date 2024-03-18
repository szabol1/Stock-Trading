import { Form, Button, Row, Col } from 'react-bootstrap';

function LoginForm() {
  return (
    <Row style = {{height: "90vh"}}>
    <Col className="bg-image" ></Col>
    <Col className="d-flex justify-content-center form" style = {{paddingTop: "6rem"}}>
      <div>
      <h1 className="text-center mb-4 text-white">Login</h1>
    <Form className="mx-auto bg-white rounded" style = {{padding: "4rem"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>
   </Col>
   </Row>
  );
}

export default LoginForm;