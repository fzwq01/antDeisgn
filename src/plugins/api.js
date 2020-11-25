let axios = window.axios;
let urlConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}

let urlConfigs = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}


const qs = require('qs')

// 获取所有产品
export const allProducts =(data)=> { return axios.get("/product/list",{params:data})}  
/**
 * 
 * 
 */
// export const initReady = async () => {
//     try {
//         return await axios.post("/init/initReady")
//     } catch (e) {
//         return false
//     }
// }

// 获取所有项目
// export const allProjects = async (data) => {
//     try {
//         return await axios.post("/project/list", qs.stringify(data))
//     } catch (e) {
//         return false
//     }
// }


