import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#707070";
const borderWidth = 1;
const padding = "3px";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: borderColor,
    backgroundColor: "#EDEDED",
    borderWidth: borderWidth,
    fontSize: 9,
    fontWeight: "bold",
  },
  artical: {
    padding,
    width: "10%",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  product_id: {
    padding,
    width: "8%",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  composition: {
    padding,
    width: "27%",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  color: {
    padding,
    width: "8%",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  width: {
    padding,
    width: "7%",
    textAlign: "center",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  weight: {
    padding,
    width: "12%",
    textAlign: "center",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  quantity: {
    padding,
    width: "7%",
    textAlign: "center",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  price: {
    padding,
    width: "11%",
    textAlign: "center",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  us_dollar: {
    padding,
    width: "10%",
  },
});

export const TableHeader = () => (
  <View style={styles.container}>
    <Text style={[styles.artical, styles.artical]}>Article#</Text>
    <Text style={styles.product_id}>Prod ID</Text>
    <Text style={styles.composition}>Composition</Text>
    <Text style={styles.color}>Color</Text>
    <Text style={styles.width}>Width</Text>
    <Text style={styles.weight}>Wgt (kg) (±10)</Text>
    <Text style={styles.quantity}>Qty yrd</Text>
    <Text style={styles.price}>Price US$/yrd</Text>
    <Text style={styles.us_dollar}>US. Dollars</Text>
  </View>
);
