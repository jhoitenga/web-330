// Create a class named HttpClient
export class HttpClient{
    // Create an async function named get w/ two parameters: url & params.
    async function get(url, params = ''){ // Set the params parameter to a default empty string
        
        // Instantiate a new URL object w/ url param & assign the results to the url parameter
        let urlObj = new URL(url);
        
        // Instantiate a new URLSearchParams object w/ params parameter & assigning it to the url.search property
        let paramsObj = new URLSearchParams(params);
        urlObject.search = paramsObject

        // Create an object literal named res & fetch the url.toString() variable & request as a GET request
        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })
        
        // Return the res object literal as JSON
        return res.json();
    }
}
