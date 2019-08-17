'use strict';

function getLyrics(artist, title) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
            alert(`Something went wrong: ${err.message}`);
        })
}

function displayResults(responseJson) {
    $('#results').html('');
    $('#results').append(`${responseJson.lyrics}`);
    $('#results').removeClass('hidden');
}

function watchForm() {
    $('#form').submit(event => {
        event.preventDefault();
        const artist = $('.js-query-artist').val();
        const title = $('.js-query-title').val();
        getLyrics(artist, title);
    })
}

$(watchForm);