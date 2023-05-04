import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getItemById } from '../../helpers';
import { DATA_TYPES } from '../../helpers/types';



const PostItem = () => {
    const { isReady, query: { id } } = useRouter();

    const [post, setPost] = useState({})
    const { title, post_summary, post_body, tags } = post

    console.log(post)

    useEffect(() => {
        if (isReady) {
            const item = getItemById(DATA_TYPES.posts, id);
            setPost(item)
        }
    }, [isReady]);

    return (
        <>
            <p className="text-5xl text-red-500">Post Item</p>

            <div>PosteItem{id}</div>
            <div>Título entrada blog:{title}</div>

            <div dangerouslySetInnerHTML={{ __html: post_summary }} />
            <div dangerouslySetInnerHTML={{ __html: post_body }} />
        </>
    )
}

export default PostItem