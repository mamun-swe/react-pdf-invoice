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
      padding: 10,
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

          {i + 1 === totalPages ? (
            <View>
              <Text>Signature & Product sum</Text>
            </View>
          ) : null}

          <View fixed>
            <Text style={{ fontSize: 12 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only 9ve centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 16-0s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recentD ly with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>

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
