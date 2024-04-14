export const generateUniqueID = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

export const generateRandomString = (length: number = 5): string => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
}

export const generateRandomUUid = (): string => {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

export const generateRandomNumber = (digits: number = 5): number => {
    return Math.floor(Math.pow(10, digits - 1) + Math.random() * (Math.pow(10, digits) - Math.pow(10, digits - 1) - 1));
}

export const generateRandomBool = (): boolean => generateRandomNumber(1) > 5;

export const generateRandomArrayValue = (arr: { value: string, name: string }[]): string => {
    const randomNum = Math.floor(Math.random() * (arr.length));
    return arr[randomNum].value;
}

export const generateId = () => generateRandomNumber().toString();

export const generateRandomArrayElement = <T, >(arr: T[]): T => {
    const randomNum = Math.floor(Math.random() * (arr.length));
    return arr[randomNum];
}
