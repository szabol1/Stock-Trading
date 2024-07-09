import { Form, Button, Row, Col } from 'react-bootstrap';

function LoginForm() {
  return (
    <Row style = {{height: "90vh"}}>
    <Col className="bg-image"></Col>
    <Col className="d-flex justify-content-center form" style = {{paddingTop: "6rem"}}>
      <div>
          <Form className="mx-auto rounded Login" style={{padding: "3rem"}}>
              <h1 className="text-center mb-5 text-white">Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                  <Form.Text className="text-white">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
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