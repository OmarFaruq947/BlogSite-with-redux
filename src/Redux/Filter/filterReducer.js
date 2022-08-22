import {
    SEARCHBYAUTHOR,
    SEARCHBYCATEGORY,
    SEARCHBYSEARCHBAR
} from "./filterActionType";
import initialState from "./filterInitialState";






const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHBYSEARCHBAR:
      const { searchText, categorys, blogAuthor } = action.payload;
      return {
        ...state,
        searchText: [...state.searchText, searchText],
        // searchText:action.payload,
        //    return{
        //     ...state,
        //     searchText:state.searchText.filter(existingText => existingText !== searchText)
        //    }
      };

    case SEARCHBYCATEGORY:
      return {
        ...state,
        categorys: state.categorys.filter(
          (exactCategory) => exactCategory !== categorys
        ),
      };

    case SEARCHBYAUTHOR:
      return {
        ...state,
        // blogAuthor:action.payload,
        blogAuthor: state.blogAuthor.filter(
          (exactAuthor) => exactAuthor !== blogAuthor
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
