import { createSlice } from '@reduxjs/toolkit';
let lastProject = 0;
const projectSlice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (project, action) => {
            project.push({
                id: ++lastProject,
                name: action.payload.name
            })
        }
    }
})

export const { projectAdded } = projectSlice.actions
export default projectSlice.reducer;
console.log(projectSlice);