import {createContext, useContext} from "react";
import {RootStore} from "@/app/providers/StoreProvider/config/store.ts";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(RootStoreContext);
    if (context === null) {
        throw new Error('Root Store Provider error');
    }
    return context;
}