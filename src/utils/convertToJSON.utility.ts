export const convertToJSON = (inputText: string) => {
    const cleanText = inputText.replace(/\\+/g, '\\');
    const json = JSON.parse(cleanText);

    return json;
}