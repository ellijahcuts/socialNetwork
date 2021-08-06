import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '4206485e-0290-4078-a67d-87761ec4f1b5'},
    data:{}
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
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    postFollow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    deleteUnfollow(id:string){
        return instance.delete(`follow/${id}`, )
            .then(response => {
                return response.data
            })
    }

}
