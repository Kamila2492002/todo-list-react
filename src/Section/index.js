import { SectionNewTask, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionNewTask>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>   
    </SectionNewTask>
);

export default Section;