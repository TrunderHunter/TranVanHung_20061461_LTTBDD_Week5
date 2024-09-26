import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomePageScreen = () => {
  const [selectedColor, setSelectedColor] = React.useState("Màu xanh");

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/img/vs_blue.png")}
          style={styles.productImage}
        />
      </View>

      {/* Product Title and Ratings */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingStars}>★★★★★</Text>
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        {/* Refund Policy */}
        <View style={styles.refundPolicyContainer}>
          <Text style={styles.refundPolicy}>Ở đâu rẻ hơn hoàn tiền</Text>
          <AntDesign name="questioncircleo" size={20} color="black" />
        </View>

        {/* Color Selection */}
        <View style={styles.colorSelectionContainer}>
          <Picker
            selectedValue={selectedColor}
            style={styles.colorPicker}
            onValueChange={(
              itemValue: React.SetStateAction<string>,
              itemIndex: any
            ) => setSelectedColor(itemValue)}
          >
            <Picker.Item label="4 Màu - Chọn màu" value="default" />
            <Picker.Item label="Màu xanh" value="Màu xanh" />
            <Picker.Item label="Màu đen" value="Màu đen" />
            <Picker.Item label="Màu trắng" value="Màu trắng" />
            <Picker.Item label="Màu hồng" value="Màu hồng" />
          </Picker>
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  productImage: {
    width: 250,
    height: 400,
    resizeMode: "contain",
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
  productTitle: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingStars: {
    color: "#FFD700",
    fontSize: 20,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },

  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 24,
    alignItems: "center",
    marginBottom: 8,
  },
  currentPrice: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginEnd: 40,
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
  },
  refundPolicyContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 24,
    alignItems: "center",
  },
  refundPolicy: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginEnd: 8,
    marginVertical: 8,
  },
  colorSelectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  colorPicker: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
  },
  buyButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    marginVertical: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomePageScreen;
