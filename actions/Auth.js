import {AsyncStorage} from "react-native";

const CLIENT_ID = '33e1f1c73faff37ed56b6f079189c2ef37897d6757c9978ce920f61953507c64';
const CLIENT_SECRET = '745bb5fc2599e11af6782aa79bd8fbbaeebe3c22f63d3102e83761514cafb17a';
const URI = 'exp://127.0.0.1:19000';

class Auth {

    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token);
        } catch (error) {
            // Error saving data
        }
    };

    getToken = (code) => {
        let payload = 'grant_type=authorization_code&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&code=' + code + '&redirect_uri=' + URI;
        return fetch('https://api.intra.42.fr/oauth/token',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: payload
            })
            .then((response) => response.json())
            .then((responseData) => {
                this.storeToken(responseData['access_token']);
                return 'success';
            });
    };

    checkToken = (result) => {
        return fetch('https://api.intra.42.fr/oauth/token/info',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + result
                },
            })
            .then((response) => response.json())
            .then(response => {
                if (response.error === 'invalid_request') {
                    AsyncStorage.removeItem('userToken');
                    return false;
                }
                else
                    return true;
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export default Auth