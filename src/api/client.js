import axios from 'axios'

class userApiImpl {

    clientID = '5ce6b9a10adb8e0014a6f3c6'
    baseUrl = `https://${this.clientID}.mockapi.io/api/v1`;
    usersRoute = `${this.baseUrl}/users`;
    updateProfileRoute = `${this.baseUrl}/profile`;

    getUsers = async () => {
        let response;
        try {
            response = await axios.get(this.usersRoute)
            return response.data;
        } catch (e) {
            throw e.message
        }
    }

    updateProfile = async data => {
        let response;
        try {
            response = await axios.post(this.updateProfileRoute, data);
            console.log('update profile response', response)
            return response;
        }
        catch (e) {
            throw e.message
        }
    }

    getUsersOld = () => this.get(this.usersRoute);

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
