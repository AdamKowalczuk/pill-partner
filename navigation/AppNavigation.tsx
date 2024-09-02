import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicationList from "../screens/MedicationList";
import AddMood from "../screens/AddMood";
import AddMedication from "../screens/AddMedication";
import { NavigationContainer } from "@react-navigation/native";
import PillsIcon from "../assets/icons/pills-icon.svg";
import MoodIcon from "../assets/icons/mood-icon.svg";
import AddIcon from "../assets/icons/add-icon.svg";
import CalendarIcon from "../assets/icons/calendar-icon.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import History from "@/screens/History";
import { StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/styles/colors";
import Settings from "@/screens/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary500,
          tabBarInactiveTintColor: "#808080",
          tabBarStyle: styles.tabBar,
          headerStyle: styles.header,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Tab.Screen
          name="Leki"
          component={MedicationList}
          options={{
            tabBarIcon: ({ color }) => (
              <PillsIcon color={color} width={30} height={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Nastrój"
          component={AddMood}
          options={{
            tabBarIcon: ({ color }) => (
              <MoodIcon color={color} width={30} height={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Dodaj lek"
          component={AddMedication}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.addIcon}>
                <AddIcon color="#fff" width={16} height={16} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Historia"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <CalendarIcon color={color} width={30} height={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Ustawienia"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon color={color} width={30} height={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary500,
    height: 56 + (StatusBar.currentHeight || 0),
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  tabBar: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 76,
  },
  addIcon: {
    width: 56,
    height: 56,
    backgroundColor: colors.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
