import { NativeBaseProvider, Container, Text } from 'native-base'



function Detail({ route }) {
    const { movie } = route.params
    console.log(movie);




    return (
        <NativeBaseProvider >
            <Container safeArea alignSelf="center">
                <Text>TEST1</Text>
            </Container>
        </NativeBaseProvider>
    )
}


export default Detail