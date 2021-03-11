import React from 'react';

// components

import CardTable from 'components/Cards/CardTable';

export default function Tables() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0 md:pt-32 pb-32 pt-12">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-800 text-xl font-bold">
                            Catering services
                        </h6>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                        <CardTable />
                    </div>
                    {/* <div className="w-full mb-12 px-4">
            <CardTable color="dark" />
          </div> */}
                </div>
            </div>
        </>
    );
}
