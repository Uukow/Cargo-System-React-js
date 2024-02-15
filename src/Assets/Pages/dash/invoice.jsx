import React from 'react'
import '../../Styles/Style.css';

function invoice() {
  return (
    <div>

<div className="card">
  <div className="card-header bg-black" />
  <div className="card-body">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <i className="far fa-building text-danger fa-6x float-start" />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ul className="list-unstyled float-end">
            <li style={{fontSize: 30, color: 'red'}}>Uukow Cargo</li>
            <li>123, Wadajir</li>
            <li>+252-615-031623</li>
            <li>info@uukow.com</li>
          </ul>
        </div>
      </div>
      <div className="row text-center">
        <h3 className="text-uppercase text-center mt-3" style={{fontSize: 40}}>Invoice</h3>
        <p>123456789</p>
      </div>
      <div className="row mx-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samsung TV</td>
              <td><i className="fas fa-dollar-sign" /> 500,00</td>
            </tr>
            <tr>
              <td>JBL Speaker</td>
              <td><i className="fas fa-dollar-sign" /> 300,00</td>
            </tr>
            <tr>
              <td>Macbook Air</td>
              <td><i className="fas fa-dollar-sign" /> 1000,00</td>
            </tr>
            <tr>
              <td>Iphone 11 PRO</td>
              <td><i className="fas fa-dollar-sign" /> 5000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <ul className="list-unstyled float-end me-0">
            <li><span className="me-3 float-start">Total Amount:</span><i className="fas fa-dollar-sign" /> 6850,00
            </li>
            <li> <span className="me-5">Discount:</span><i className="fas fa-dollar-sign" /> 500,00</li>
            <li><span className="float-start" style={{marginRight: 35}}>Shippment: </span><i className="fas fa-dollar-sign" /> 500,00</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xl-8" style={{marginLeft: 60}}>
          <p className="float-end" style={{fontSize: 30, color: 'red', fontWeight: 400, fontFamily: 'Arial, Helvetica, sans-serif'}}>
            Total:
            <span><i className="fas fa-dollar-sign" /> 6350,00</span></p>
        </div>
      </div>
      <div className="row mt-2 mb-5">
        <p className="fw-bold">Date: <span className="text-muted">23 June 2023</span></p>
        <p className="fw-bold mt-3">Signature:</p>
      </div>
    </div>
  </div>
  <div className="card-footer bg-black" />
</div>

    </div>
  )
}

export default invoice