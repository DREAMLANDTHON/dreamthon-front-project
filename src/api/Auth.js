export function login({nickname, password}) {
    // 로그인 API 호출
    const user = {nickname: "dreamer", profileImgUrl: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F033%2F046%2Fb94.jpg"};
    localStorage.setItem('user', JSON.stringify(user));
}

export function logout() {
    // 로그아웃 성공
    localStorage.removeItem('user');
    alert('log out!');
}

export function register(userInfo) {
    // 회원 가입 요청
    const user = {nickname: "dreamer", profileImgUrl: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F033%2F046%2Fb94.jpg"};
    localStorage.setItem('user', JSON.stringify(user));
}

export function onUserStateChange(callback) {
    const updateUser = checkUserAuthentication();
    callback(updateUser);
}

const checkUserAuthentication = () => {
    return JSON.parse(localStorage.getItem('user'));
}
