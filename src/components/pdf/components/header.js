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
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  flexJustifyBetween: {
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
  },
  flexJustifyStart: {
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 10,
  },
  pi_interlining_title: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export const PdfHeader = () => {
  return (
    <View fixed>
      <Image style={styles.image} src={otlHeadImg} />

      {/* header title */}
      <View style={styles.titleText}>
        <Text style={{ margin: "auto" }}>PROFORMA INVOICE</Text>
      </View>

      {/* PI & Interlining title */}
      <View style={{ ...styles.flexJustifyBetween, marginBottom: 5 }}>
        <Text style={styles.pi_interlining_title}>PROFORMA INVOICE OF</Text>
        <Text style={styles.pi_interlining_title}>Interlining</Text>
      </View>

      {/* From, to & customer info */}
      <View
        style={{
          ...styles.flexJustifyBetween,
          fontWeight: "bold",
        }}
      >
        <View>
          <Text>Form &nbsp; Dhaka</Text>
          <Text>Name of customer:</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 110,
            paddingRight: 50,
            paddingTop: 12,
            overflow: "hidden",
          }}
        >
          <Text>
            B.H.I.S APPARELS LIMITED 671, DATTAPARA,HOSSAIN MARKET,TONGI,
            GAZIPUR, BANGLADESH
          </Text>
        </View>
        <View>
          <Text>to DHAKA</Text>
          <Text>On or about 2023</Text>
        </View>
      </View>

      {/* Profoma Invoice Number */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 4,
          marginTop: 15,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>Profoma Invoice Number:</Text>
        </View>
        <View>
          <Text>4059/23 (OTL) MEH</Text>
        </View>
        <View
          style={{
            minWidth: 180,
            marginLeft: "auto",
          }}
        >
          <Text>Reg No. 4059/23 (DH455)</Text>
        </View>
      </View>

      {/* Date & Buyer */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>Date</Text>
        </View>
        <View>
          <Text>07-01-2023</Text>
        </View>
        <View
          style={{
            minWidth: 180,
            marginLeft: "auto",
          }}
        >
          <Text>Buyer: MAX</Text>
        </View>
      </View>

      {/* PI Validity Date */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>PI Validity Date</Text>
        </View>
        <View>
          <Text>07-01-2023</Text>
        </View>
      </View>

      {/* Delivery Place */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>Delivery Place</Text>
        </View>
        <View>
          <Text>671, DATTA PARA,HOSSIAN MARKET,TONGI, GAZIPUR,BANGLADESH</Text>
        </View>
      </View>

      {/* Purchase Order/Contact */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>Purchase Order/Contact</Text>
        </View>
        <View>
          <Text>671, DATTA PARA,HOSSIAN MARKET,TONGI, GAZIPUR,BANGLADESH</Text>
        </View>
      </View>

      {/* Style */}
      <View
        style={{
          ...styles.flexJustifyStart,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        <View style={{ minWidth: 155 }}>
          <Text>Style</Text>
        </View>
        <View>
          <Text>671, DATTA PARA,HOSSIAN MARKET,TONGI, GAZIPUR,BANGLADESH</Text>
        </View>
      </View>

      {/* <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text> */}
    </View>
  );
};
