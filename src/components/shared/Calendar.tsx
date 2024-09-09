import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  format,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import { FontAwesome5 } from "@expo/vector-icons";
import { pl } from "date-fns/locale";

interface CalendarProps {
  moodData: { date: string; mood: number }[];
  customIcon?: (mood: number) => JSX.Element;
}

const monthNames: any = {
  stycznia: "Styczeń",
  lutego: "Luty",
  marca: "Marzec",
  kwietnia: "Kwiecień",
  maja: "Maj",
  czerwca: "Czerwiec",
  lipca: "Lipiec",
  sierpnia: "Sierpień",
  września: "Wrzesień",
  października: "Październik",
  listopada: "Listopad",
  grudnia: "Grudzień",
};

const Calendar = ({ moodData, customIcon }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  };

  const getMonthName = (date: any) => {
    const monthInGenitive = format(date, "MMMM", { locale: pl });

    return monthNames[monthInGenitive];
  };

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const renderDayIcon = (day: Date) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    const moodForDay = moodData.find(
      (mood) => mood.date === formattedDay
    )?.mood;

    if (customIcon && moodForDay) {
      return customIcon(moodForDay); // Jeśli customIcon został podany, renderuj go
    }

    if (moodForDay === 5)
      return <FontAwesome5 name="smile" size={24} color={colors.primary500} />;
    if (moodForDay === 1)
      return <FontAwesome5 name="frown" size={24} color={colors.error500} />;
    // Pozostałe ikony i kolory nastrojów
    return <FontAwesome5 name="meh" size={24} color={colors.gray500} />;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const emptyDays = Array(getDay(startOfMonth(currentDate))).fill(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <FontAwesome5
            name="chevron-left"
            size={24}
            color={colors.primary500}
          />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {getMonthName(currentDate)} {format(currentDate, "yyyy")}
        </Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <FontAwesome5
            name="chevron-right"
            size={24}
            color={colors.primary500}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.weekdays}>
        {["P", "W", "Ś", "C", "P", "S", "N"].map((day) => (
          <Text key={day} style={styles.weekdayText}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.daysContainer}>
        {emptyDays.map((_, index) => (
          <View key={`empty-${index}`} style={styles.day} />
        ))}

        {daysInMonth.map((day) => (
          <View key={day.toString()} style={styles.day}>
            {renderDayIcon(day)}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthText: {
    fontSize: 18,
    color: colors.typography600,
    textTransform: "capitalize",
  },
  weekdays: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  weekdayText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  day: {
    width: "13%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default Calendar;
