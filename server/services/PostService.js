import Post from "../models/Post.js";
import { technoDomParser } from "../parser/parser.js";

class PostService {
    async create(STORE_URL, technoDomCategories) {
        // const createdPost = await Post.create(post);
        // return createdPost
        let counter = 0;
        for (const category in technoDomCategories) {
            console.log(`TechnoDom Parser: category=${category}`);
            const baseURL = `${STORE_URL}/${technoDomCategories[Object.keys(technoDomCategories)[counter]]}`;
            const data = await technoDomParser(baseURL, baseURL, category);
            for (const dataItem of data) {
                const existingProduct = await Post.findOne({link: dataItem.link});
                if (!existingProduct) {
                    await Post.create(dataItem);
                }
            }
            counter++;
            console.log(`${category}'s parsing finished. ${data.length} data has been parsed.`);
        }
        return "parsed successful";
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("there's no selected ID")
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error("there's no selected ID")
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error("there's no selected ID")
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
}

export default new PostService();