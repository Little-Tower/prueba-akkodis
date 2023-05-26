import { Episode, EpisodeEmpty } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateEpisode: Episode = EpisodeEmpty;

export const episodeSlicer = createSlice({
    name: "episode",
    initialState: {
        episodeSelect : initialStateEpisode,
    },
    reducers: {
        setEpisode: (state, action: PayloadAction<Episode>) => {
            state.episodeSelect = action.payload
        }

    }
});

export const { setEpisode } = episodeSlicer.actions;
export default episodeSlicer.reducer;