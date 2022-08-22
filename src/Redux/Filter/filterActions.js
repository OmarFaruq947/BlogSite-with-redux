import { SEARCHBYAUTHOR, SEARCHBYCATEGORY, SEARCHBYSEARCHBAR } from "./filterActionType"


// searchBySearchBar
export const searchBySearchBar = (id, searchText)=>{
    return{
        type:SEARCHBYSEARCHBAR,
        payload:{
            id,
            searchText
        },
    }
}



// searchByCategory 
export const searchByCategory = (categoryName)=>{
    return{
        type:SEARCHBYCATEGORY,
        payload:categoryName,
    }
}




// searchByAuthor
export const searchByAuthor = (authorName)=>{
    return{
        type:SEARCHBYAUTHOR,
        payload:authorName,
    }
}