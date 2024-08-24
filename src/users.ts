/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取授权用户的资料 获取授权用户的资料 GET /v5/user */
export async function getV5User(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserDetail>('/v5/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新授权用户的资料 更新授权用户的资料 PATCH /v5/user */
export async function patchV5User(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 昵称 */
    name?: string;
    /** 微博链接 */
    blog?: string;
    /** 博客站点 */
    weibo?: string;
    /** 自我介绍 */
    bio?: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.User>('/v5/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列出授权用户的关注者 列出授权用户的关注者 GET /v5/user/followers */
export async function getV5UserFollowers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserFollowersParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserBasic[]>('/v5/user/followers', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 列出授权用户正关注的用户 列出授权用户正关注的用户 GET /v5/user/following */
export async function getV5UserFollowing(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserFollowingParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserBasic[]>('/v5/user/following', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 检查授权用户是否关注了一个用户 检查授权用户是否关注了一个用户 GET /v5/user/following/${param0} */
export async function getV5UserFollowingUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserFollowingUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<unknown>(`/v5/user/following/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 关注一个用户 关注一个用户 PUT /v5/user/following/${param0} */
export async function putV5UserFollowingUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5UserFollowingUsernameParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<unknown>(`/v5/user/following/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 取消关注一个用户 取消关注一个用户 DELETE /v5/user/following/${param0} */
export async function deleteV5UserFollowingUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5UserFollowingUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<unknown>(`/v5/user/following/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出授权用户的所有公钥 列出授权用户的所有公钥 GET /v5/user/keys */
export async function getV5UserKeys(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserKeysParams,
  options?: { [key: string]: unknown }
) {
  return request<API.SSHKey[]>('/v5/user/keys', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加一个公钥 添加一个公钥 POST /v5/user/keys */
export async function postV5UserKeys(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 公钥内容 */
    key: string;
    /** 公钥名称 */
    title: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.SSHKey>('/v5/user/keys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取一个公钥 获取一个公钥 GET /v5/user/keys/${param0} */
export async function getV5UserKeysId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserKeysIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.SSHKey>(`/v5/user/keys/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除一个公钥 删除一个公钥 DELETE /v5/user/keys/${param0} */
export async function deleteV5UserKeysId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5UserKeysIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/user/keys/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取授权用户的一个 Namespace 获取授权用户的一个 Namespace GET /v5/user/namespace */
export async function getV5UserNamespace(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserNamespaceParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Namespace>('/v5/user/namespace', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列出授权用户所有的 Namespace 列出授权用户所有的 Namespace GET /v5/user/namespaces */
export async function getV5UserNamespaces(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserNamespacesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Namespace[]>('/v5/user/namespaces', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一个用户 获取一个用户 GET /v5/users/${param0} */
export async function getV5UsersUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.UserInfo>(`/v5/users/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出指定用户的关注者 列出指定用户的关注者 GET /v5/users/${param0}/followers */
export async function getV5UsersUsernameFollowers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameFollowersParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.UserBasic[]>(`/v5/users/${param0}/followers`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出指定用户正在关注的用户 列出指定用户正在关注的用户 GET /v5/users/${param0}/following */
export async function getV5UsersUsernameFollowing(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameFollowingParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.UserBasic[]>(`/v5/users/${param0}/following`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 检查指定用户是否关注目标用户 检查指定用户是否关注目标用户 GET /v5/users/${param0}/following/${param1} */
export async function getV5UsersUsernameFollowingTargetUser(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameFollowingTargetUserParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, target_user: param1, ...queryParams } = params;
  return request<unknown>(`/v5/users/${param0}/following/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出指定用户的所有公钥 列出指定用户的所有公钥 GET /v5/users/${param0}/keys */
export async function getV5UsersUsernameKeys(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameKeysParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.SSHKeyBasic[]>(`/v5/users/${param0}/keys`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}
