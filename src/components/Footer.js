import Nav from 'react-bootstrap/Nav'

function BasicExample() {
  return (
    <Nav
    className='footer'
      activeKey='/home'
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href='/home'>Api</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='Legal'>Legal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='Impressum'>Impressum</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey='Impressum'>Apply to YC</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey='Impressum'>FAQ</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default BasicExample
