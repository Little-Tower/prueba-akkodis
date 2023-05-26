import { Podcast} from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStatePodcast: Podcast[] = [];

export const podcastsSlicer = createSlice({
    name: "podcasts",
    initialState: {
        podcastsList : initialStatePodcast,
        loading: false,
    },
    reducers: {
        addPodcasts: (state, action: PayloadAction<Podcast[]>) => {
            state.podcastsList = [...state.podcastsList, ...action.payload]
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
       

    }
});

export const { addPodcasts, setLoading } = podcastsSlicer.actions;
export default podcastsSlicer.reducer;