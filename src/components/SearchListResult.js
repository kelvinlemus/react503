import React from 'react';

function DataView({ items, engine }) {
  if (items.length == 0) return null

  return (
    <>
      <h1 className='is-size-3'>{engine}</h1>
      {items.map((item) => (
        <div className="card" key={item.title}>
          <div className="card-content">
            <p className="title">
              {item.title}
            </p>
            <p className="subtitle">
              <a href={item.url} target="_blank">
                {item.url}
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

function SearchListResult({ status, data, error }) {
  if (error) {
    return <p>We got an error, try again</p>
  } else if (status === 'idle') {
    return <p>Search on wikipedia by filling out the form and click on "Search"</p>
  } else if (status == 'pending') {
    return <p>Loading...</p>
  } else if (!data) {
    return null
  }


  return (
    <>
    <DataView engine='Bing' items={data.bing_results} />
    <br/>
    <DataView engine='Google' items={data.google_results} />
    </>
  )
}

export default SearchListResult;