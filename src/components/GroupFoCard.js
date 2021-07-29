import React from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'

const GroupFoCard = () => {
    return (
        <div>
            <Row xs={1} sm={2} md={3} style={{ padding: '50px' }} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col className="col-md-4 col-sm-6 col-xs-6" style={{
                  
              
            }}>
              <Card style={{
                  
                  
                  border: 'none',
                  background: '#39393b',
                  cursor: 'pointer',
                  color: 'white',
                }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <div  style={{ display: 'flex', alignItems: 'center' }}>
                  <Button style={{ marginLeft:"auto" }} type="button" className="btn btn-warning">Warning</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
    )
}

export default GroupFoCard
