import React from 'react';

function SearchForm(props) {

  const onSubmit = (e) => {
    e.preventDefault()
    const { query, engine } = e.target.elements
    props.onSubmit({ query: query.value, engine: engine.value })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='input' id="query" placeholder='Search on wikipedia' />
            </div>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <div className='select'>
                <select className='' id="engine">
                  <option value='google,bing'>Google and Bing</option>
                  <option value='bing'>Bing</option>
                  <option value='google'>Google</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='control'>
        <button className='button is-primary' type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchForm