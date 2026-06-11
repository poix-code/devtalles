import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebHookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify(message: string) {

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3l2NjN0b2NtZ3JsN2VpbmZoeXNpajF3am1sZmY0amt6aDYxejRjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13hxeOYjoTWtK8/giphy.gif' },
                },
            ],
        };

        const response = await fetch(this.discordWebHookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log('Error sending message to discord');
            return false;
        }

        return true;
    }
}