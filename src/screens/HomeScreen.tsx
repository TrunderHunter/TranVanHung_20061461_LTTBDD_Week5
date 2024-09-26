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

const HomePageScreen = ({ navigation, route }: any) => {
  const [selectedColor, setSelectedColor] = React.useState("vs_blue");
  React.useEffect(() => {
    if (route.params?.selectedColor) {
      setSelectedColor(route.params.selectedColor);
    }
  }, [route.params?.selectedColor]);

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={
            selectedColor === "vs_blue" || selectedColor === "default"
              ? require("../assets/img/vs_blue.png")
              : selectedColor === "vs_red"
              ? require("../assets/img/vs_red.png")
              : selectedColor === "vs_silver"
              ? require("../assets/img/vs_silver.png")
              : require("../assets/img/vs_black.png")
          }
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
            <Picker.Item label="Màu xanh" value="vs_blue" />
            <Picker.Item label="Màu đỏ" value="vs_red" />
            <Picker.Item label="Màu bạc" value="vs_silver" />
            <Picker.Item label="Màu đen" value="vs_black" />
          </Picker>
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text
            style={styles.buyButtonText}
            onPress={() =>
              navigation.navigate("Detail", {
                selectedColor: selectedColor,
              })
            }
          >
            CHỌN MUA
          </Text>
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
