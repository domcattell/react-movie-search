import axios from 'axios';

//this is used for live searching.
//when the user starts typing in the SearchBar component,
//each letter will send a new request to the API.
//this helper function helps try the remedy this by
//using axios' built in cancelToken methods.
//This means that if the user types consecutively,
//and the request is still pending, it will cancel that
//request and only the latest request will be successful.
//this helps to take some of the load off when doing a request to the API
const optimiseSearch = () => {
    let source;

    return async query => {
        if(source) source.cancel();

        source = axios.CancelToken.source();
        return await axios.get(query, {cancelToken: source.token});
    }
}

export const searchRequest = optimiseSearch();