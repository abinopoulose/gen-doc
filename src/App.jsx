import React from 'react';
import PdfGenerator from './pdf-generator/pdf-generator';

function App() {
  return (
    <PdfGenerator
      studentName="John Doe"
      courseName="Mathematics"
      issueDate="2025-05-21"
    />
  );
}

export default App;
