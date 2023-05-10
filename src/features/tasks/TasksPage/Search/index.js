import searchQueryParamName from "../searchQueryParamName";
import { Wrapper} from "./styled";
import Input from "../../Input"
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.serach)). get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <Input
            placeholder="Filtruj zadania"
            value ={query || ""}
            onChange={onInputChange}
        />
        </Wrapper>
    );
};