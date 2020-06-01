import { get } from '../utils/request';
import url from "../utils/url";

export default{
    getPersonnelList: () => get(url.getPersonnelList()),
    getAllEduLv: () => get(url.getAllEduLv()),
    getAllJob: () => get(url.getAllJob()),
    getAllPersonnelType: () => get(url.getAllPersonnelType()),
    getAllDepartment: () => get(url.getAllDepartment())

}
