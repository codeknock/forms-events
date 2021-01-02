import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 
        'Client-ID BtBhSi4-c3LfLzNf7BxwIaAjqApMlon6t2ekd6b9wZ8'
    }

});