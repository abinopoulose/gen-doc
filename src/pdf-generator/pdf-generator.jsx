import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateLeo from '../templates/leo';
import './pdf-generator.css';

const PdfGenerator = ({ 
  schoolName,
  fromName,
  orderNumber,
  issueDate,
  toName,
  subject,
  ref,
  body 
}) => {
  const printRef = useRef();
  
  const handleGeneratePdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const { width: imgWidth, height: imgHeight } = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fromName || 'verification'}.pdf`);
  };

  return (
    <div className="pdf-container">
        <div ref={printRef}>
          <TemplateLeo
            schoolName={schoolName}
            fromName={fromName}
            orderNumber={orderNumber}
            issueDate={issueDate}
            toName={toName}
            subject={subject}
            ref={ref}
            body={body}
          />
        </div>
      <button onClick={handleGeneratePdf} className="download-button">
        <b>Download PDF</b>
      </button>
    </div>
  );
};

export default PdfGenerator;
