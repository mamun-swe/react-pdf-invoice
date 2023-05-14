import { Document, Page, Font, Text, StyleSheet } from "@react-pdf/renderer";
import { PdfHeader } from "../header";
import { PdfFooter } from "../footer";
import { TableHeader } from "../table/header";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import { TableRow } from "../table/row";

const Quixote = (props) => (
  <Document>
    <Page style={styles.body} size={"LETTER"}>
      <PdfHeader />

      <Text style={styles.title}>Dummy text</Text>
      <Text style={styles.title}>Dummy text dsfsdf</Text>
      <Text style={styles.title}>Dummy text dsfsdf</Text>

      <TableHeader></TableHeader>
      <TableRow items={props.data} />

      <PdfFooter />
    </Page>
  </Document>
);

Font.register({
  family: "Roboto",
  fonts: [{ src: RobotoRegular }, { src: RobotoBold, fontWeight: "bold" }],
});

const styles = StyleSheet.create({
  body: {
    padding: 20,
    fontFamily: "Roboto",
  },
});

export default Quixote;
