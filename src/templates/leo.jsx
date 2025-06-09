import './leo.css';
import logo from '../assets/sh-logo.png';

const TemplateLeo = ({ fromName, toName, issueDate, orderNumber, subject, ref, body, footer, yoursFaithfully }) => (
  <div className="page">
    <div className="header">
      <div className="school-header">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="school-logo" />
        </div>
        <div className="school-info">
          <h1 className="school-name">GOVT. L.P. SCHOOL MUTHIYAMALA</h1>
          <div className="school-details">
            <p>KUDAYATHOOR P.O., PIN 685590 <br></br>
            Email: glpsmuthiyamala@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="header-line" />
      <div className="order-info">
        <span className="order-number">Order No: {orderNumber}</span>
        <span className="date">Date: {issueDate}</span>
      </div>
      <div className="from-section">
        <span>From:</span>
        <div className="name">{fromName}</div>
      </div>
      <div className="to-section">
        <span>To:</span>
        <div className="to-content">
          {toName}
        </div>
      </div>
    </div>

    <div className="content">
      <div className="letter-content">
        <div>Sir,</div>
        <div className="subject-section">
          <span>Sub:</span>
          <span className="subject"> {subject}</span>
        </div>
        <div className="ref-section">
          <span>Ref:</span>
          <span className="ref"> {ref}</span>
        </div>
        <pre>
        {body.split('\n').map((paragraph, index) => (
          <p key={index} className="body-paragraph">{paragraph}</p>
        ))}
        </pre>
        <div className='yours-faithfully-section'>
          {yoursFaithfully}
        </div>
      </div>
    </div>

    <div className="footer">
      {footer}
    </div>
  </div>
);

export default TemplateLeo;
