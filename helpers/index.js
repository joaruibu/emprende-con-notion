
import posts from "../data/posts"
import templates from "../data/templates"
import { DATA_TYPE } from "./types"
import { useEffect } from 'react';


export const getUrltTitle = (title) => {
    if (title !== undefined) {
        return title.trim().split(' ').join('-').toLowerCase().replace(/[.,¿!¡?\s]/g, '')
    }
}

export const getIdByUrl = (title) => {
    if (title !== undefined) {
        return title.toString().split("-").pop();
    }
}

export const getAllItems = (dataType) => {
    if (!DATA_TYPE[dataType]) return console.error(`No existe el tipo de dato ${dataType}`)
    if (dataType === DATA_TYPE.posts) return posts
    if (dataType === DATA_TYPE.templates) return templates

}

export const getItemById = (dataType, id) => {
    if (!dataType) return console.error(`No existe el tipo de dato ${dataType}`)

    if (dataType === DATA_TYPE.posts) return posts.find((ele => ele.id === id))
    if (dataType === DATA_TYPE.templates) return templates.find((ele => ele.id === id))
    return
}

export const getFilterTemplates = (filterValue) => {
    const filterTemplates = templates.filter((template => template.title.toLowerCase().includes(filterValue.toLowerCase())))
    if (filterValue.lenght < 3) {
        return templates
    } else {
        return filterTemplates
    }
}

export const getFilterByTags = (tags, type) => {
    const items = type === DATA_TYPE.posts ? posts : templates;

    if (!tags.some(tag => tag.selected !== false)) {
        return items
    }
    let filterItems = []

    items.forEach((item) => {
        tags.forEach((tag) => {
            if (!tag.selected) return
            if (item.tags.includes(tag.name) && tag.selected) filterItems.push(item)
        })
    })

    // Elimino la plantilla si ya existe en el array de filtradas
    filterItems = filterItems.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.id === item.id
        ))
    )
    return filterItems
}



