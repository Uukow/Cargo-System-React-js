import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';


function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const successAlert = () => {
    Swal.fire({  
        title: 'Good job!',  
        text: 'Si Sax ah ayaad U Dirtay Xogta',
        icon: 'success'
      }); 
}
  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dirista Alaabta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Diraha</Form.Label>
              <Form.Control
                type="emtextail"
                placeholder="Magaca Diraha Oo Seddaxan Halkaan Gali"
                autoFocus required
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Numberka Diraha</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numberka Diraha Halkaan Gali"
                autoFocus required
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Loo Diraha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Magaca Loo Diraha Oo Seddaxan Halkaan Gali"
                autoFocus required
              />
            </Form.Group>

            
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Numberka Loo Diraha</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numberka Loo Diraha Halkaan Gali"
                autoFocus required
              />
            </Form.Group>

            
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Alaabta Magaceeda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alaabta Magaceeda Halkaan Gali"
                autoFocus required
              />
            </Form.Group>

            
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Cabirka Alaabta</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cabirka Alaabta Halkaan Gali"
                autoFocus required
              />
            </Form.Group>



            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Discription</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={successAlert}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    </div>
  )
}

export default Register