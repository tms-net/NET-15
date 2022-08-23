function updateDisplay(verse) {
    const poemDisplay = document.querySelector('pre');

    verse = verse.replace(' ', '').toLowerCase();
    const url = `Text/${verse}.txt`;

    console.log(url);

    updateWithFetchApi(url);

    function updateWithXHR()
    {
        const request = new XMLHttpRequest();

        try
        {
            request.open('GET', url);

            request.responseType = 'text';

            request.addEventListener('load', () => 
            {
                poemDisplay.textContent = request.response;
            });
            request.addEventListener('error', () =>
            {
                console.error('XHR error');
            });

            request.send();

        }
        catch (error)
        {
            console.error(`XHR error ${request.status}`);
            poemDisplay.textContent = 'error';
        }
    }

    function updateWithFetchApi(url) {
        fetch(url)
            .then((response) => {
                // Our handler throws an error if the request did not succeed.
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                // Otherwise (if the response succeeded), our handler fetches the response
                // as text by calling response.text(), and immediately returns the promise
                // returned by `response.text()`.
                return response.text();
            })
            .then(text => {
                poemDisplay.textContent = text;
            })
            .catch((error) => {
                poemDisplay.textContent = `Could not fetch verse: ${error}`
            });

        // Promise<T> -> Task<T>
        // Promise<Response> -> Task<T>    
    }
}

window.onload = function () {
    const verseChoose = document.querySelector('select');
    updateDisplay('Verse 1');
    verseChoose.value = 'Verse 1';

    verseChoose.addEventListener('change', () => {
        const verse = verseChoose.value;
        updateDisplay(verse);
    });
}