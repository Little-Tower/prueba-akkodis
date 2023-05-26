import { loadAbort } from "@/utils/loadAbortAxios.utility";
import axios from "axios";

export const getPodcasts =  () => {
    const controller = loadAbort();
    return {call: axios.get<any>("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", {signal: controller.signal}), controller}
}

export const getUniquePodcast =  (podcastId: any) => {
    const controller = loadAbort();
    return {call: axios.get<any>(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`, {signal: controller.signal}), controller}
}