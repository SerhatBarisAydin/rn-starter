import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileCard}>
        <Image
          source={user?.photoURL ? { uri: user.photoURL } : require("../../assets/image/profile.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.displayName || "Kullanıcı Adı"}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.infoSection}>
        <InfoRow label="E-posta" value={user?.email} />
        <InfoRow label="E-posta Doğrulandı" value={user?.emailVerified ? "Evet" : "Hayır"} />
        <InfoRow label="UID" value={user?.uid} />
        <InfoRow label="Telefon" value={user?.phoneNumber || "Yok"} />
        <InfoRow
          label="Son Giriş"
          value={
            user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleString()
              : "-"
          }
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

// Bilgi satırı için küçük bir yardımcı bileşen
const InfoRow = ({ label, value }) => (
  <View style={styles.infoBox}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

export default ProfilePage

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  profileCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#4B7BE5",
    backgroundColor: "#fff"
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  infoSection: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  infoLabel: {
    fontWeight: "bold",
    color: "#4B7BE5",
    fontSize: 15,
    width: "45%",
  },
  infoValue: {
    color: "#333",
    fontSize: 15,
    width: "55%",
    textAlign: "right",
  },
  logoutButton: {
    marginTop: 12,
    backgroundColor: "#E94F37",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 24,
    alignSelf: "center",
    elevation: 2,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});