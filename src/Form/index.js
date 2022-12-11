import "./style.css";

const Form = (props) => (
    <form className="form">
        <input className="form__input" placeholder="Co jest do zrobienia?" />
        <button type="submit" className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;