// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View, Heading, VStack, Center, ScrollView, Image, AspectRatio, Box, NativeBaseProvider, Flex } from 'native-base'

function HomeScreen() {
    return (
        <NativeBaseProvider >
            <VStack space={4} alignItems="center" safeArea>
                <Center>
                    <ScrollView maxW="700" h="80" _contentContainerStyle={{

                        mb: "4",
                        minW: "72"
                    }}>
                        <Heading ml="5" my="5">New Released</Heading>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={{
                                    uri: `http://thumb.viva.co.id/media/frontend/thumbs3/2021/12/15/61b9b3ac48edb-spider-man-no-way-home_1265_711.jpg`
                                }} alt="image" />
                            </AspectRatio>
                            <Center bg="muted.500" ml="5" h="200px" w="150px" _dark={{
                                bg: "violet.400"
                            }} _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs"
                            }} position="absolute" bottom="-150" px="3" py="1.5">
                                <AspectRatio w="150px" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://cdn1-production-images-kly.akamaized.net/RfSS5QcDwLDaEVy9gl6m4PB0dAk=/1280x1706/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                            </Center>


                        </Box>

                        <Heading left={200} mt="30" fontSize={16}>Spiderman 2022</Heading>
                        <Heading left={200} mt="3" fontSize={12}>Official Trailer</Heading>
                        {/* <Center>
                            <Center _text={{
                                color: "white",
                                fontWeight: "bold"
                            }} height={200} width={{
                                base: 200,
                                lg: 250
                            }}>

                            </Center>
                        </Center> */}
                        <Center mt="40">
                            <Center bg="muted.300" _text={{
                                color: "white",
                                fontWeight: "bold"
                            }} h="50" w="450">
                                <Heading>Featured today</Heading>
                            </Center>
                        </Center>

                        <Center>
                            <ScrollView horizontal={true} h="80" _contentContainerStyle={{
                                px: "20px",
                                mb: "4",
                                minW: "72"
                            }}>

                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/03/redvyodc0oteyndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/03/westsidem2y3xkeyxkfqcgdeqxvymda4nzmyoa4040._v1_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/02/pizzadeqxvyodq2otizndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/02/pizzadeqxvyodq2otizndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://cdn1-production-images-kly.akamaized.net/RfSS5QcDwLDaEVy9gl6m4PB0dAk=/1280x1706/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                            </ScrollView>
                        </Center>

                        <Center mt="5">
                            <Center bg="muted.300" _text={{
                                color: "white",
                                fontWeight: "bold"
                            }} h="50" w="450">
                                <Heading>What to watch toda</Heading>
                            </Center>
                        </Center>

                        <Center>
                            <ScrollView horizontal={true} h="80" _contentContainerStyle={{
                                px: "20px",
                                mb: "4",
                                minW: "72"
                            }}>

                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/03/redvyodc0oteyndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/03/westsidem2y3xkeyxkfqcgdeqxvymda4nzmyoa4040._v1_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/02/pizzadeqxvyodq2otizndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://mydirtsheet.files.wordpress.com/2022/02/pizzadeqxvyodq2otizndu40._v1_fmjpg_ux1000_.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                                <AspectRatio w="200px" mt="5" p="3" ratio={3 / 4}>
                                    <Image source={{
                                        uri: `https://cdn1-production-images-kly.akamaized.net/RfSS5QcDwLDaEVy9gl6m4PB0dAk=/1280x1706/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg`
                                    }} alt="image" />
                                </AspectRatio>
                            </ScrollView>
                        </Center>


                    </ScrollView>
                </Center>

            </VStack>
        </NativeBaseProvider >
    )
}

export default HomeScreen