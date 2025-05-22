import React, { useState } from 'react';
import './pdf-form.css';

const PdfForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    fromName: '',
    orderNumber: '',
    issueDate: '',
    toName: '',
    subject: '',
    ref: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="pdf-form">
      <div className="form-group">
        <label>Institute Name:</label>
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>From Name:</label>
        <input
          type="text"
          name="fromName"
          value={formData.fromName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Order Number:</label>
        <input
          type="text"
          name="orderNumber"
          value={formData.orderNumber}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Issue Date:</label>
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>To Name:</label>
        <textarea
          name="toName"
          value={formData.toName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Reference:</label>
        <input
          type="text"
          name="ref"
          value={formData.ref}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Body:</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          rows="6"
        />
      </div>

      <button type="submit" className="submit-button">
        Update PDF Preview
      </button>
    </form>
  );
};

export default PdfForm; 