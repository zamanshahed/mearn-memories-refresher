import PostMessage from "../models/PostMessage.js";

export const getPosts = async (req, res) => {    
    res.json("Hey mom! Say Cheers to my new api response ! :P ");
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

// save a new post
export const createPosts = async (req, res) => {
    const postBody = req.body;

    const newPost = new PostMessage(postBody);
    try {
        await newPost.save();
        res.status(201).json(newPost).send("Post created successfully !");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
 