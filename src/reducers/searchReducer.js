import React from 'react';

function searchReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, params: null, error: null }
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, params: null, error: null }
    }
    case 'rejected': {
      return { status: 'rejected', data: null, params: null, error: action.error }
    }
    default: {
      throw new Error('Invalid action type')
    }
  }
}

function useSearchReducer(initialState={}) {
  const [searchState, setSearchState] = React.useReducer(searchReducer, 
    { status: 'idle', params: null, data: null, error: null, ...initialState }
  )

  const run = React.useCallback((promise) => {
    setSearchState({ type: 'pending' })
    promise.then(
      res => {
        setSearchState({ type: 'resolved', data: res.data })
      },
      error => {
        setSearchState({ type: 'rejected', error })
      }
    )
  })

  return { ...searchState, run }
}

export { searchReducer, useSearchReducer };