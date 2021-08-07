import TitleAndText from '../molecules/TitleAndText'
import './UserLocation.css'


interface UserLocationProps {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}

export default function UserLocation(props: UserLocationProps) {
    const { street,
        city,
        state,
        country,
        timezone } = props;

    return (
        <div className="UserLocation">
            <TitleAndText title="Country" text={country}/>
            <TitleAndText title="State" text={state}/>
            <TitleAndText title="City" text={city}/>
            <TitleAndText title="Street" text={street}/>
            <TitleAndText title="Timezone" text={timezone}/>
        </div>
    );
}

export { UserLocation };
