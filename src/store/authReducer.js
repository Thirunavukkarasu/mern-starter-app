export const LOAD_REQUEST = 'auth/LOAD_REQUEST'
export const LOAD_SUCCESS = 'auth/LOAD_SUCCESS'
export const LOAD_FAILURE = 'auth/LOAD_FAILURE'

const loadRequest = () => ({type: LOAD_REQUEST})
const loadSuccess = response => ({type: LOAD_SUCCESS, response})
const loadFailure = error => ({type: LOAD_FAILURE, error})

export const loadUser = (state) => dispatch => {
    dispatch(loadRequest())
    return fetch('/api/users/me', {
        method : 'GET',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
        //this credentials config is required for fetching cookie details
        credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(apiResponse =>{
        dispatch(loadSuccess(apiResponse))
    })
    .catch(error => dispatch(loadFailure(error)))
}

export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_REQUEST:
            return {
                ...state,
                success: null,
                error: null,
                fetching: true
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                fetching: false,
                success: true,
                user: action.response || state.user,
                error: null
            }
        case LOAD_FAILURE:
            return {
                ...state,
                fetching: false,
                success: null,
                error: action.error
            }
      default:
        return state;
    }
  }