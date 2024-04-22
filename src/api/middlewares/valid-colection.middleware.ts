export const allowColections = (colection: string = '', colections: string[] = []): boolean => {
    const including: boolean = colections.includes(colection);

    if (!including) {
        throw new Error(`The collection ${colection} is not allowed, ${colections}`);
    }

    return true;
}
