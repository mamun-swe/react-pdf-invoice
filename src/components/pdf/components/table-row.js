import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const padding = "4px 2px";
const borderColor = "#dfdfdf";
const borderWidth = 1;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",

    fontSize: 8,
    color: "#000",
    fontWeight: "bold",
  },
  artical: {
    padding,
    width: "10%",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
    borderLeftColor: borderColor,
    borderLeftWidth: borderWidth,
  },
  product_id: {
    padding,
    width: "8%",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  composition: {
    padding,
    width: "27%",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  color: {
    padding,
    width: "8%",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  width: {
    padding,
    width: "7%",
    textAlign: "center",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  weight: {
    padding,
    width: "12%",
    textAlign: "center",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  quantity: {
    padding,
    width: "7%",
    textAlign: "center",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  price: {
    padding,
    width: "11%",
    textAlign: "center",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
  us_dollar: {
    padding,
    width: "10%",
    textAlign: "right",
    borderBottomColor: borderColor,
    borderBottomWidth: borderWidth,
    borderRightColor: borderColor,
    borderRightWidth: borderWidth,
  },
});

export const TableRow = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.artical}>{item.article}</Text>
      <Text style={styles.product_id}>{item.product_id}</Text>
      <Text style={styles.composition}>{item.composition}</Text>
      <Text style={styles.color}>{item.color}</Text>
      <Text style={styles.width}>{item.width}</Text>
      <Text style={styles.weight}>{item.weight}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.us_dollar}>{item.us_dollar}</Text>
    </View>
  );
};
