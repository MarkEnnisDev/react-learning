import React, { useState, useEffect } from 'react';
import useFetch from './useFetch'
import BlogList from './BlogList';

const Home = () => {
    // const [name, setName] = useState('mario');
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
    <div className="home">
      {error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      {/* <p> { name }</p> */}
    </div> 
    );
}
 
export default Home;

