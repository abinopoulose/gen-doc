import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateLeo from '../templates/leo';
import './pdf-generator.css';

const PdfGenerator = ({ 
  // schoolName,
  fromName,
  orderNumber,
  issueDate,
  toName,
  subject,
  ref,
  body,
  footer,
  yoursFaithfully
}) => {
  const printRef = useRef();
  
  const handleGeneratePdf = async () => {
    const element = printRef.current;
    
    // Get the full height of the content
    const fullHeight = element.scrollHeight;
    const fullWidth = element.scrollWidth;
    
    // Create a canvas with the full dimensions
    const canvas = await html2canvas(element, {
      scale: 2,
      width: fullWidth,
      height: fullHeight,
      windowWidth: fullWidth,
      windowHeight: fullHeight,
      scrollX: 0,
      scrollY: 0,
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (fullHeight * pdfWidth) / fullWidth;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fromName || 'verification'}.pdf`);
  };

  return (
    <div className="pdf-container">
      <div className='scrollable-container'>
        <TemplateLeo
          // schoolName={schoolName}
          fromName={fromName}
          orderNumber={orderNumber}
          issueDate={issueDate}
          toName={toName}
          subject={subject}
          ref={ref}
          body={body}
          footer={footer}
          yoursFaithfully={yoursFaithfully}
        />
      </div>

      <div ref={printRef} className='render-outside'>
        <TemplateLeo
          // schoolName={schoolName}
          fromName={fromName}
          orderNumber={orderNumber}
          issueDate={issueDate}
          toName={toName}
          subject={subject}
          ref={ref}
          body={body}
          footer={footer}
          yoursFaithfully={yoursFaithfully}
        />
      </div>
      
      <button onClick={handleGeneratePdf} className="download-button">
        <b>Download PDF</b>
      </button>
    </div>
  );
};

export default PdfGenerator;
