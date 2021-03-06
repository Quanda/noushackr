import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchTrendingStacks} from './global';

export const EMPTY_USER_DATA = 'EMPTY_USER_DATA';
export const emptyUserData = () => ({
    type: EMPTY_USER_DATA
})

export const DISMISS_FEEDBACK = 'DISMISS_FEEDBACK';
export const dismissFeedback = () => ({
    type: DISMISS_FEEDBACK,
})

export const FETCH_STACK_REQUEST = 'FETCH_STACK_REQUEST';
export const fetchStackRequest = () => ({
    type: FETCH_STACK_REQUEST
});

export const FETCH_STACK_SUCCESS = 'FETCH_STACK_SUCCESS';
export const fetchStackSuccess = data => ({
    type: FETCH_STACK_SUCCESS,
    data
});

export const FETCH_STACK_ERROR = 'FETCH_STACK_ERROR';
export const fetchStackError = error => ({
    type: FETCH_STACK_ERROR,
    error
});
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = data => ({
    type: FETCH_USER_DATA_SUCCESS,
    data
});
export const FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR';
export const fetchUserDataError = error => ({
    type: FETCH_USER_DATA_ERROR,
    error
});

export const SAVE_VALUES = 'SAVE_VALUES';
export const saveValues = data => ({
    type: SAVE_VALUES,
    data
});

export const CREATE_STACK_REQUEST = 'CREATE_STACK_REQUEST';
export const createStackRequest = () => ({
    type: CREATE_STACK_REQUEST
});

export const CREATE_STACK_SUCCESS = 'CREATE_STACK_SUCCESS';
export const createStackSuccess = data => ({
    type: CREATE_STACK_SUCCESS,
    data
});

export const CREATE_STACK_ERROR = 'CREATE_STACK_ERROR';
export const createStackError = error => ({
    type: CREATE_STACK_ERROR,
    error
});

export const SAVE_STACK_REQUEST = 'SAVE_STACK_REQUEST';
export const saveStackRequest = () => ({
    type: SAVE_STACK_REQUEST
});

export const SAVE_STACK_SUCCESS = 'SAVE_STACK_SUCCESS';
export const saveStackSuccess = data => ({
    type: SAVE_STACK_SUCCESS,
    data
});

export const SAVE_STACK_ERROR = 'SAVE_STACK_ERROR';
export const saveStackError = error => ({
    type: SAVE_STACK_ERROR,
    error
})
export const UPDATE_STACK_REQUEST = 'UPDATE_STACK_REQUEST';
export const updateStackRequest = () => ({
    type: UPDATE_STACK_REQUEST
});

export const UPDATE_STACK_SUCCESS = 'UPDATE_STACK_SUCCESS';
export const updateStackSuccess = data => ({
    type: UPDATE_STACK_SUCCESS,
    data
});
export const UPDATE_STACK_ERROR = 'UPDATE_STACK_ERROR';
export const updateStackError = error => ({
    type: UPDATE_STACK_ERROR,
    error
})
export const DELETE_STACK_SUCCESS = 'DELETE_STACK_SUCCESS';
export const deleteStackSuccess = () => ({
    type: DELETE_STACK_SUCCESS
})

export const DELETE_STACK_ERROR = 'DELETE_STACK_ERROR';
export const deleteStackError = error => ({
    type: DELETE_STACK_ERROR,
    error
})

export const CREATE_PUBLIC_STACK_REQUEST = 'CREATE_PUBLIC_STACK_REQUEST';
export const createPublicStackRequest = () => ({
    type: CREATE_PUBLIC_STACK_REQUEST
});

export const CREATE_PUBLIC_STACK_SUCCESS = 'CREATE_PUBLIC_STACK_SUCCESS';
export const createPublicStackSuccess = () => ({
    type: CREATE_PUBLIC_STACK_SUCCESS
});

export const CREATE_PUBLIC_STACK_ERROR = 'CREATE_PUBLIC_STACK_ERROR';
export const createPublicStackError = error => ({
    type: CREATE_PUBLIC_STACK_ERROR,
    error
})

export const DELETE_PUBLIC_STACK_REQUEST = 'DELETE_PUBLIC_STACK_REQUEST';
export const deletePublicStackRequest = error => ({
    type: DELETE_PUBLIC_STACK_REQUEST
});

export const DELETE_PUBLIC_STACK_SUCCESS = 'DELETE_PUBLIC_STACK_SUCCESS';
export const deletePublicStackSuccess = () => ({
    type: DELETE_PUBLIC_STACK_SUCCESS
});

export const DELETE_PUBLIC_STACK_ERROR = 'DELETE_PUBLIC_STACK_ERROR';
export const deletePublicStackError = error => ({
    type: DELETE_PUBLIC_STACK_ERROR,
    error
})
export const COPY_SHARE_URL = 'COPY_SHARE_URL';
export const copyShareUrl = () => ({
    type: COPY_SHARE_URL
})
export const FOLLOW_NOOTROPIC_REQUEST = 'FOLLOW_NOOTROPIC_REQUEST';
export const followNootropicRequest = () => ({
    type: FOLLOW_NOOTROPIC_REQUEST
});

export const FOLLOW_NOOTROPIC_SUCCESS = 'FOLLOW_NOOTROPIC_SUCCESS';
export const followNootropicSuccess = data => ({
    type: FOLLOW_NOOTROPIC_SUCCESS,
    data
});
export const FOLLOW_NOOTROPIC_ERROR = 'FOLLOW_NOOTROPIC_ERROR';
export const followNootropicError = error => ({
    type: FOLLOW_NOOTROPIC_ERROR,
    error
})

export const UNFOLLOW_NOOTROPIC_REQUEST = 'UNFOLLOW_NOOTROPIC_REQUEST';
export const unFollowNootropicRequest = () => ({
    type: UNFOLLOW_NOOTROPIC_REQUEST
});

export const UNFOLLOW_NOOTROPIC_SUCCESS = 'UNFOLLOW_NOOTROPIC_SUCCESS';
export const unFollowNootropicSuccess = data => ({
    type: UNFOLLOW_NOOTROPIC_SUCCESS,
    data
});
export const UNFOLLOW_NOOTROPIC_ERROR = 'UNFOLLOW_NOOTROPIC_ERROR';
export const unFollowNootropicError = error => ({
    type: UNFOLLOW_NOOTROPIC_ERROR,
    error
})
export const FETCH_FOLLOWED_NOOTROPICS_REQUEST = 'FETCH_FOLLOWED_NOOTROPICS_REQUEST';
export const fetchFollowedNootropicsRequest = data => ({
    type: FETCH_FOLLOWED_NOOTROPICS_REQUEST,
    data
})
export const FETCH_FOLLOWED_NOOTROPICS_SUCCESS= 'FETCH_FOLLOWED_NOOTROPICS_SUCCESS';
export const fetchFollowedNootropicsSuccess = data => ({
    type: FETCH_FOLLOWED_NOOTROPICS_SUCCESS,
    data
})
export const FETCH_FOLLOWED_NOOTROPICS_ERROR = 'FETCH_FOLLOWED_NOOTROPICS_ERROR';
export const fetchFollowedNootropicsError = data => ({
    type: FETCH_FOLLOWED_NOOTROPICS_ERROR,
    data
})

// GET stack from /api/:username/stacks/:code
export const fetchStack = (code, username) => (dispatch, getState) => {
    dispatch(fetchStackRequest());
    return fetch(`${API_BASE_URL}/${username}/stacks/${code}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchStackSuccess(data)))
        .catch(err => dispatch(fetchStackError(err)))
}

// GET stack from /api/stacks/${code}
// then POST stack data to /api/{username}/stacks
export const saveStack = ({code}) => (dispatch, getState) => {
    dispatch(saveStackRequest());
    return fetch(`${API_BASE_URL}/stacks/${code}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            return dispatch(createStack(data, code))
        })
        .then(() => dispatch(saveStackSuccess()))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(saveStackError(err)))
}

export const createPublicStack = (data) => (dispatch, getState) => {
    dispatch(createPublicStackRequest());
    const token = getState().auth.token;  
    delete data['_id'] // remove _id to avoid MongoDB error
    return fetch(`${API_BASE_URL}/stacks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(createPublicStackSuccess()))
        .then(() => dispatch(fetchTrendingStacks()))
        .catch(err => dispatch(createPublicStackError(err)));
};

export const deletePublicStack = (code, author) => (dispatch, getState) => {
    dispatch(deletePublicStackRequest());
    const username = getState().auth.currentUser.username;
    if(author !== username) {
        console.log('Sorry, you are not the Stack author')
        return dispatch(deletePublicStackError('Sorry, you are not the Stack author'))
    } else {
        const token = getState().auth.token;  
        return fetch(`${API_BASE_URL}/stacks/${code}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(() => dispatch(deletePublicStackSuccess()))
            .then(() => dispatch(fetchUserData()))
            .then(() => dispatch(fetchTrendingStacks()))
            .catch(err => dispatch(deletePublicStackError(err)));
    }
};

export const createStack = (data, code) => (dispatch, getState) => {
    dispatch(createStackRequest());
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    const stackData = {
        ...data,
        code: data.code || Math.random().toString(36).substring(5),
        author: data.author || username
    }
    return fetch(`${API_BASE_URL}/${username}/stacks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(stackData)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(createStackSuccess(data)))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(createStackError(err)));
};

export const deleteStack = (code) => (dispatch, getState) => {
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;

    return fetch(`${API_BASE_URL}/${username}/stacks/${code}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(deleteStackSuccess()))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(deleteStackError(err)))
}

export const updateStack = (stack, code) => (dispatch, getState) => {
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;

    dispatch(updateStackRequest());
    return fetch(`${API_BASE_URL}/${username}/stacks/${code}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stack)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(updateStackSuccess()))
        .then(() => dispatch(fetchUserData()))
        .catch(err => dispatch(updateStackError(err))) 
}

export const fetchUserData = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchUserDataSuccess(data)))
        .catch(err => dispatch(fetchUserDataError(err)));
};

export const fetchFollowedNootropics = () => (dispatch, getState) => {
    dispatch(fetchFollowedNootropicsRequest());

    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/${username}/nootropics`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchFollowedNootropicsSuccess(data)))
        .catch(err => dispatch(fetchFollowedNootropicsError(err)));
};

export const followNootropic = (nootropic) => (dispatch, getState) => {
    dispatch(followNootropicRequest());

    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/${username}/nootropics`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nootropic)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(followNootropicSuccess(data)))
        .catch(err => dispatch(followNootropicError(err)));
};

export const unFollowNootropic = (nootropic) => (dispatch, getState) => {
    dispatch(unFollowNootropicRequest());

    const token = getState().auth.token;
    const username = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/${username}/nootropics/${nootropic.code}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(dispatch(unFollowNootropicSuccess({...nootropic})))
        .catch(err => {
            dispatch(unFollowNootropicError(err))
        })
};