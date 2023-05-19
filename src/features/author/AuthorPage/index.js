import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

 const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
            <Section 
                title="Kamila Król" 
                body={
                    <>
                        <p>Cześć, nazywam się <strong>Kamila Król</strong>😊. Mam 20 lat. Mieszkam w Warszawie.
                            Obecnie studiuje na jednej z </p>
                        <p>warszawskich uczelnii, na kierunku
                        <strong> Zarządzanie i Inżyniernia Produkcji</strong>.Kocham podróżować✈️.</p>
                        <p>Odkrywać nowe nieznane rzeczy. Przygoda daje mi wolność.Uwielbiam oglądać
                        seriale oraz filmy🎥.</p>
                        <p> Począwszy od komedii romatycznych, aż po horrory.</p>
                    </>

                } 
            />
    </Container>
);

export default AuthorPage;