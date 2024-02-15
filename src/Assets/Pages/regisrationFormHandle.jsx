import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import "../Styles/Style.css";
import { FaTrash, FaPen, FaPrint } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedFormData);
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
    clearForm();
  };

  const handleShow = () => setShow(true);

  // const successAlert = () => {
  //   Swal.fire({
  //     title: 'Good job!',
  //     text: 'Si sax ah ayaad u diiwaan Galisay!',
  //     icon: 'success'
  //   });
  // };
  const history = useNavigate();

  const handleNew = () => {
  history('/Dashboar');
};

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleReceiverNameChange = (e) => {
    setReceiverName(e.target.value);
  };

  const handleSenderPhoneChange = (e) => {
    setSenderPhone(e.target.value);
  };

  const handleReceiverPhoneChange = (e) => {
    setReceiverPhone(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      senderName.trim() !== '' &&
      receiverName.trim() !== '' &&
      senderPhone.trim() !== '' &&
      receiverPhone.trim() !== '' &&
      productName.trim() !== '' &&
      quantity.trim() !== ''
    ) {
      if (editIndex !== null) {
        // Update existing data
        const updatedFormData = [...formData];
        updatedFormData[editIndex] = {
          senderName,
          receiverName,
          senderPhone,
          receiverPhone,
          productName,
          quantity
        };
        setFormData(updatedFormData);
        setEditIndex(null);
        Swal.fire({
          title: 'Success!',
          text: 'Data updated successfully!',
          icon: 'success'
        });
      } else {
        // Add new data
        const newFormData = {
          senderName,
          receiverName,
          senderPhone,
          receiverPhone,
          productName,
          quantity
        };
        setFormData([...formData, newFormData]);
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully registered!',
          icon: 'success'
        });
      }

      clearForm();
    }
  };

  const handleEdit = (index) => {
    const formDataToEdit = formData[index];
    setSenderName(formDataToEdit.senderName);
    setReceiverName(formDataToEdit.receiverName);
    setSenderPhone(formDataToEdit.senderPhone);
    setReceiverPhone(formDataToEdit.receiverPhone);
    setProductName(formDataToEdit.productName);
    setQuantity(formDataToEdit.quantity);
    setEditIndex(index);
    handleShow();
    };
    
    const handleDelete = (index) => {
    Swal.fire({
    title: 'Ma Hubtaa?',
    text: "in aad delete gareyn rabtid Client-gaan",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.isConfirmed) {
    const updatedFormData = formData.filter((data, i) => i !== index);
    setFormData(updatedFormData);
    Swal.fire({
    title: 'Deleted!',
    text: 'Si sax ah ayaad u Delete Gareysay.',
    icon: 'success'
    });
    }
    });
    };
    
    const clearForm = () => {
    setSenderName('');
    setReceiverName('');
    setSenderPhone('');
    setReceiverPhone('');
    setProductName('');
    setQuantity('');
    };
    

    const handleExport = () => {
      // Create a new window to print the data
      const printWindow = window.open('', '', 'height=400,width=800');
    
      // Build a HTML table with the data
      const tableRows = formData.map((data) => {
        return `
          <tr>
            <td>${data.senderName}</td>
            <td>${data.receiverName}</td>
            <td>${data.senderPhone}</td>
            <td>${data.receiverPhone}</td>
            <td>${data.productName}</td>
            <td>${data.quantity}</td>
          </tr>
        `;
      });
      const tableHTML = `
        <table>
          <thead>
            <tr>
            <th>Sender Name</th>
            <th>Receiver Name</th>
            <th>Sender Phone</th>
            <th>Receiver Phone</th>
            <th>Product Name</th>
            <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows.join('')}
          </tbody>
        </table>
      `;
    
      // Write the HTML table to the print window
      printWindow.document.write(tableHTML);
    
      // Print the window
      printWindow.print();
    };

    
    
    return (
      
    <div>
    <div class="section-title">
    <br/>
    <br/>
          <h2>Dashboard</h2>
          <br/>
          <br/>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-sm-3'>

        <Button variant="success" onClick={handleExport}>
              Print Data <FaPrint />
        </Button>
        
      
      </div>
      <div className='col-sm-6'>
      <Button variant="primary" onClick={handleNew}>
        Go To Dashboard 
      </Button>
      </div>
      <div className='col-sm-3'>
    
       
    <Button variant="primary float-end" onClick={handleShow}>
    <div className='AddNewClent'>
    Add New Client 
    </div>
    </Button>
    
    </div>
    </div>
    </div>
    <Modal show={show} onHide={handleClose}>
    <div className='container'>
    <Modal.Header closeButton>
      <Modal.Title>Client Registration</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="senderName">
          <Form.Label>Sender Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter sender's name"
            value={senderName}
            onChange={handleSenderNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="receiverName">
          <Form.Label>Receiver Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter receiver's name"
            value={receiverName}
            onChange={handleReceiverNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="senderPhone">
          <Form.Label>Sender Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter sender's phone number"
            value={senderPhone}
            onChange={handleSenderPhoneChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="receiverPhone">
          <Form.Label>Receiver Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter receiver's phone number"
            value={receiverPhone}
            onChange={handleReceiverPhoneChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="quantity">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Weight"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editIndex !== null ? 'Update' : 'Register'}
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
    </div>
  </Modal>

  <div className="container mt-4">
    <h2>Registered Clients</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Sender Name</th>
          <th>Receiver Name</th>
          <th>Sender Phone</th>
          <th>Receiver Phone</th>
          <th>Product Name</th>
          <th>Weight</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td>{data.senderName}</td>
            <td>{data.receiverName}</td>
            <td>{data.senderPhone}</td>
            <td>{data.receiverPhone}</td>
            <td>{data.productName}</td>
            <td>{data.quantity}</td>
            <td>
              <Button
                variant="info"
                onClick={() => handleEdit(index)}
              >
                <FaPen />
              </Button>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => handleDelete(index)}
              >
                <FaTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
);
};

export default RegistrationForm;