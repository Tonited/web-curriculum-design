import { post} from '../utils/request'
import url from '../utils/url';

export default {
    login: info=>post(url.login(),info)
}