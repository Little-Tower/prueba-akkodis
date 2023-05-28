import { Episode, EpisodeEmpty, EpisodeStore } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateEpisode: Episode = EpisodeEmpty;
const initialStateEpisodeStore: EpisodeStore[] = [];

export const episodeSlicer = createSlice({
    name: "episode",
    initialState: {
        episodeSelect : initialStateEpisode,
        epidodeStore: initialStateEpisodeStore
    },
    reducers: {
        setEpisode: (state, action: PayloadAction<Episode>) => {
            state.episodeSelect = action.payload
        },
        addEpisodeStore: (state, action: PayloadAction<EpisodeStore>) => {
            state.epidodeStore = [...state.epidodeStore ,action.payload]
        },

    }
});

export const { setEpisode, addEpisodeStore } = episodeSlicer.actions;
export default episodeSlicer.reducer;