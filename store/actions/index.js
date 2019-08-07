export const GET_PROFILE = 'GET_PROFILE';

export function getProfile(myProfile) {
    return {
        type: GET_PROFILE,
        myProfile
    }
}
