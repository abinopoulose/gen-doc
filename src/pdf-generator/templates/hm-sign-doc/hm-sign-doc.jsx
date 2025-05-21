import React from 'react';
import './hm-sgin-doc.css';

const HmSignDoc = ({ studentName, courseName, issueDate }) => (
  <div className="page">
    <div className="header">
      <h1>ABCDE School</h1>
      <p>Digital Verification Certificate</p>
    </div>

    <div className="content">
      <p><strong>Student Name:</strong> {studentName}</p>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Date of Issue:</strong> {issueDate}</p>

      <h2>Verification Details</h2>
      <p>
        This is to certify that the information provided above has been
        verified against our official records. The document is digitally
        generated and is valid without a signature.
      </p>

      <h2>Instructions</h2>
      <ul>
        <li>Keep this document for your records.</li>
        <li>Any alterations will void the verification.</li>
        <li>Contact the administration for any queries.</li>
      </ul>
    </div>

    <div className="footer">
      ABCD School • 1234 Elm Street, Hometown, Country • +91 1234567890
    </div>
  </div>
);

export default HmSignDoc;
