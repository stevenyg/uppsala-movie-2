import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { VStack, Box, Text, Heading, Input, Divider, Icon, Center, Pressable, NativeBaseProvider, ScrollView, AspectRatio, Image, HStack, Stack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';

function SearchScreen({ navigation }) {
    // const input = 'man'
    const [input, setInput] = useState({
        search: ''
    })

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetch(`https://radiant-meadow-06105.herokuapp.com/user/search/?search=${input.search}`)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    } else {
                        return response.json()
                    }
                })
                .then(data => {
                    // console.log('Success:', data);
                    // console.log(input);
                    setMovies(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            // Send Axios request here
        }, 3000)
        return () => clearTimeout(delayDebounceFn)
    }, [input])



    useEffect(() => {
        fetch(`https://radiant-meadow-06105.herokuapp.com/user/search/?search=${input}`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.json()
                }
            })
            .then(data => {
                console.log('Success:');
                setMovies(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    // const cearchHandler = () => {
    //     fetch(`https://radiant-meadow-06105.herokuapp.com/user/search/?search=${input}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             } else {
    //                 return response.json()
    //             }
    //         })
    //         .then(data => {
    //             console.log('Success:');
    //             setMovies(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }

    return (
        <NativeBaseProvider >
            <VStack w="100%" p="5" space={5} alignSelf="center" safeArea>
                {/* <Heading fontSize="lg">Cupertino</Heading> */}
                <Input placeholder="Search" fontSize="xl" variant="filled" width="100%" borderRadius="5" py="3" px="2" borderWidth="1" InputLeftElement={<Icon ml="3" size="6" color="muted.500" as={<Ionicons name="ios-search" />} />}
                    onChangeText={value => setInput({
                        ...input,
                        search: value
                    })}
                />
                <Divider></Divider>

                <ScrollView maxW="auto" h="auto" _contentContainerStyle={{
                    px: "0px",
                    mb: "4",
                    minW: "72",
                }}>
                    {
                        movies.map(movie => {
                            return <Box key={movie.id} alignItems="center" p="3">
                                <Pressable onPress={() => navigation.navigate("Detail", {
                                    movie
                                })}>
                                    <Box key={movie.id} maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                        borderColor: "coolGray.600",
                                        backgroundColor: "gray.700"
                                    }} _web={{
                                        shadow: 2,
                                        borderWidth: 0
                                    }} _light={{
                                        backgroundColor: "gray.50"
                                    }}>
                                        <Box>
                                            <AspectRatio w="100%" ratio={16 / 9}>
                                                <Image source={{
                                                    uri: `${movie.imageUrl}`
                                                }} alt="image" />
                                            </AspectRatio>
                                            <Center bg="muted.500" _dark={{
                                                bg: "violet.400"
                                            }} _text={{
                                                color: "warmGray.50",
                                                fontWeight: "700",
                                                fontSize: "xs"
                                            }} position="absolute" bottom="0" px="3" py="1.5">
                                                HOT Movies
                                            </Center>
                                        </Box>
                                        <Stack p="4" space={3}>
                                            <Stack space={2}>
                                                <Heading size="md" ml="-1">
                                                    {movie.title}
                                                </Heading>
                                                <Text fontSize="xs" _light={{
                                                    color: "violet.500"
                                                }} _dark={{
                                                    color: "violet.400"
                                                }} fontWeight="500" ml="-0.5" mt="-1">
                                                    Released in 2022
                                                </Text>
                                            </Stack>
                                            <Text fontWeight="400">
                                                {movie.synopsis}
                                            </Text>
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">
                                                    <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                    }} fontWeight="400">
                                                        posted 6 April 2022
                                                    </Text>
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Pressable>
                            </Box>
                        })
                    }

                </ScrollView>

            </VStack>

            {/* </VStack>; */}
        </NativeBaseProvider >

    )

}


export default SearchScreen