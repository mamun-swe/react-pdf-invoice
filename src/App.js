import React from "react";
import tableData from "./data.json";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { PiInvoice } from "./components/pdf/pdf-document/pi-invoice";

export const App = () => {
  return (
    <div className="App">
      <div className="container py-3 mx-auto">
        <div className="w-full mb-3">
          <PDFViewer className="w-full h-screen">
            <PiInvoice data={tableData} />
          </PDFViewer>
        </div>

        <div className="text-right">
          <PDFDownloadLink
            document={<PiInvoice data={tableData} />}
            fileName="invoice.pdf"
          >
            <button
              type="button"
              className="px-4 py-3 text-sm text-white rounded-md font-bold bg-orange-400"
            >
              Download now!
            </button>
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default App;
