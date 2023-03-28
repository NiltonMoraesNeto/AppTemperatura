import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";

export default class Temperatura extends Component {
  render() {
    return (
      //   <View style={styles.container}>
      //       <View style={styles.facebookContainer}>
      //       <Text style={styles.facebookText}>{this.props.data.date}</Text>
      //       <Text style={styles.facebookText}>{this.props.data.weekday}</Text>
      //       <Text style={styles.facebookText}>{this.props.data.wind_speedy}</Text>
      //       <Text style={styles.facebookText}>{this.props.data.min}</Text>
      //       <Text style={styles.facebookText}>{this.props.data.max}</Text>
      //       <Text style={styles.facebookText}>{this.props.data.description}</Text>
      //       </View>
      //   </View>
      <NativeBaseProvider>
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: "muted.50",
          }}
          borderColor="muted.800"
          pl={["0", "4"]}
          pr={["0", "5"]}
          py="2"
        >
          <HStack space={[2, 3]} justifyContent="space-between">
            <Avatar
              size="48px"
              source={{
                uri: 'item.avatarUrl',
              }}
            />
            <VStack>
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {this.props.data.date}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {this.props.data.weekday}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              alignSelf="flex-start"
            >
              {this.props.data.weekday}
            </Text>
          </HStack>
        </Box>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "50%",
  },
  facebookText: {
    color: "#4484ec",
    paddingLeft: 8,
    fontSize: 15,
    paddingRight: 5,
  },
});
