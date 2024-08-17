import { Database } from "../Library";

export const isValidURL = (url: string) => {
    // Regular expression to match valid URLs but exclude http:// and https://
    const regex = /^(?!https?:\/\/)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;
    return regex.test(url);
}

export const CollectionName = "url-shortner";

export const generateUniqueString = async () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueString = '';

    while (true) {
        uniqueString = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            uniqueString += charset[randomIndex];
        }
        const generatedStrings = await Database.getUrl(uniqueString);
        if (generatedStrings.empty) {
            break;
        } else {
            await generateUniqueString()
        }
    }

    return uniqueString;
}