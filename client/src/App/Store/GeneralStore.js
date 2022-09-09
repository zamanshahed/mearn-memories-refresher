import create from 'zustand';
import { cGetAllPost, cSaveNewPost } from '../Utility/Url';
import axios from 'axios';

const useGeneralStore = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set((state) => ({ isLoading: value })),

    allPosts: [],
    // setAllPosts: (value) => set(() => ({ allPosts: value })),
    setAllPosts: (allPosts) => set({ allPosts }),

    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));

export default useGeneralStore;

// get all post
export const getALlPost = async () => {
    const { setIsLoading, setAllPosts } = useGeneralStore.getState();
    try {
        setIsLoading(true);

        const res = await axios.get(cGetAllPost);

        console.log("getALlPost::::", res);

        if (res.status === 200) {
            setAllPosts(res.data);
        }

        setIsLoading(false);

    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
}



// save new post
export const saveNewPost = async (postForm, postImage) => {
    const { setIsLoading } = useGeneralStore.getState();
    try {
        setIsLoading(true);

        let body = {};
        if (postImage) {
            body = {
                selectedFile: postImage,
                creator: postForm.creator,
                title: postForm.title,
                message: postForm.message,
                tags: postForm.tags,
            }
        } else {
            body = {
                creator: postForm.creator,
                title: postForm.title,
                message: postForm.message,
                tags: postForm.tags,
            }
        }

        const res = await axios.post(cSaveNewPost, body);

        console.log("saveNewPost::::", res.data);
        // if (res.data.success) {
        await getALlPost();
        setIsLoading(false);
        return true;
        // } else {
        //     setIsLoading(false);
        //     return false;
        // }

    } catch (error) {
        console.log(error);
        setIsLoading(false);
        return false;
    }
}