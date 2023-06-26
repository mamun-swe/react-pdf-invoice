import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import { PdfHeader } from "../components/header";
import { PdfFooter } from "../components/footer";
import { TableHead } from "../components/table-head";
import { TableRow } from "../components/table-row";
import { TableFooter } from "../components/table-footer";
import { Signature } from "../components/signature";

export const PiInvoice = ({ data }) => {
  // Calculate the total number of pages required
  const totalPages = Math.ceil(data.length / 7);

  Font.register({
    family: "Roboto",
    fonts: [{ src: RobotoRegular }, { src: RobotoBold, fontWeight: "bold" }],
  });

  // Custom styles for PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "#FFFFFF",
      padding: 25,
      fontFamily: "Roboto",
    },
    item: {
      width: "50%",
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
    },
  });

  // Render each page
  const renderPages = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * 7;
      const endIndex = startIndex + 7;
      const elements = data.slice(startIndex, endIndex);

      const page = (
        <Page size="A4" style={styles.page} key={i}>
          <PdfHeader />
          <TableHead />
          {elements.map((element, index) => (
            <TableRow item={element} key={`table-row-${index}`} />
          ))}

          {i + 1 < totalPages ? (
            <View fixed style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                Terms & Condition:
              </Text>
            </View>
          ) : null}

          {i + 1 === totalPages ? (
            <>
              <TableFooter />
              <View fixed style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  Terms & Condition:
                </Text>
              </View>
              <Signature />
            </>
          ) : null}

          <PdfFooter />
        </Page>
      );

      pages.push(page);
    }
    return pages;
  };

  // Render the PDF document
  return <Document>{renderPages()}</Document>;
};
