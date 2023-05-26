import { Podcast} from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStatePodcast: Podcast[] = [];

export const podcastsSlicer = createSlice({
    name: "podcasts",
    initialState: {
        podcastsList : initialStatePodcast,
        loading: false,
        updateDate: 0
    },
    reducers: {
        addPodcasts: (state, action: PayloadAction<Podcast[]>) => {
            state.podcastsList = [...state.podcastsList, ...action.payload]
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setUpdateDate: (state, action: PayloadAction<number>) => {
            state.updateDate = action.payload;
        },
       

    }
});

export const { addPodcasts, setLoading, setUpdateDate } = podcastsSlicer.actions;
export default podcastsSlicer.reducer;