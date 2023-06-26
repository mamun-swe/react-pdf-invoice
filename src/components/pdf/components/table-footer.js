import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const padding = "3px 2px";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    fontSize: 11,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    padding,
    paddingTop: 5,
    width: "72%",
  },
  quantity_view: {
    width: "7%",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
  },
  quantity: {
    padding,
    textAlign: "center",
    marginBottom: 1,
    borderBottom: "1px solid #000",
  },
  blank: {
    padding,
    width: "11%",
  },
  us_dollar_view: {
    width: "10%",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
  },
  us_dollar: {
    padding,
    textAlign: "center",
    marginBottom: 1,
    borderBottom: "1px solid #000",
  },
  amount_in_word: {
    fontSize: 9,
    color: "#000",
    fontWeight: "bold",
    marginTop: 2,
    textTransform: "uppercase",
  },
});

export const TableFooter = () => (
  <View>
    <View style={styles.container}>
      <Text style={styles.title}>TOTAL QUANTITY AND VALUE</Text>

      <View style={styles.quantity_view}>
        <Text style={styles.quantity}>1,380</Text>
      </View>
      <Text style={styles.blank} />
      <View style={styles.us_dollar_view}>
        <Text style={styles.us_dollar}>1,471.50</Text>
      </View>
    </View>
    <Text style={styles.amount_in_word}>
      SAY UNITED STATES DOLLAR ONE THOUSAND FOUR HUNDRED SEVENTY ONE AND FIVE
      CENTS ONLY.
    </Text>
  </View>
);
