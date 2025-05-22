import React, { useState } from 'react';
import PdfGenerator from './pdf-generator/pdf-generator';
import PdfForm from './pdf-form/pdf-form';

function App() {
  const [formData, setFormData] = useState({
    schoolName: '',
    fromName: '',
    orderNumber: '',
    issueDate: '',
    toName: '',
    subject: '',
    ref: '',
    body: '',
    footer: ''
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <PdfForm onSubmit={handleFormSubmit} />
      <PdfGenerator {...formData} />
    </div>
  );
}

export default App;
