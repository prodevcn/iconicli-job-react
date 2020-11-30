import React from 'react'
import {
  Container,
  Row,
  Button,
  Badge,
  Form,
  Table,
  Dropdown,
  ButtonGroup,
  Accordion,
  Card,
  Nav,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IcImage from 'components/lib/img'

export default function UIKit(props) {
  return (
    <Container fluid className="ui">
      <Row className="ui__row">
        <div>
          <h1>Heading 1</h1>Î<h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </Row>
      <Row className="ui__row">
        <i className="preloader" />
      </Row>
      <Row className="ui__row">
        <Button size="sm" variant="primary">
          Primary
        </Button>{' '}
        <Button size="sm" variant="secondary">
          Secondary
        </Button>{' '}
        <Button size="sm" variant="success">
          Success
        </Button>{' '}
        <Button size="sm" variant="warning">
          Warning
        </Button>{' '}
        <Button size="sm" variant="danger">
          Danger
        </Button>{' '}
        <Button size="sm" variant="info">
          Info
        </Button>{' '}
        <Button size="sm" variant="light">
          Light
        </Button>{' '}
        <Button size="sm" variant="dark">
          Dark
        </Button>{' '}
        <Button size="sm" variant="link">
          Link
        </Button>
      </Row>
      <Row className="ui__row">
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
      </Row>
      <Row className="ui__row">
        <Badge variant="primary">Primary</Badge>{' '}
        <Badge variant="secondary">Secondary</Badge>{' '}
        <Badge variant="success">Success</Badge>{' '}
        <Badge variant="danger">Danger</Badge>{' '}
        <Badge variant="warning">Warning</Badge>{' '}
        <Badge variant="info">Info</Badge> <Badge variant="light">Light</Badge>{' '}
        <Badge variant="dark">Dark</Badge>
      </Row>

      <Row className="ui__row">
        <Button className="btn-icon">
          <FontAwesomeIcon icon={'cog'} />
          .btn-icon
        </Button>
      </Row>

      <Row className="ui__row">
        <Nav className="menu-tabs" variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0">Item 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Item 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Item 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row className="ui__row">
        <div className="tag">
          <FontAwesomeIcon className="tag__close" icon="times" />
          item 1
        </div>
      </Row>

      <Row className="ui__row">
        <IcImage src="https://www.dw.com/image/53008431_301.jpg" />
      </Row>

      <Row className="ui__row">
        <Dropdown as={ButtonGroup} alignRight="true">
          <Button variant="light">mix it up style-wise</Button>
          <Dropdown.Toggle split variant="primary" id="dropdown-custom-2" />
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>

      <Row className="ui__row">
        <Accordion className="ic-accordion" defaultActiveKey="0">
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            className="ic-accordion__button"
            as={Button}
            eventKey="0"
          >
            Click me!
          </Accordion.Toggle>
        </Accordion>
      </Row>

      <Row className="ui__row">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Input lg</Form.Label>
            <Form.Control size="lg" type="text" placeholder="user name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Row>
      <Row className="ui__row">
        <Table className="ul-table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td className="ul-table__button">
                <span className="ul-table__button-wrapper">
                  <FontAwesomeIcon icon={'caret-up'} />
                  <p>test</p>
                </span>
              </td>
            </tr>
            <tr>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>
                Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
                1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1
              </td>
              <td className="ul-table__button">
                <span className="ul-table__button-wrapper">
                  <FontAwesomeIcon icon={'caret-up'} />
                  <p>test</p>
                </span>
              </td>
            </tr>
            <tr>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td>Item 1</td>
              <td className="ul-table__button">
                <span className="ul-table__button-wrapper">
                  <FontAwesomeIcon icon={'caret-up'} />
                  <p>test</p>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}
