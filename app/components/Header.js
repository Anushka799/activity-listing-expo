// app/components/Header.js
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../../theme";

export default function Header() {
  const { theme, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <View>
        <Text style={[styles.title, { color: colors.text }]}>Activities</Text>
        <Text style={[styles.subtitle, { color: colors.muted }]}>
          Your learning activities
        </Text>
      </View>

      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.modeBtn, { borderColor: colors.muted }]}
      >
        <Text style={{ color: colors.text }}>
          {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "700" },
  subtitle: { fontSize: 13, marginTop: 6 },
  modeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
});
