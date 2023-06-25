import {
  Document,
  Page,
  Font,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { PdfHeader } from "../components/header";
import { PdfFooter } from "../components/footer";
import { TableHead } from "../components/table-head";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import { TableRow } from "../components/table-row";

const Quixote = (props) => (
  <Document>
    <Page style={styles.body} size={"A4"} wrap>
      <PdfHeader />

      <View wrap>
        <TableHead />

        {props.data.map((item, key) => (
          <TableRow key={key} item={item} />
        ))}
      </View>

      <View
        style={{
          backgroundColor: "red",
        }}
        fixed
      >
        <Text style={{ fontSize: 12 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          9ve centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 16-0s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recentD ly with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>

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
  text: {
    fontSize: 8,
    fontFamily: "Roboto",
    color: "red",
  },
});

export default Quixote;
