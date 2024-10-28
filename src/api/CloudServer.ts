


class CloudServer {
    private serverRootDomain: string;
    constructor(){
        // ====== IMPORTANT NEEDS THE SLASH AT THE END OF THIS URL ============ //
        this.serverRootDomain = process.env.VITE_CLOUD_SERVER_URL ? process.env.VITE_CLOUD_SERVER_URL : '';  //FOR DEPLOY --
    } 

    async postRequestPromise(url: string, data: object = {}, useLocalHost: boolean) {
        //check to see if the first character in url is '/' and strip it if it is
        if (url.charAt(0) === '/') {
            url = url.substring(1);
        }
        
        const fullAPI_URL = (useLocalHost === true ? 'http://localhost:8383/' : this.serverRootDomain) + url;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        return fetch(fullAPI_URL, options)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }
}

export default new CloudServer()


