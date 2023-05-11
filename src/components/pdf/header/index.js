import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
});

export const PdfHeader = () => {
  return (
    <>
      <Text style={styles.header} fixed>
        PDF header
      </Text>
    </>
  );
};
