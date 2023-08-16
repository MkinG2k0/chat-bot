export const messageUrl = String(import.meta.env.VITE_PUBLIC_URL_ENDPOINT).concat('chat/send-message')
export const messageRegex = /"value":"([^"]*)"/g
