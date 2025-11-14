import "bootstrap/dist/css/bootstrap.min.css";
import { Stack,Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';
const BootstrapExample = () => {
  return (
    <div>
      <h3>Bootstrap Example</h3>
      <button className="btn btn-info">Add </button>
      <button className="btn btn-danger">Cancel </button>
      <hr />
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export default BootstrapExample;
