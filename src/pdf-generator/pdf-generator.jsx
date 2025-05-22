import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import HmSignDoc from './templates/hm-sign-doc/hm-sign-doc';
import './css/pdf-generator.css';

const PdfGenerator = ({ }) => {
  const printRef = useRef();
  
  // Predefined variables
  const schoolName = 'ABaaCDE';
  const fromName = "Jon Don";
  const toName = `Don Bose, 
  Engineer, 
  Google`;
  const issueDate = "2024-03-20";
  const orderNumber = "01/25";
  const subject = "Subject";
  const ref = "Ref";
  const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

`

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
    <div className='pdf-container'>
      <div ref={printRef}>
        <HmSignDoc
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
      {/* <div className='download-button-container'> */}
        <button onClick={handleGeneratePdf} className="download-button">
          <b>Download PDF</b>
        </button>
      {/* </div> */}
      
    </div>
  );
};

export default PdfGenerator;
