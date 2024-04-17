import CoverFreePageSection from '../../components/CoverFreePageSection';
import CoverPaidPageSection from '../../components/CoverPaidPageSection';
import SliderImg from '../../components/SliderImg';
import { getAllItems, getIdByUrl, getItemById, getUrltTitle } from '../../helpers';
import { DATA_TYPE } from '../../helpers/types';







const CoverItem = ({ cover }) => {

    const { title, isFree, price, previewCovers } = cover
    console.log(cover)

    return (
        <>
            <div className='h-6'></div>
            <div className="border-2 border-stone-950 bg-stone-50 p-4 rounded-xl ">

                {/* Image gallery */}
                <SliderImg imgs={previewCovers}></SliderImg>

                {/* Product info */}
                <div className=" pt-10  ">
                    <div className='flex justify-between items-center'>

                        <h1 className="">{title}</h1>

                        {!isFree &&
                            <span className='text-xl font-bold  bg-yellow-300 text-gray-900 px-8 py-1 rounded-xl whitespace-nowrap'>{price} €</span>
                        }
                    </div>
                    {isFree ? <CoverFreePageSection cover={cover} /> : <CoverPaidPageSection cover={cover} />}

                </div>
            </div>
        </>
    )

}

export default CoverItem

export async function getStaticProps({ params }) {
    console.log({ params })
    return {
        props: {
            cover: getItemById(DATA_TYPE.covers, getIdByUrl(params.id))
        }
    }
}

export async function getStaticPaths() {
    const allCovers = getAllItems(DATA_TYPE.covers)

    const paths = allCovers.map(cover => {
        return {
            params: { id: `${getUrltTitle(cover.title)}-${cover.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }

}