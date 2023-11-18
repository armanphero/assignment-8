import React from 'react';

const Sidebar = ({ readTime, bookmarked }) => {
    return (
        <>
            <h1 className='text-purple-700 font-bold text-2xl p-5 bg-purple-100 text-center border-purple-500 border-2 rounded-lg mb-5'>Spent time on read : {readTime} min</h1>
            <div style={{ background: '#f3f3f3' }} className='p-5 rounded-lg'>
                <h1 className='font-bold text-2xl mb-5'>Bookmarked Blogs : {bookmarked.length}</h1>
                <div className='flex flex-col gap-4'>
                    {
                        bookmarked.map(bookmark => <h3 className='font-bold text-base p-4 bg-white rounded-lg' key={bookmark.id}>{bookmark.title}</h3>)
                    }
                </div>
            </div>
        </>
    );
};

export default Sidebar;