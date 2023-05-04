
import posts from "../data/posts"
import templates from "../data/templates"
import { DATA_TYPES } from "./types"



export const getAllItems = (dataType) => {
    if (!DATA_TYPES[dataType]) return console.error(`No existe el tipo de dato ${dataType}`)
    if (dataType === DATA_TYPES.posts) return posts
    if (dataType === DATA_TYPES.templates) return templates

}

export const getItemById = (dataType, id) => {
    if (!dataType) return console.error(`No existe el tipo de dato ${dataType}`)


    if (dataType === DATA_TYPES.posts) return posts.find((ele => ele.id === id))
    if (dataType === DATA_TYPES.templates) return templates.find((ele => ele.id === id))

}

