import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddMedication from "../screens/medication/AddMedicationScreen";
import { NavigationContainer } from "@react-navigation/native";
import PillsIcon from "../assets/icons/pills-icon.svg";
import MoodIcon from "../assets/icons/mood-icon.svg";
import AddIcon from "../assets/icons/add-icon.svg";
import CalendarIcon from "../assets/icons/calendar-icon.svg";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import History from "@/src/screens/history/History";
import { View, StatusBar, StyleSheet } from "react-native";
import Settings from "@/src/screens/settings/SettingsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicationScreen from "../screens/medication/MedicationScreen";
import MoodScreen from "../screens/mood/MoodScreen";
import { useTranslation } from "react-i18next";
import { colors } from "@/styles/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const { t } = useTranslation();

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
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Medication"
          component={MedicationScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <PillsIcon color={color} width={30} height={30} />
            ),
            title: t("medicationsTab"),
          }}
        />
        <Tab.Screen
          name="Nastrój"
          component={MoodScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MoodIcon color={color} width={30} height={30} />
            ),
            title: t("moodTab"),
          }}
        />
        <Tab.Screen
          name="AddMedication"
          component={AddMedication}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.addIcon}>
                <AddIcon color="#fff" width={16} height={16} />
              </View>
            ),
            title: t("addMedicationTab"),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <CalendarIcon color={color} width={30} height={30} />
            ),
            title: t("historyTab"),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon color={color} width={30} height={30} />
            ),
            title: t("settingsTab"),
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
