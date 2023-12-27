import { ChangeEvent, useState } from "react";
type FormValues<T> = {
    [K in keyof T]: string;
};

interface FormFunctions<T> {
    state: FormValues<T>;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
}

const useForm = <T extends Record<string, any>>(initialState: T): FormFunctions<T> => {
    const [state, setState] = useState<FormValues<T>>(() => {
        const defaultState: FormValues<T> = {} as FormValues<T>;
        for (const key in initialState) {
            defaultState[key] = '';
        }
        return defaultState;
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setState(() => {
            const resetState: FormValues<T> = {} as FormValues<T>;
            for (const key in initialState) {
                resetState[key] = '';
            }
            return resetState;
        });
    };

    return {
        state,
        handleChange,
        resetForm,
    };
};

export default useForm;
