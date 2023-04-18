export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=INrri4NR520uQljHYC2RSYDJnMWnzSeu&q=${category}&limit=10`;
    const resp = await fetch(url);
    
    const { data } = await resp.json();


    const gifs = data.map( (gifs) =>  ({
        id: gifs.id,
        title: gifs.title,
        url: gifs.images.downsized_medium.url
    }))

    console.log(gifs)
    
    return gifs;
}