import { Image, StyleSheet } from "@react-pdf/renderer";
import SignImg from "../assets/sign.jpg";

const styles = StyleSheet.create({
  sign: {
    width: "100%",
    height: 85,
    marginTop: 22,
  },
});

export const Signature = () => {
  return <Image src={SignImg} style={styles.sign} />;
};
