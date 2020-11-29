function searchById(value) {
    return axios.get(`https://www.omdbapi.com/?apikey=52207944&i=${value}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}
function searchByTitle(value, id) {
    return axios.get(`https://www.omdbapi.com/?apikey=52207944&s=${value}`)
        .then(res => {
            res.data.Search.filter((data) => {
                return data.imdbID !== id;
            })
        })
        .catch(err => console.error(err))
}