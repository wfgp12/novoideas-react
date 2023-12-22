import { ChangeEvent, useState } from "react"

const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const resetForm = () => {
        setState(initialState);
    };
    return {
        state,
        handleChange,
        resetForm
    }
}

export default useForm