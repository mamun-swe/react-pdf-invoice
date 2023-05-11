import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const padding = "2px";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    fontSize: 8,
    color: "#000",
  },
  artical: {
    padding,
    width: "10%",
  },
  product_id: {
    padding,
    width: "8%",
  },
  composition: {
    padding,
    width: "27%",
  },
  color: {
    padding,
    width: "8%",
  },
  width: {
    padding,
    width: "7%",
    textAlign: "center",
  },
  weight: {
    padding,
    width: "12%",
    textAlign: "center",
  },
  quantity: {
    padding,
    width: "7%",
    textAlign: "center",
  },
  price: {
    padding,
    width: "11%",
    textAlign: "center",
  },
  us_dollar: {
    padding,
    width: "10%",
    textAlign: "right",
  },
});

export const TableRow = ({ items }) => {
  return (
    <>
      {items.map((item, key) => (
        <View style={styles.row} key={key}>
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
      ))}
    </>
  );
};
