import React from "react";
import { Text, View } from "react-native";
import { IconPillFilled, IconDotsVertical } from "@tabler/icons-react";
import { Menu, MenuItem, MenuItemLabel } from "@/src/components/ui/menu";
import { Button, ButtonIcon, ButtonText } from "@/src/components/ui/button";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/src/components/ui/modal";
import { Heading } from "@/src/components/ui/heading";
import { CloseIcon, Icon } from "@/src/components/ui/icon";

type MedicationItemStockProps = {
  name: string;
};

const MedicationItemStock = ({ medication }: any) => {
  console.log("medication", medication);
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <>
      <View className="flex flex-row gap-4 rounded p-4 border-solid border border-border-300">
        <View>
          <IconPillFilled
            stroke={2}
            className="w-[32px] h-[32px] fill-primary-500"
          />
        </View>

        <View className="flex gap-5 flex-1">
          <View className="flex flex-row justify-between">
            <Text className="text-typography-900">
              {medication?.medicationName}
            </Text>
            {/* <IconDotsVertical className="cursor-pointer" stroke={2} /> */}
            <Menu
              placement="bottom right"
              selectionMode="single"
              offset={5}
              onSelectionChange={(keys) => {
                if (keys.currentKey === "Edytuj") {
                  console.log("Edytuj");
                } else if (keys.currentKey === "Usuń") {
                  console.log("Usuń");
                  setShowModal(true);
                }
              }}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} className="bg-transparent">
                    <ButtonIcon as={IconDotsVertical} />
                  </Button>
                );
              }}
            >
              <MenuItem
                key="Edytuj"
                textValue="Edytuj"
                className="p-2 min-w-[294px]"
              >
                <IconEdit stroke={1.33} />
                <MenuItemLabel size="sm">Edytuj</MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Usuń"
                textValue="Usuń"
                className="p-2 min-w-[294px]"
              >
                <IconTrash stroke={1.33} />
                <MenuItemLabel size="sm">Usuń</MenuItemLabel>
              </MenuItem>
            </Menu>
          </View>
          <View className="flex gap-3">
            <View className="flex flex-row justify-between">
              <Text className="text-typography-500">Wystarczy na</Text>
              <Text>2 dni</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-typography-500">W zapasie</Text>
              <Text>{medication?.stockAmount} tabletki</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Usuń lekarstwo
            </Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text size="sm" className="text-typography-500">
              Czy na pewno chcesz usunąć to lekarstwo? Ta operacja jest
              nieodwracalna i wszystkie dane związane z tym lekiem zostaną
              utracone.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Anuluj</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Potwierdź</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MedicationItemStock;
