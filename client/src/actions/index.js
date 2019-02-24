// import { CALL_API, Schemas } from '../middleware/api';

// export const USER_REQUEST = 'USER_REQUEST';

// // Fetches a page of stargazers for a particular repo.
// // Bails out if page is cached and user didn't specifically request next page.
// // Relies on Redux Thunk middleware.
// export const loadStargazers = (fullName, nextPage) => (dispatch, getState) => {
//   const {
//     nextPageUrl = `repos/${fullName}/stargazers`,
//     pageCount = 0
//   } = getState().pagination.stargazersByRepo[fullName] || {}

//   if (pageCount > 0 && !nextPage) {
//     return null
//   }

//   return dispatch(fetchStargazers(fullName, nextPageUrl))
// }