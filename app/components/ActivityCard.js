// app/components/ActivityCard.js
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../../theme";

export default function ActivityCard({ item, onAction }) {
  const { colors } = useContext(ThemeContext);

  const actionLabel =
    item.progress === 100 ? "Review" : item.progress > 0 ? "Continue" : item.type === "Assignment" ? "Start" : "Join";

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.card }]}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
          <Text style={[styles.meta, { color: colors.muted }]}>{item.meta}</Text>
        </View>
        <View>
          <View style={[styles.badge, { backgroundColor: colors.badgeBg }]}>
            <Text style={{ color: colors.accent }}>{item.type}</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={[styles.muted, { color: colors.muted }]}>{item.duration ? item.duration : "—"} {item.dueDate ? ` • Due ${item.dueDate}` : ""}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={[styles.detailsBtn, { borderColor: colors.muted }]} onPress={() => onAction("details", item)}>
            <Text style={{ color: colors.text }}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.primaryBtn, { backgroundColor: colors.primaryButtonBg }]}
            onPress={() => onAction("primary", item)}
          >
            <Text style={{ color: colors.primaryButtonText }}>{actionLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    // shadows (iOS/Android)
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  topRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 8 },
  title: { fontSize: 16, fontWeight: "700" },
  meta: { fontSize: 13, marginTop: 6 },
  badge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12 },
  infoRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 },
  muted: { fontSize: 12 },
  actions: { flexDirection: "row", gap: 8, alignItems: "center" },
  detailsBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
  },
  primaryBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
