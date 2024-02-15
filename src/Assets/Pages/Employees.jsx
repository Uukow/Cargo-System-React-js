import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { FaTrash, FaPen, FaPrint } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const history = useNavigate();

  useEffect(() => {
    const storedFormData = JSON.parse(
      sessionStorage.getItem('formData')
    ) || [];
    setFormData(storedFormData);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleClose = () => {
    setShow(false);
    setEditIndex(null);
    clearForm();
  };

  const handleShow = () => setShow(true);

  const handleNew = () => {
    history('/Dashboar');
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      age.trim() !== ''
    ) {
      if (editIndex !== null) {
        // Update existing data
        const updatedFormData = [...formData];
        updatedFormData[editIndex] = {
          firstName,
          lastName,
          email,
          phone,
          age,
        };
        setFormData(updatedFormData);
        setEditIndex(null);
        Swal.fire({
          title: 'Success!',
          text: 'Data updated successfully!',
          icon: 'success',
        });
      } else {
        // Add new data
        const newFormData = {
          firstName,
          lastName,
          email,
          phone,
          age,
        };
        setFormData([...formData, newFormData]);
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully registered!',
          icon: 'success',
        });
      }

      clearForm();
    }
  };

  const handleEdit = (index) => {
    const formDataToEdit = formData[index];
    setFirstName(formDataToEdit.firstName);
    setLastName(formDataToEdit.lastName);
    setEmail(formDataToEdit.email);
    setPhone(formDataToEdit.phone);
    setAge(formDataToEdit.age);
    setEditIndex(index);
    handleShow();
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this client!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedFormData = formData.filter((data, i) => i !== index);
        setFormData(updatedFormData);
        Swal.fire({
            title: 'Deleted!',
            text: 'Client has been deleted.',
            icon: 'success',
            });
            }
            });
            };
            
            const clearForm = () => {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setAge('');
            };





            const handleExport = () => {
              // Create a new window to print the data
              const printWindow = window.open('', '', 'height=400,width=800');
            
              // Build a HTML table with the data
              const tableRows = formData.map((data) => {
                return `
                  <tr>
                    <td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>${data.email}</td>
                    <td>${data.phone}</td>
                    <td>${data.age}</td>
                  </tr>
                `;
              });
              const tableHTML = `
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Age</th>
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
            <div className="section-title">
            <br />
            <br />
            <h2>Employees</h2>
            <br />
            <br />
            </div>
            <div className="container">
            <div className="row">
            <div className="col-sm-3">
            <Button variant="success" onClick={handleExport}>
              Print Data  <FaPrint />
        </Button>
            </div>
            <div className="col-sm-6">
            <Button variant="primary" onClick={handleNew}>
        Go To Dashboard 
      </Button>
            </div>
            <div className="col-sm-3">
            <Button variant="primary float-end" onClick={handleShow}>
            <div className="AddNewClent">Add New Client</div>
            </Button>
            </div>
            </div>
            </div>
            <Modal show={show} onHide={handleClose}>
            <div className='container text-sm-start'>
            <Modal.Header closeButton>
            
            <Modal.Title>Employees Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-1'  controlId="firstName">
            <Form.Label className='float-start'>First Name</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            />
            </Form.Group>
            <Form.Group className="mb-1" controlId="lastName">
          <Form.Label className='float-start'>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="email">
          <Form.Label className='float-start'>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="phone">
          <Form.Label className='float-start'>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="age">
          <Form.Label className='float-start'>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter age"
            value={age}
            onChange={handleAgeChange}
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
    <h2>All Employees</h2>
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.age}</td>
                <td>
                  <Button variant="info" onClick={() => handleEdit(index)}>
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
export default Employees;