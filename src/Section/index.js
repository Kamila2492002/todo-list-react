import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <h2 className="section__text">{title}</h2>
            {extraHeaderContent}
            {body}
    </section>
);

export default Section;