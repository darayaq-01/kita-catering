import React from 'react';

// components

import CardProfile from 'components/Cards/CardProfile.js';
import CardOptions from 'components/Cards/CardOptions';
import CardStatus from 'components/Cards/cardStatus';

export default function UserDashboard() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch(`/api/users/profiles/{localStorage.getItem('_id')}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    }, []);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    {data && <CardStatus data={data} />}
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 mt-2<0 px-4">
                    {/* <CardOptions day={-7} /> */}
                    {/* <CardOptions day={-6} /> */}
                    <CardOptions day={0} className="w-full lg:w-8/12" />
                    <CardOptions day={1} className="w-full lg:w-8/12" />
                    <CardOptions day={2} className="w-full lg:w-8/12" />
                    <CardOptions day={3} className="w-full lg:w-8/12" />
                    <CardOptions day={4} className="w-full lg:w-8/12" />
                    <CardOptions day={5} className="w-full lg:w-8/12" />
                    <CardOptions day={6} className="w-full lg:w-8/12" />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <CardProfile />
                </div>
            </div>
        </>
    );
}
