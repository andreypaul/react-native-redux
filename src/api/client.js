class userApiImpl {
    clientID = '5ce6b9a10adb8e0014a6f3c6'
    baseUrl = `https://${this.clientID}.mockapi.io/api/v1`;

    getUsers = () => this._get(`${this.baseUrl}/users`);

    _get = url => this._wrap(fetch(url));

    _wrap = async promise => {
        let response;
        try {
            response = await promise;
            let responseJson = await response.json();
            return responseJson;
        } catch (e) {
            throw e.message
        }
    }
}

export default userApi = new userApiImpl();