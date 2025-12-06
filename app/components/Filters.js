// app/components/Filters.js
import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../theme";

const options = ["All", "Online Class", "Assignment", "Quiz", "Discussion"];

export default function Filters({ value, onChange }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.row}>
      {options.map((opt) => {
        const active = opt === value;
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onChange(opt)}
            style={[
              styles.btn,
              {
                backgroundColor: active ? colors.primaryButtonBg : "transparent",
                borderColor: active ? colors.primaryButtonBg : "rgba(0,0,0,0.06)",
              },
            ]}
          >
            <Text style={{ color: active ? colors.primaryButtonText : colors.accent }}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginVertical: 8 },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,
  },
});
