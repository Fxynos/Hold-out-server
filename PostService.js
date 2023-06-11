import PostModel from "./PostModel.js"
import FileService from "./FileService.js"

class PostService {
    async create(file) {
        const fileName = FileService.saveFile(file)
        const createdPost = await PostModel.create({story: fileName})
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

    async deleteAll() {
        const post = await PostModel.deleteMany({"story": null});
        return post
    }

    async getFiles()
    {
        const files = await FileService.getFiles()
        return files
    }
}

export default new PostService()