import React from 'react';
import { observer, inject } from 'mobx-react';
import { Pagination } from '@nc-homework/pagination';
import {UserSummaryCard} from './components/userSummaryCard/UserSummaryCard'

@inject('mainStore')
@observer
class MainPage extends React.Component<any> {
    componentDidMount() {
        this.props.mainStore.fetchUserList();
    }

    onChangePage = async (pageNum: number): Promise<any> => {
        this.props.mainStore.setCurrent(pageNum);
        await this.props.mainStore.fetchUserList();
    };

    render() {
        const { mainStore } = this.props;
        return (
            <div>
                <div style={{display:'flex',flexWrap: 'wrap'}}>
                {mainStore.getUsers.map((user: any, index: number) => (
                    <UserSummaryCard
                    key={index}
                    picture={user.picture}
                    id={user.id}
                    title={user.title}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    />
                ))}
                </div>
                <Pagination
                    current={mainStore.current}
                    total={mainStore.total}
                    pageSize={mainStore.pageSize}
                    onPageChange={this.onChangePage}
                />
            </div>
        );
    }
}

export default MainPage;
