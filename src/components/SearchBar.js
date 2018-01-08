import React from 'react'


const SearchBar = ({filterItems, filterCategory}) => {

  const handleFilter = (e) => {
    e.preventDefault()
    filterItems(e.target.value)
  }
  const handleCheck = (e) => {
    filterCategory(e.target.value, e.target.checked)
  }
  
  return (
    <div>
      <div>
        <input name='searchform' type='text' placeholder='search name or decription' onChange={handleFilter}/>
      </div>

      <div>
        Category:
        <input type='checkbox' value='handmade' onChange={handleCheck} />
        <label htmlFor='handmade'>Handmade </label>
        <input type='checkbox' value='art' onChange={handleCheck}/>
        <label htmlFor='art'>Art </label>
        <input type='checkbox' value='writing' onChange={handleCheck}/>
        <label htmlFor='writing'>Writing </label>
        <input type='checkbox' value='music' onChange={handleCheck}/>
        <label htmlFor='music'>Music </label>
      </div>
    </div>
  )

}
export default SearchBar
