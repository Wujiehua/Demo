/**
 * 与后台交互模块
 */
import ajax from './ajax'
const BASE_URL = '/api'
// 直接写url中是param参数
export const reqAll = customerId => ajax(`${BASE_URL}/find/customer_id_en/${customerId}`)
/**
 * 问号的为query参数
 *  http://localhost:3000/shops?latitude=40.8&longitude=116.36
 *  export const test=(latitude,longitude)=>ajax('..url',{latitude,longitude})
 */
export const reqShops = customerId => ajax(`${BASE_URL}/hotSale/customer_id_en/${customerId}`)
