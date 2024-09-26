import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const DetailProductScreen = ({ navigation, route }: any) => {
  const [selectedColor, setSelectedColor] = useState("");
  React.useEffect(() => {
    if (route.params?.selectedColor) {
      setSelectedColor(route.params.selectedColor);
    }
  }, [route.params?.selectedColor]);

  const colors = [
    { id: 1, name: "vs_blue", colorCode: "#3F51B5" },
    { id: 2, name: "vs_red", colorCode: "#F44336" },
    { id: 3, name: "vs_silver", colorCode: "#9E9E9E" },
    { id: 4, name: "vs_black", colorCode: "#000" },
  ];

  const handleColorSelection = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.productInfo}>
        <Image
          source={
            selectedColor === "vs_blue"
              ? require("../assets/img/vs_blue.png")
              : selectedColor === "vs_red"
              ? require("../assets/img/vs_red.png")
              : selectedColor === "vs_silver"
              ? require("../assets/img/vs_silver.png")
              : require("../assets/img/vs_black.png")
          }
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>
            Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
          </Text>
          <Text>
            Màu sắc:{" "}
            <Text style={{ fontWeight: "bold" }}>
              {selectedColor === "vs_blue"
                ? "Xanh"
                : selectedColor === "vs_red"
                ? "Đỏ"
                : selectedColor === "vs_silver"
                ? "Bạc"
                : "Đen"}
            </Text>
          </Text>
          <Text>
            Cung cấp bởi: <Text style={{ fontWeight: "bold" }}>Vsmart</Text>
          </Text>
          <Text>
            Giá thành: <Text style={{ fontWeight: "bold" }}>1.790.000 đ</Text>
          </Text>
        </View>
      </View>

      {/* Color Selection */}
      <Text style={styles.selectText}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorContainer}>
        {colors.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.colorBox, { backgroundColor: item.colorCode }]}
            onPress={() => handleColorSelection(item.name)}
          />
        ))}
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Selected Color */}
        <Text style={styles.selectedColorText}>
          Màu đã chọn:{" "}
          {selectedColor === "vs_blue"
            ? "Xanh"
            : selectedColor === "vs_red"
            ? "Đỏ"
            : selectedColor === "vs_silver"
            ? "Bạc"
            : "Đen"}
        </Text>

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            navigation.navigate("Home", { selectedColor: selectedColor })
          }
        >
          <Text style={styles.confirmButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingStart: 20,
    width: "100%",
  },
  productDetails: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 120,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
  },
  selectText: {
    fontSize: 18,
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 5,
  },
  selectedColorText: {
    fontSize: 16,
    marginVertical: 20,
  },
  confirmButton: {
    backgroundColor: "#3F51B5",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 1,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailProductScreen;
