import { SectionWrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionWrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>   
    </SectionWrapper>
);

export default Section;