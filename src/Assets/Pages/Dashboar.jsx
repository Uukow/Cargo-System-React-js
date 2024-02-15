import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/dash.css";

function Dashboar() {

    const history = useNavigate();

    const handleEmp = () => {
    history('/Employees');
  };
  const handleClients = () => {
    history('/RegistrationForm');
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
      <br />
      <br />
      <div className='row'>
      <div className='col-sm-2'></div>
        <div className='col-sm-3'>
        <button className="myButton" variant="primary" onClick={handleEmp}>
        Shaqaalaha
      </button>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-3'>
        <button className="myButton" variant="primary" onClick={handleClients}>
        Macaamiisha
      </button>

        </div>
        <div className='col-sm-2'></div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Dashboar
