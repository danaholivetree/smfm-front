import React from 'react'


const SearchBar = ({filterItems}) => {

  const handleFilter = (e) => {
    e.preventDefault()
    filterItems(e.target.value)
  }
return (
  <div>
    <div>
      <input name='searchform' type='text' placeholder='search name or decription' onChange={handleFilter}/>
    </div>

    <div>
      Category:
      <input type='checkbox' value='handmade' />
      <label htmlFor='handmade'>Handmade</label>
      <input type='checkbox' value='art' />
      <label htmlFor='art'>Art</label>
      <input type='checkbox' value='writing' />
      <label htmlFor='writing'>Writing</label>
      <input type='checkbox' value='music' />
      <label htmlFor='music'>Music</label>
    </div>
  </div>
)

}
export default SearchBar
