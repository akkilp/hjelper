


  /* Higher order function which can be used for e.g. 
    1) find unique values, 
    2) sort items by popularity
   */
  
exports.getCategories = (array, expression) => {
    switch(expression){
      case 'findUniques': 
        return findUniques()
      case 'findMostPopular': 
        return ''
      default:
        return null
    }
}

// export const getCategories = () => {
//     const combineCategories = books.allBooks.reduce((categories,current)=>{
//       if(current.genres) return categories.concat(current.genres)
//       else return categories
//     }, [])

//     console.log(combineCategories)

//     const uniqueCategories = combineCategories.map((item,index,arr)=> {
//       const nulledArr = arr.indexOf(item)===index ? item : "null"
//       return nulledArr.filter(item=>item!=="null")
//     })
// }

const findUniques = (arr) => {
    return arr.filter( (item, index, arr ) => {
        console.log(arr.indexOf(item), index)
        arr.indexOf(item)===index 
      })
}

