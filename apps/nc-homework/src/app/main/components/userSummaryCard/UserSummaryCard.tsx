import './UserSummaryCard.css';
import { Link } from 'react-router-dom';

interface UserSummaryProps {
    picture: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
}

export default function UserSummaryCard(props: UserSummaryProps) {
    const { picture, id, title, firstName, lastName, email } = props;

    return (
        <div className="UserSummaryCard">
            <img className="imageStyle" src={picture} />
            <div className="idStyle textTruncate">{id}</div>
            <div className="nameStyle textTruncate">{title}. {firstName} {lastName}</div>
            <div className="idStyle textTruncate">{email}</div>
            <div className="linkArea">
                <Link to={`/detail?id=${id}`}>Get Full Profile</Link>
            </div>
        </div>
    );
}

export { UserSummaryCard };
