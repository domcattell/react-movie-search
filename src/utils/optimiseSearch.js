import axios from 'axios';

const optimiseSearch = () => {
    let source;

    return async query => {
        if(source) source.cancel();

        source = axios.CancelToken.source();
        return await axios.get(query, {cancelToken: source.token});
    }
}

export const searchRequest = optimiseSearch();