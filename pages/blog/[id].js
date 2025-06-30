import {
  getAllItems,
  getIdByUrl,
  getItemById,
  getUrltTitle,
} from "../../helpers";
import { DATA_TYPE } from "../../helpers/types";
import SubscriptionForm from "../../components/Form";

const PostItem = ({ post }) => {
  const { title, post_body, img, form } = post;

  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 px-4 sm:p-8 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl">
          <img src={img} className="h-full w-full object-cover object-center" />
        </div>
        <section className="pt-10 ">
          <h1 className="mb-4">{title}</h1>

          <SubscriptionForm
            titleForm={form.titleForm}
            textButton={form.textButton}
            label={form.label}
            id={form.id}
            name={form.name}
          />

          <div dangerouslySetInnerHTML={{ __html: post_body }} />

          <SubscriptionForm
            titleForm={form.titleForm}
            textButton={form.textButton}
            label={form.label}
            id={form.id}
            name={form.name}
          />
        </section>
      </article>
    </>
  );
};

export default PostItem;

export async function getStaticProps({ params }) {
  return {
    props: {
      post: getItemById(DATA_TYPE.posts, getIdByUrl(params.id)),
    },
  };
}

export async function getStaticPaths() {
  const allPost = getAllItems(DATA_TYPE.posts);

  const paths = allPost.map((post) => {
    return {
      params: { id: `${getUrltTitle(post.title)}-${post.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
