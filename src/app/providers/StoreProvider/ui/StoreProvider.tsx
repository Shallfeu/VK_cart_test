import {ReactNode} from "react";
import {RootStore} from "@/app/providers/StoreProvider/config/store.ts";
import {RootStoreContext} from "@/app/providers/StoreProvider/config/rootStoreContext.ts";

interface StoreProviderProps {
    children?: ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
    const {children} = props

    return <RootStoreContext.Provider value={new RootStore()}>{children}</RootStoreContext.Provider>
}

export default StoreProvider