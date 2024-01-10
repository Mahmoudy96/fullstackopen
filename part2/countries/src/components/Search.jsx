const Search = ({value, onChange}) => {
    return(
    <>
      <div>
      Search for countries by name: <input value={value} onChange={onChange}/>
      </div>   
    </>
    )
  }

  export default Search