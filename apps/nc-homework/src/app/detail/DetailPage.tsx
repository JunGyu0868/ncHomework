import React from 'react';
import { observer, inject } from 'mobx-react';
import qs from 'qs';
import { Link } from 'react-router-dom';

import UserInfo from './components/userInfo/UserInfo';
import UserLocation from './components/userLocation/UserLocation';
import './DetailPage.css';

@inject('detailStore')
@observer
class DetailPage extends React.Component<any> {
    async componentDidMount() {
        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (!query.id) {
            document.location.href = '/main';
        } else {
            await this.props.detailStore.setId(query.id);
            await this.props.detailStore.fetchUserDetailInfo();
        }
    }
    render() {
        const { detailStore } = this.props;
        return (
            <div className="DetailPage">
                <div
                    className="displayFlexStyle"
                >
                    <div className="flex-1">
                        <img style={{ minWidth: '240px' }} src={detailStore.picture} />
                    </div>
                    <div className="flex-1">
                        <UserInfo
                            id={detailStore.id}
                            title={detailStore.title}
                            firstName={detailStore.firstName}
                            lastName={detailStore.lastName}
                            gender={detailStore.gender}
                            email={detailStore.email}
                            dateOfBirth={detailStore.dateOfBirth}
                            registerDate={detailStore.registerDate}
                            phone={detailStore.phone}
                        />
                    </div>
                    <div className="flex-1">
                        <UserLocation
                            street={detailStore.location.street}
                            city={detailStore.location.city}
                            state={detailStore.location.state}
                            country={detailStore.location.country}
                            timezone={detailStore.location.timezone}
                        />
                    </div>
                </div>

                <div className="linkArea">
                    <Link to={`/main`}>Go to Main</Link>
                </div>
            </div>
        );
    }
}

export default DetailPage;
