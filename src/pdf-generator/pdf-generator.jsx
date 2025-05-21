import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import HmSignDoc from './templates/hm-sign-doc/hm-sign-doc';
import './templates/hm-sign-doc/hm-sgin-doc.css';

const PdfGenerator = ({ studentName, courseName, issueDate }) => {
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
    pdf.save(`${studentName || 'verification'}.pdf`);
  };

  return (
    <div>
      <div ref={printRef}>
        <HmSignDoc
          studentName={studentName}
          courseName={courseName}
          issueDate={issueDate}
        />
      </div>
      <button onClick={handleGeneratePdf} className="download-button">
        Download PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
