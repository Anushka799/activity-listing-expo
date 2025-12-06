// app/screens/ActivityListing.js
import React, { useMemo, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ActivityCard from "../components/ActivityCard";
import { ThemeContext } from "../../theme";
import { activities as mockActivities } from "../../data/activities";

export default function ActivityListing() {
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState([]);
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setItems(mockActivities), 200);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((i) => i.type === filter);
  }, [filter, items]);

  const handleAction = (action, item) => {
    if (action === "primary") alert(`Action on: ${item.title}`);
    else alert(`Details for: ${item.title}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header />
      <View style={styles.inner}>
        <Filters value={filter} onChange={setFilter} />
        <Text style={[styles.results, { color: colors.muted }]}>
          Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </Text>

        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
          {filtered.map((item) => (
            <ActivityCard key={item.id} item={item} onAction={handleAction} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { paddingHorizontal: 12, paddingTop: 8 },
  results: { marginBottom: 12 },
});
