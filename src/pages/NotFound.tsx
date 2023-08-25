import Container from "../components/Container";
import WIPMessage from "../components/WIPMessage";


const NotFound = () => {
    return (
        <Container>
            <WIPMessage
                icon="not-found"
                text='Not found'
            />
        </Container>
    )
}

export default NotFound;
