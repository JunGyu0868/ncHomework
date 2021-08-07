import { makeObservable, action, observable, computed, toJS } from 'mobx';
import { detailRepository } from './api/DetailRepository';
import moment from 'moment';

interface UserProps {
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

export default class DetailStore implements UserProps {

    constructor() {
        makeObservable(this, {
            id:observable,
            title:observable,
            firstName:observable,
            lastName:observable,
            gender:observable,
            email:observable,
            dateOfBirth:observable,
            registerDate:observable,
            phone:observable,
            picture:observable,
            location:observable,
            fetchUserDetailInfo: action,
            setId:action

        });
    }

    id: string = "";
    title: string = "";
    firstName: string = "";
    lastName: string = "";
    gender: string = "";
    email: string = "";
    dateOfBirth: string = "";
    registerDate: string = "";
    phone: string = "";
    picture: string = "";
    location: Location = {
        street: '',
        city: '',
        state: '',
        country: '',
        timezone: '',
    }

    setId = (id:string) =>{
        this.id = id
    }

    fetchUserDetailInfo = async (): Promise<any> => {
        let tmpResponse = await detailRepository.fetchUserDetailInfo(this.id);

        this.id = tmpResponse.id
        this.title = tmpResponse.title
        this.firstName = tmpResponse.firstName
        this.lastName = tmpResponse.lastName
        this.gender = tmpResponse.gender
        this.email = tmpResponse.email
        this.dateOfBirth = moment(tmpResponse.dateOfBirth).format('YYYY-MM-DD')
        this.registerDate = moment(tmpResponse.registerDate).format('YYYY-MM-DD')
        this.phone = tmpResponse.phone
        this.picture = tmpResponse.picture
        this.location = tmpResponse.location
    };
}

export const detailStore = new DetailStore();
