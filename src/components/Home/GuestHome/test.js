import { useEffect } from 'react';
import { useState } from 'react';
import * as postService from '../../services/post';
import { Link } from 'react-router-dom';


const Test = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {


           
            postService.getAll().then((res) => {
                const data = res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setPosts(data);
    console.log(data[0].Title)
            });
    }, []);



   //  const transofrmContent = (content) => {
   //      const transformed = content.split('<br>').join(' ');
   //      const short = transformed.slice(0, 700);
   //      return `${short}...`;
   //  };

   //  const mappedPosts = posts.map((e) => ({
   //      ...e,
   //      content: transofrmContent(e.content),
   //  }));

   //  const content = mappedPosts.map((e) => {
   //      return (
   //          <section key={e.id} className={['post-section']}>
   //              <div className={['img-wrapper']}>
   //                  <img src={e.imageUrl} alt={`${e.destination}-img`} />
   //              </div>
   //              <article className={['content-section']}>
   //                  <h2>{e.title}</h2>
   //                  <p>{e.content}</p>
   //                  <Link to={`/post-details/${e.id}`}>Read the post</Link>
   //              </article>
   //          </section>
   //      );
   //  });

    return (
        <>  
        </>
    );
};

export default Test;