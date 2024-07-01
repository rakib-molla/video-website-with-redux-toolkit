import axios from "../../utils/axios"

//http://localhost:9000/videos?tags_like=react&tags_like=debounce&id_ne=6&_limit=1


export const getRelatedVideo = async ({tags, id})=>{
    const limit = 5;

    let queryString = 
        tags?.length > 0 ? tags.map((tag)=> `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` 
            : 
        `id_ne=${id}&_limit=${limit}`;

    const response = await axios.get(`/videos?${queryString}`);
    
    return response.data;
}

