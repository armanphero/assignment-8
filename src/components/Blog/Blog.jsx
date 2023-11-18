import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

const Blog = ({ singleBlog, handleReadTime, handleBookMark }) => {

    const [bookMarked, setBookMarked] = useState(false);

    const manageBookMark = () => {
        handleBookMark(singleBlog);
        setBookMarked(true);
    }

    const { title, cover_img, author_img, author_name, category, reading_time, release_date } = singleBlog;
    return (
        <div className='blog md:w-[90%] mb-7'>
            <img src={cover_img} alt="" className='blog-cover-img rounded-md' />
            <div className="blog-body my-3">
                <div className='flex justify-between'>
                    <div className='author-info flex gap-4 items-center my-4'>
                        <img src={author_img} alt="" style={{ width: '50px' }} />
                        <div>
                            <h5 className='font-bold text-xl'>{author_name}</h5>
                            <p>{release_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='mr-2'>{reading_time} min read </p>
                        {
                            !bookMarked && <FontAwesomeIcon icon={faBookmarkRegular} onClick={manageBookMark} />
                        }
                        {
                            bookMarked && <FontAwesomeIcon icon={faBookmarkSolid} onClick={manageBookMark} />
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-semibold'>{title}</h1>
                    <div className='flex gap-6 my-2 md:my-4'>
                        {
                            category.map((singleCategory, index) => <p key={index}>{singleCategory}</p>)
                        }
                    </div>
                    <button onClick={() => handleReadTime(reading_time)} className='underline font-semibold mb-4' style={{ color: '#6047ec' }}>Mark as read</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Blog;