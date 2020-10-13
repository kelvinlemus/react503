const SEARCH_API_BASE_URL = process.env.REACT_APP_SEARCH_API_BASE_URL;

const search = (params={}) => {
  const queryParams = new URLSearchParams(params)
  
  return window
    .fetch(`${SEARCH_API_BASE_URL}/api/v1/search?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      }
    })
    .then(
      (res) => res.json()
    )
};


export { search };