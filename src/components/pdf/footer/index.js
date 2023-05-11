import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "red",
  },
});

export const PdfFooter = () => {
  return (
    <>
      <Text style={styles.footer} fixed>
        PDF footer
      </Text>
    </>
  );
};
