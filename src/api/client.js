class userApiImpl {

    clientID = '5ce6b9a10adb8e0014a6f3c6'
    baseUrl = `https://${this.clientID}.mockapi.io/api/v1`;
    usersRoute = `${this.baseUrl}/users`;

    getUsers = () => this.get(this.usersRoute);

    get = url => this.wrap(fetch(url));

    wrap = async promise => {
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
