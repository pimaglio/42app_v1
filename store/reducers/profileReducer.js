const initialState = { userProfile: [] };

function toggleProfile(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            nextState = {
                ...state,
                userProfile: [...state.userProfile, action.value]
            };
            return nextState || state;
        default:
            return state
    }
}

export default toggleProfile
