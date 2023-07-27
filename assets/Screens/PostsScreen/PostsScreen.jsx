import { Text, View, StyleSheet } from "react-native";

export default function PostsScreen() {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 44 }}>
    <Text style={styles.profileHeader}>Публікації</Text>
      <View style={styles.profileWrap}>
        <View style={styles.userPhotoWrap}></View>

        <View>
          <Text style={styles.profileName}>Profile Name</Text>
          <Text style={styles.profileEmail}>Profile Email</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    fontSize: 17,
  },
  profileName: {
    fontSize: 13,
  },
  profileEmail: {
    fontSize: 11,
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "red",
    owerflow: "hidden",
    marginRight: 8,
  },
});
