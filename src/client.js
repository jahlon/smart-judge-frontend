class Client {
    loginUser = async (auth_code) => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("client_id", "3ibh8lcb3hg36pk35sl58u042f");
        urlencoded.append("code", auth_code);
        urlencoded.append("redirect_uri", "http://localhost:3000");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        try {
            const response = await fetch("https://smartjudge.auth.us-east-2.amazoncognito.com/oauth2/token", requestOptions);
            return await this.getUserInfo(response.access_token)
        } catch (error) {
            return console.log('error', error);
        }
    }

    getUserInfo = async (token) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        }

        try {
            const response = await fetch("https://smartjudge.auth.us-east-2.amazoncognito.com/oauth2/userInfo", requestOptions);
            return await response.json();
        } catch (error) {
            return console.log('error', error);
        }
    }

}

export default new Client();

    