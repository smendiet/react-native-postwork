import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import ProfileDefaultLogo from "../../assets/profile-default-logo.png";

export default function ProfileLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.content}>
        <View style={styles.person}>
          <View style={styles.contentImage}>
            <Image style={{flex: 1, width: "95 %", resizeMode: "contain"}} source={ProfileDefaultLogo} />
          </View>
          <View style={styles.contentProfile}>
            <View style={styles.contentProfileItem}>
              <Text style={{fontSize: 20, fontWeight: "bold",}}>Sergio Mendieta</Text>
            </View>
            <View style={styles.contentProfileItem}>
              <Text style={{fontSize: 16,}}>Software Developer</Text>
            </View>
            <View style={[styles.contentProfileItem]}>
              <View style={styles.contentProfileDetailItem}>
                <Text style={{fontSize: 10,}}>Panamá, Panamá</Text>
              </View>
              <View style={styles.contentProfileDetailItem}>
                <Text style={{fontSize: 10,}}>Joined on October 2020</Text>
              </View>
                {/*<Text style={{fontSize: 10,}}>Panamá, Panamá</Text>*/}
            </View>
          </View>
        </View>

        <View style={styles.save}>
          <Text style={styles.saveItem}>Sweets</Text>
          <Text style={styles.saveItem}>Likes</Text>
          <Text style={styles.saveItem}>Followers</Text>
          <Text style={styles.saveItem}>Photos</Text>
        </View>
      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#00bfff",
  },
  content: {
    flex: 3,
    flexDirection: "column",
  },
  person: {
    flex: 1,
    flexDirection: "row",
  },
  save: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  saveItem: {
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  contentImage: {
   flex: 3, 
   alignItems: "center",
   justifyContent: "center",
  },
  contentProfile: {
    flex: 5,
    justifyContent: "space-around",
  },
  contentProfileItem: {
    height: 25,
  },
  contentProfileDetail: {
    flexDirection: "row",
  },
  contentProfileDetailItem: {
    flex: 1,
    fontSize: 8,
  }
});