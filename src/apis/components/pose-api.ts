import axios from 'axios';

const URL = 'https://js-post-api.herokuapp.com/api/posts'

/**
 * Hàm lấy thông tin bài viết
 * @createdby ntdung 25.05.2023
 */
export function getPost(id: string) {
    return axios.get(URL + '/' + id);
}
