import './leo.css';

const TemplateLeo = ({ schoolName, fromName, toName, issueDate, orderNumber, subject, ref, body, footer }) => (
  <div className="page">
    <div className="header">
      <h1 className="school-name">{schoolName}</h1>
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
        {body.split('\n').map((paragraph, index) => (
          <p key={index} className="body-paragraph">{paragraph}</p>
        ))}
      </div>
    </div>

    <div className="footer">
      {footer || 'ABCD • 1234 Elm Street, Hometown, Country • +91 1234567890'}
    </div>
  </div>
);

export default TemplateLeo;
