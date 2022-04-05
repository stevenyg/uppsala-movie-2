import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VStack, Box, Heading, Input, Divider, Icon, Center, NativeBaseProvider, ScrollView } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

function SearchScreen() {
    return (
        <NativeBaseProvider>
            {/* <VStack my="" space={5} w="100%" maxW="300px" divider={<Box px="2">
                <Divider />
            </Box>}> */}

            <VStack w="100%" p="5" space={5} alignSelf="center" safeArea>
                {/* <Heading fontSize="lg">Cupertino</Heading> */}
                <Input placeholder="Search" fontSize="xl" variant="filled" width="100%" borderRadius="5" py="3" px="2" borderWidth="1" InputLeftElement={<Icon ml="3" size="6" color="muted.500" as={<Ionicons name="ios-search" />} />} />
                <Divider></Divider>

                <ScrollView maxW="auto" h="auto" _contentContainerStyle={{
                    px: "0px",
                    mb: "4",
                    minW: "72",
                }}>
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                    <Center w="auto" h="20" bg="muted.500" my="3" rounded="md" shadow={3} />
                </ScrollView>



            </VStack>



            {/* </VStack>; */}
        </NativeBaseProvider>

    )

}


export default SearchScreen