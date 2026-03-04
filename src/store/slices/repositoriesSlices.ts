import { getRepositories } from '../../services/api';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Repository {
    id: number,
    name: string,
    html_url: string
}
interface RepositoryState {
    repositories: Repository[],
    loading: boolean
}
const initialState: RepositoryState = {
    repositories: [],
    loading: false
}

export const fetchRepositories = createAsyncThunk(
    "repositories/fetchRepositories",
    async (userName: string, thunkAPI) => {
        console.log("Estado atual: ", thunkAPI.getState());
        const repositories = await getRepositories(userName)
        return repositories
    }
)

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.loading = false
                state.repositories = action.payload
            })
            .addCase(fetchRepositories.rejected, (state) => {
                state.loading = false
            })
    }
})
export default repositoriesSlice.reducer