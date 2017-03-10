/**
 * NAME : ApiConfig
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */

const ROOT_API = 'http://localhost/PROJECT_OWN/JsonApiSystem/Source/API/JsonApiSystem_api/public/index.php/api/user/'
// export const API_USER_LOGIN = ROOT_API + 'user/login'
export const API = {
    API_USER_LOGIN: ROOT_API + 'user/login',
    API_USER_REGISTER: ROOT_API + 'user/register',

    API_PROJECT_GET: ROOT_API + 'project/get',
    API_PROJECT_CREATE: ROOT_API + 'project/create',
    API_PROJECT_UPDATE: ROOT_API + 'project/update',
    API_PROJECT_DELETE: ROOT_API + 'project/delete',

    API_GROUP_GET: ROOT_API + 'group/get',
    API_GROUP_CREATE: ROOT_API + 'group/create',
    API_GROUP_UPDATE: ROOT_API + 'group/update',
    API_GROUP_DELETE: ROOT_API + 'group/delete',


    API_GET: ROOT_API + 'api/get',
    API_DETAIL: ROOT_API + 'api/detail',
    API_CREATE: ROOT_API + 'api/create',
    API_UPDATE: ROOT_API + 'api/update',
    API_DELETE: ROOT_API + 'api/delete',

    TEST_GET: ROOT_API + 'test/get',
    TEST_CREATE: ROOT_API + 'test/create',
    TEST_UPDATE: ROOT_API + 'test/update',
    TEST_DELETE: ROOT_API + 'test/delete',

}