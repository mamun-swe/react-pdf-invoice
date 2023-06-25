import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import oaHeadImg from "../assets/oa-head.png";
import oilHeadImg from "../assets/oil-head.png";
import otlHeadImg from "../assets/otl-head.png";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "110px",
  },
  titleText: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    backgroundColor: "red",
  },
  flexJustifyBetween: {
    display: "inline-flex",
    backgroundColor: "red",
    justifyContent: "space-between",

    content: {
      width: "50%",
    },
  },
});

export const PdfHeader = () => {
  return (
    <View fixed>
      <Image style={styles.image} src={otlHeadImg} />
      <View style={{ textAlign: "center" }}>
        <Text style={styles.titleText}>PROFORMA INVOICE</Text>
      </View>

      <View style={styles.flexJustifyBetween}>
        <Text style={{ fontSize: "13px", marginBottom: 0, width: "50%" }}>
          PROFORMA INVOICE OF
        </Text>
        <Text style={{ fontSize: "13px", marginBottom: 0, width: "50%" }}>
          PROFORMA INVOICE OF
        </Text>
      </View>

      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
  );
};
