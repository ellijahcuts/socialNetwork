import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '2b11d5ae-4d13-449a-88ab-c22c798b441d'},
    data: {}
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: number|null) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number|null) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`,{status})
            .then(response => {
                return response.data
            })
    },
}

export const followAPI = {
    postFollow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    deleteUnfollow(id: string) {
        return instance.delete(`follow/${id}`,)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email:string, password:string, rememberMe:boolean=false) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}
