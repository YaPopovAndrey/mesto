export default class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        this._id;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        }
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar({ avatar }) {
        this._avatar.src = avatar;
    }
}