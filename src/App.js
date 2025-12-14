import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "Wassim";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: '18rem', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', backgroundColor: 'white', border: 'none' }}>
        <Card.Body className="text-center">
          <div style={{ marginBottom: '20px' }}>
            <Image />
          </div>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h3 style={{ color: '#333' }}>
          Hello, {firstName ? firstName : "there"}!
        </h3>
      </div>
    </Container>
  );
}

export default App;
