import './UserInfo.css';
import TitleAndText from '../molecules/TitleAndText'

interface UserInfoProps {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
}

export default function UserInfo(props: UserInfoProps) {
    const { id, title, firstName, lastName, gender, email, dateOfBirth, registerDate, phone } = props;

    return (
        <div className="UserInfo">
            <div className="idStyle">{id}</div>
            <div className="nameStyle">
                {title}. {firstName} {lastName}
            </div>
            <TitleAndText title="Gender" text={gender}/>
            <TitleAndText title="Date Of Birth" text={dateOfBirth}/>
            <TitleAndText title="Register Date" text={registerDate}/>
            <TitleAndText title="Email" text={email}/>
            <TitleAndText title="Phone" text={phone}/>

        </div>
    );
}

export { UserInfo };
