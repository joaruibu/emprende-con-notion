import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getIdByUrl, getItemById } from '../../helpers';
import { DATA_TYPE } from '../../helpers/types';



const PostItem = () => {
    const { isReady, query: { id: url } } = useRouter();

    const [post, setPost] = useState({})
    const [domLoaded, setDomLoaded] = useState(false);


    useEffect(() => {
        if (isReady) {
            setDomLoaded(true);
            const item = getItemById(DATA_TYPE.posts, getIdByUrl(url));
            console.log(90909, item)
            setPost(item)
        }
    }, [isReady]);
    console.log(4009, post)
    const { id, title, post_summary, post_body, tags } = post

    return (
        <>
            {domLoaded &&
                <>

                    <p className="text-5xl text-red-500">Post Item</p>

                    <div>PosteItem{id}</div>
                    <div>Título entrada blog:{title}</div>

                    <div dangerouslySetInnerHTML={{ __html: post_summary }} />
                    <div dangerouslySetInnerHTML={{ __html: post_body }} />
                </>
            }
        </>
    )
}

export default PostItem