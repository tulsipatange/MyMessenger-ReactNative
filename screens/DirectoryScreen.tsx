import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Directory, RootStackParamList } from "../types";
import { Folder } from "lucide-react-native";

type DirectoryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Directories"
>;

// Mock data for directories
const directories: Directory[] = [
  { id: "1", name: "Work", messageCount: 12 },
  { id: "2", name: "Personal", messageCount: 8 },
  { id: "3", name: "Projects", messageCount: 5 },
  { id: "4", name: "Family", messageCount: 15 },
  { id: "5", name: "Friends", messageCount: 7 },
  { id: "6", name: "Shopping Lists", messageCount: 3 },
  { id: "7", name: "Ideas", messageCount: 9 },
  { id: "8", name: "Health", messageCount: 4 },
];

export default function DirectoryScreen() {
  const navigation = useNavigation<DirectoryNavigationProp>();

  const renderDirectoryItem: ListRenderItem<Directory> = ({ item }) => (
    <TouchableOpacity
      style={styles.directoryItem}
      onPress={() =>
        navigation.navigate("Messages", {
          directoryId: item.id,
          directoryName: item.name,
        })
      }
    >
      <View style={styles.directoryContent}>
        <Folder color="#2196F3" size={24} />
        <View style={styles.directoryInfo}>
          <Text style={styles.directoryName}>{item.name}</Text>
          <Text style={styles.messageCount}>{item.messageCount} messages</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={directories}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  list: {
    padding: 16,
  },
  directoryItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  directoryContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  directoryInfo: {
    marginLeft: 16,
  },
  directoryName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  messageCount: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
});
