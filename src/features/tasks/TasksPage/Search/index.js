import searchQueryParamName from "../queryParameters/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Wrapper} from "./styled";
import Input from "../../Input"

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter =  useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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