import { Store } from "react-stores";

interface IStoreState {
    authorized: boolean;
    token: any;
}

export const store = new Store<IStoreState>({
    authorized: false,
    token:''
});