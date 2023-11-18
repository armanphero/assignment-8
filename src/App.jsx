import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './components/Questions/Questions';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);

  const notify = () => toast("You have already bookmarked this blog!");
  const handleBookMark = (blog) => {
    const previousBookmark = bookmarked.find(bookmark => bookmark.id === blog.id);
    if (previousBookmark) {
      notify();
      return;
    }
    const newBookmarked = [...bookmarked, blog];
    // console.log(newBookmarked);
    setBookmarked(newBookmarked);
  }

  const handleReadTime = (time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='content mt-6'>
        <div className="blog-container">
          {
            blogs.map(singleBlog => <Blog singleBlog={singleBlog} key={singleBlog.id} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blog>)
          }
        </div>
        <div className="side-bar">
          <Sidebar readTime={readTime} bookmarked={bookmarked}></Sidebar>
        </div>
        <Questions></Questions>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
