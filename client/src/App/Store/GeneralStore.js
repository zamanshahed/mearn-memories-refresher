import create from 'zustand';
import { cGetAllPost } from '../Utility/Url';
import axios from 'axios';

const useGeneralStore = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set((state) => ({ isLoading: value })),

    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));

export default useGeneralStore;

// get all post
export const getALlPost = async () => {
    const { setIsLoading } = useGeneralStore.getState();
    try {
        setIsLoading(true);

        const res = await axios.get(cGetAllPost);

        console.log("getALlPost::::", res.data);

        setIsLoading(false);

    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
}