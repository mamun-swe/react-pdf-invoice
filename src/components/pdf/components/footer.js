import { StyleSheet, View, Image } from "@react-pdf/renderer";
import oaHeadImg from "../assets/oa-head.png";
import oilHeadImg from "../assets/oil-head.png";
import otlFooterImg from "../assets/otl-footer.png";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  image: {
    width: "100%",
    height: "70px",
  },
});

export const PdfFooter = () => {
  return (
    <View style={styles.footer} fixed>
      <Image style={styles.image} src={otlFooterImg} />
    </View>
  );
};
