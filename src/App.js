import React from "react";
import PdfDocument from "./components/pdf/pdf-document";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DataTable } from "./components/table";
import tableData from "./data.json";

export const App = () => {
  return (
    <div className="App">
      <div className="container py-3 mx-auto">
        <div className="w-full mb-3">
          <DataTable data={tableData} />
        </div>

        <div className="text-right">
          <PDFDownloadLink
            document={<PdfDocument data={tableData} />}
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
