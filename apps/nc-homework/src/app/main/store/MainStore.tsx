import { makeObservable, action, observable, computed, toJS } from 'mobx';
import { mainRepository } from './api/MainRepository';

export interface MainStoreProps {
    current: number;
    total: number;
    pageSize: number;

    users: User[];
}
interface User {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    picture: string;
    location: Location;
}
interface Location {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}

export default class MainStore implements MainStoreProps {
    constructor() {
        makeObservable(this, {
            users: observable,
            current: observable,
            total: observable,
            fetchUserList: action,
            setCurrent: action,
            getUsers: computed,
        });
    }
    current: number = 1;
    total: number = 0;
    pageSize: number = 10;

    users: User[] = [];

    get getUsers() {
        return toJS(this.users);
    }

    setCurrent = (pageNum: number) => {
        this.current = pageNum;
    };

    fetchUserList = async (): Promise<any> => {
        let pageNum = this.current - 1;
        let tmpResponse = await mainRepository.fetchUserList(pageNum, this.pageSize);
        this.users = tmpResponse.data;
        this.total = tmpResponse.total;
    };
}

export const mainStore = new MainStore();
