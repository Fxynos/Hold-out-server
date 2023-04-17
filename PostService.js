import PostModel from "./PostModel.js"
class PostService {
    async create(post) {
        const createdPost = await PostModel.create(post)
        return createdPost
    }

    async getAll() {
            const posts = await PostModel.find()
            return posts
    }

    async getOne(id) {
        if (!id) 
        {
            throw new Error('Не указан id')
        }
        const post = await PostModel.findById(id)
        return post
    }

    async update(post) {
        if (!post._id) 
        {
            throw new Error("Не указан id")
        }
        const updatedPost = await PostModel.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost  
    }

    async delete(id) {
        if (!id) 
        {
            throw new Error("Не указан id")
        }
        const post = await PostModel.findByIdAndDelete(id);
        return post
    }
}

export default new PostService()