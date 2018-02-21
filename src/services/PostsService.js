import Api from '@/services/Api'

export default {
    async fetchPosts() {
        return await Api().get('posts')
    },
    async getPost(id) {
        return await Api().get('posts/' + id)
    },
    async addPost(params) {
        return await Api().post('posts', params)
    },
    async updatePost(params) {
        return await Api().put('posts/' + params._id, params)
    },
    async deletePost(id) {
        return await Api().delete('posts/' + id)
    }
}