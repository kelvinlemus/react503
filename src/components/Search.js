import React from 'react';
import { search } from '../api';
import { useSearchReducer } from '../reducers/searchReducer';
import SearchForm from './SearchForm';
import SearchListResult from './SearchListResult';

function Search() {
  const [searchParams, setSearchParams] = React.useState(null)
  
  const {data, status, error, run} = useSearchReducer({
    status: searchParams ? 'pending' : 'idle'
  })

  React.useEffect(() => {
    if (searchParams) {
      return run(search(searchParams))
    }
  }, [searchParams])

  const handleSubmit = ({ query, engine }) => {
    console.log(query, engine);
    setSearchParams({ query, engine })
  }

  return (
    <>
      <div className='columns'>
        <div className='column is-half is-offset-one-quarter'>
          <SearchForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <SearchListResult status={status} error={error} data={data}/>
        </div>
      </div>
    </>
  )
}

export default Search;