import { createSlice } from '@reduxjs/toolkit';
const UwaState = {
    Step1: '', Step2: '', Step3: '',
    Step4: '', Step5: '', Step6: '',
    Step7: '', Step8: '', Step9: '', Step10: ''
}
const uwaSlice = createSlice({
    name: 'uwa',
    initialState: UwaState,
    reducers: {
        step1_status(state, action) {
            state.Step1 = action.payload
        },
        step2_status(state, action) {
            state.Step2 = action.payload
        },
        step3_status(state, action) {
            state.Step3 = action.payload
        },
        step4_status(state, action) {
            state.Step4 = action.payload
        },
        step5_status(state, action) {
            state.Step5 = action.payload
        },
        step6_status(state, action) {
            state.Step6 = action.payload
        },
        step7_status(state, action) {
            state.Step7 = action.payload
        },
        step8_status(state, action) {
            state.Step8 = action.payload
        },
        step9_status(state, action) {
            state.Step9 = action.payload
        },
        step10_status(state, action) {
            state.Step10 = action.payload
        },
        step_reset(state) {
            state = {}
        }
    },
});
export const uwaActions = uwaSlice.actions
export default uwaSlice;
