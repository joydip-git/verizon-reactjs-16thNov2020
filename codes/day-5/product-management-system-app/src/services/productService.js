import axiosObj from '../Axios/Axios'

export const getProductRecords = () => {
    //GET
    //Promise<AxiosResponse<any>>
    return axiosObj.get('');
    //axiosObj.get().then((resp)=>resp.data).catch(e=>e.message)
}

export const getProductRecordById = (productId) => {
    //GET
    return axiosObj.get(`${productId}`)
}

export const addProductRecord = (product) => {
    //POST
    return axiosObj.post('', product)
}

export const updateProductRecord = (product) => {
    //PUT
    return axiosObj.put('', product)
}

export const deletProductRecordById = (productId) => {
    //DELETE
    return axiosObj.delete(`${productId}`)
}