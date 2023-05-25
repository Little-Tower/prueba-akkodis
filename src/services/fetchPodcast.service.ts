import { loadAbort } from "@/utils/loadAbortAxios.utility";
import axios from "axios";

export const getPodcast =  () => {
    const controller = loadAbort();
    return {call: axios.get<any>("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", {signal: controller.signal,}), controller}
}