import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './cv.css'; // Import your CSS file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFDisplay = () => {
  const pdfUrl = 'react_portfolio/src/assets/logo/CV-Adarsh Mungra.pdf'; // Replace with your CV PDF URL

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-display">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Previous
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Next
      </button>
    </div>
  );
};

export default PDFDisplay;
