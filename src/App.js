import React, { Fragment } from "react";
import PdfDocument from "./components/pdf/pdf-document";
import { PDFViewer } from "@react-pdf/renderer";

export const App = () => {
  return (
    <Fragment>
      <PDFViewer width="100%" height="990" className="App">
        <PdfDocument />
      </PDFViewer>
    </Fragment>
  );
};

export default App;
