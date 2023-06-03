import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getAllItems, getIdByUrl, getItemById, getUrltTitle } from '../../helpers';
import { DATA_TYPE, FORM_TYPE } from '../../helpers/types';
import SubscriptionForm from '../../components/Form';



const PostItem = ({ post }) => {

    const { title, post_body, img, form } = post

    return (
        <>
            <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
                <div className=" sm:overflow-hidden sm:rounded-xl">
                    <img
                        src={img}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <section className="pt-10 " >

                    <h1 className='mb-4'>{title}</h1>



                    <div dangerouslySetInnerHTML={{ __html: post_body }} />

                    <SubscriptionForm
                        type={FORM_TYPE.banner}
                        titleForm={form.titleForm}
                        textButton={form.textButton}
                        code={form.code}
                        trackerId={form.trackerId}
                    ></SubscriptionForm>


                </section>
            </article>

        </>
    )
}

export default PostItem

export async function getStaticProps({ params }) {

    return {
        props: {
            post: getItemById(DATA_TYPE.posts, getIdByUrl(params.id))
        }
    }
}

export async function getStaticPaths() {
    const allPost = getAllItems(DATA_TYPE.posts)

    const paths = allPost.map(post => {
        return {
            params: { id: `${getUrltTitle(post.title)}-${post.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }

}
