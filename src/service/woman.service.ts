import { Iwoman } from "../utils/woman.interface"

export const BASE_URL: string = 'https://66a7c2a853c13f22a3d0f86e.mockapi.io/women'


export const fetchList = async (): Promise<Iwoman[]> => {
    try {
        const res = await fetch(BASE_URL, {
            'method': 'GET',
            'headers': { 'Content-Type': "application/json" },
        })
        if (!res) throw new Error('Response not OK')
        const parsed = await res.json()
        return parsed;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createWoman = async (createWoman: Iwoman): Promise<Iwoman> => {
    try {
        const res = await fetch(BASE_URL, {
            'method': 'POST',
            'headers': { 'Content-Type': "application/json" },
            'body': JSON.stringify(createWoman)
        })
        if (!res) throw new Error('Response not OK')
        const parsed = await res.json()
        return parsed
    } catch (error) {
        throw new Error(error.message)
    }
}

export const findAll = async (): Promise<Iwoman[]> => {
    try {
        return await fetchList()
    } catch (error) {
        throw new Error(error.message)
    }
}

export const findOne = async (id: number): Promise<Iwoman | string | undefined> => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            'method': 'GET',
            'headers': { 'Content-Type': "application/json" }
        })
        if (!res) throw new Error('Response not OK')
        const parsed = await res.json()
        return parsed
    } catch (error) {
        throw new Error('Response not OK')
    }
}

export const update = async (id: number, updateWoman: Iwoman): Promise<Iwoman | string | undefined> => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            'method': 'PATCH',
            'headers': { 'Content-Type': "application/json" },
            'body': JSON.stringify(updateWoman)
        })
        if (!res) throw new Error('Response not OK')
        const parsed = await res.json()
        return parsed
    } catch (error) {

    }
    try {
        const getList = await fetchList()
        const womanFound = getList.findIndex((woman) => woman.id === id)
        if (womanFound !== -1) {
            const newWoman = { ...getList[womanFound], updateWoman }
            return newWoman
        } else {
            return `El id que estas buscando no existe`
        }
    } catch (error) {
        throw new Error('Response not OK')
    }
}

export const remove = async (id: number): Promise<Iwoman[] | string | void> => {
    try {
        const getList = await fetchList()
        const womanFound = getList.findIndex((woman) => woman.id === id)
        if (womanFound !== -1) {
            const deleteWoman = await getList.splice(womanFound, 1)
            return deleteWoman
        } else {
            return `El id que estas buscando no existe`
        }
    } catch (error) {
        throw new Error('Response not OK')
    }
}

