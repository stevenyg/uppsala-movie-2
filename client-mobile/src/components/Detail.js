import { NativeBaseProvider, Container, Badge, Stack, Input, Icon, Divider, Heading, HStack, VStack, ScrollView, Image, AspectRatio, Center, Box, Text } from 'native-base'
import { GET_MOVIEDETAIL } from "../../config/queries"
import { useQuery } from '@apollo/client';
import Ionicons from '@expo/vector-icons/Ionicons';

function Detail({ route }) {
    const { movie } = route.params

    const { loading, error, data } = useQuery(GET_MOVIEDETAIL, {
        variables: {
            "slug": movie.slug,
            "movieDetailId": movie.id
        },
    });

    if (loading) return null;
    if (error) return null;


    return (
        <NativeBaseProvider >

            <VStack w="100%" space={4} alignItems="center">

                <Center>
                    <ScrollView maxW="auto" h="auto" safeArea _contentContainerStyle={{
                        px: "0px",
                        mb: "4",
                        minW: "72"
                    }}>
                        <Box key={movie.id} alignItems="center" p="3">

                            <Box key={movie.id} maxW="auto" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                                    <HStack>
                                        <Box mx="1" alignItems="center">
                                            <Badge variant={"outline"}>{data.movieDetail.Genre.name}</Badge>
                                        </Box>
                                    </HStack>


                                    <Text fontWeight="400">
                                        {movie.synopsis}
                                    </Text>
                                    <HStack>
                                        {
                                            data.movieDetail.Casts.map(cast => {
                                                return (

                                                    <Box mx="1" alignItems="center">
                                                        <Badge variant={"outline"} >{cast.name}</Badge>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </HStack>

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

                        </Box>




                    </ScrollView>
                </Center>

            </VStack>

        </NativeBaseProvider >
    )
}


export default Detail