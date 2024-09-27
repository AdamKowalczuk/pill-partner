import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MoodHistoryItem from "./MoodHistoryItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

interface Mood {
  moodRating: number;
  additionalNotes: string;
  timestamp: string;
  id: number;
}

type GroupedMoodHistory = {
  [date: string]: Mood[];
};

const MoodHistoryScreen = () => {
  const [groupedMoodHistory, setGroupedMoodHistory] =
    useState<GroupedMoodHistory>({});

  useEffect(() => {
    const fetchMoodHistoryList = async () => {
      try {
        const storedData = await AsyncStorage.getItem("moodHistoryList");
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          const groupedData = groupByDate(parsedData);
          setGroupedMoodHistory(groupedData);
        }
      } catch (error) {
        console.error("Błąd podczas odczytywania danych", error);
      }
    };

    fetchMoodHistoryList();
  }, []);

  const groupByDate = (data: Mood[]): GroupedMoodHistory => {
    return data.reduce((grouped: GroupedMoodHistory, mood: Mood) => {
      const date = format(new Date(mood.timestamp), "dd.MM.yyyy");
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(mood);
      return grouped;
    }, {});
  };

  return (
    <FlatList
      data={Object.keys(groupedMoodHistory)}
      renderItem={({ item: date }) => (
        <View className="flex gap-3">
          <Text className="text-typography-900 text-base font-semibold">
            {date}
          </Text>

          {groupedMoodHistory[date].map((mood) => (
            <MoodHistoryItem key={mood.id} mood={mood} />
          ))}
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      keyExtractor={(date) => date}
    />
  );
};

export default MoodHistoryScreen;
