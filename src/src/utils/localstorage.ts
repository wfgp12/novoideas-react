interface LocalStorageUtility {
    setItem(key: string, value: any): void;
    getItem<T>(key: string): T | null;
    removeItem(key: string): void;
}

const localStorageUtility: LocalStorageUtility = {
    setItem: (key: string, value: any): void => {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error('Error while setting localStorage item:', error);
        }
    },

    getItem: <T>(key: string): T | null => {
        try {
            const serializedValue = localStorage.getItem(key);
            return serializedValue ? JSON.parse(serializedValue) : null;
        } catch (error) {
            console.error('Error while getting localStorage item:', error);
            return null;
        }
    },

    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error while removing localStorage item:', error);
        }
    },
};

export default localStorageUtility;
