import { colors } from "@/styles/colors";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TagSelector = ({ tags, onTagSelect }: any) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagPress = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onTagSelect(newTags);
  };
  return (
    <>
      <View style={styles.container}>
        {tags.map((tag: any) => (
          <Pressable
            key={tag}
            style={[
              styles.tag,
              selectedTags.includes(tag) && styles.selectedTag,
            ]}
            onPress={() => handleTagPress(tag)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTags.includes(tag) && styles.selectedTag,
              ]}
            >
              {tag}
            </Text>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border300,
  },
  selectedTag: {
    backgroundColor: colors.primary500,
    color: colors.white,
  },
  tagText: {
    color: colors.typography900,
    fontSize: 12,
  },
});

export default TagSelector;
