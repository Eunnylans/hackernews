import { useState, useEffect } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

function NavScrollExample(props) {
  const [input, setInput] = useState('')
  const [sendInput, setSendInput] = useState('')

  props.func(sendInput)
  const commitInput = e => {
    e.preventDefault()
    setSendInput(input)
  }
  return (
    <Navbar className='nav' bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Hacker News</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >New</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("past")}>Past</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("Comments")}>Comments</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("Ask")}>Ask</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("Show")}>Show</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("Jobs")}>Jobs</Nav.Link>
            <Nav.Link onClick={()=> setSendInput("Submit")}>Submit</Nav.Link>
          </Nav>
          <Form className='d-flex' onSubmit={commitInput}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={input}
              onInput={e => setInput(e.target.value)}
              autoFocus
            />
            <Button type='submit' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
