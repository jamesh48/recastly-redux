var searchYouTube = ({key, query, max = 5}, callback) => {
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&type=video&videoEmbeddable=true&key=${key}`).then(
    response => {
      if (!response.ok) {
        throw new Error ('Not Working');
      }
      return response.json();
    }
  ).then((data) => {
    if (callback) {
      callback(data.items);
    }
  }).catch(function(error) { console.log(error); });

  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: key,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // })
  //   .done(({items}) => {
  //     if (callback) {
  //       callback(items);
  //     }
  //   })
  //   .fail(({responseJSON}) => {
  //     responseJSON.error.errors.forEach((err) =>
  //       console.error(err)
  //     );
  //   });
};

export default searchYouTube;




