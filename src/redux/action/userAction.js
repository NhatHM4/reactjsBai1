export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS"
const doLogin = (result)=>{

    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: result,
      }
}

export {doLogin}