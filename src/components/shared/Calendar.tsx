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
  data: {
    date: string;
    primaryColor: string;
    secondaryColor?: string | null;
    Icon: any;
  }[];
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

const Calendar = ({ data }: CalendarProps) => {
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

    const result = data.find((item) => item.date === formattedDay);
    const IconForDay = result?.Icon;
    const colorForIcon = result?.primaryColor;
    const formattedNumber = format(day, "d");

    return IconForDay ? (
      <View key={day.toString()} style={styles.day}>
        <View
          style={[
            styles.dayWrapper,
            {
              backgroundColor: result.secondaryColor
                ? result.secondaryColor
                : "transparent",
            },
          ]}
        >
          <IconForDay color={colorForIcon} />
        </View>
        <Text> {formattedNumber}</Text>
      </View>
    ) : (
      <View key={day.toString()} style={styles.day} />
    );
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const emptyDays = Array(getDay(startOfMonth(currentDate))).fill(null);

  return (
    <View style={styles.container}>
      <View style={styles.calendarHeaderWrapper}>
        <Text style={styles.calendarYear}>2024</Text>
        <Text style={styles.calendarDay}>Niedz., 8 wrz</Text>
      </View>
      <View style={styles.calendarWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <FontAwesome5
              name="chevron-left"
              size={24}
              color={colors.typography500}
            />
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {getMonthName(currentDate)} {format(currentDate, "yyyy")}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <FontAwesome5
              name="chevron-right"
              size={24}
              color={colors.typography500}
            />
          </TouchableOpacity>
        </View>

        <View>
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
              <>{renderDayIcon(day)}</>
            ))}
          </View>
        </View>
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
  calendarHeaderWrapper: {
    display: "flex",
    gap: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.primary500,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  calendarYear: {
    color: colors.white,
    fontSize: 18,
  },
  calendarWrapper: {
    display: "flex",
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    gap: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border300,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  calendarDay: {
    color: colors.white,
    fontSize: 26,
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
    width: "14%",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  day: {
    width: "14%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dayWrapper: {
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default Calendar;
