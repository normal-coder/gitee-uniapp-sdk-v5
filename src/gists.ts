/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取代码片段 获取代码片段 GET /v5/gists */
export async function getV5Gists(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Code[]>('/v5/gists', {
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

/** 创建代码片段 创建代码片段 POST /v5/gists */
export async function postV5Gists(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Hash 形式的代码片段文件名以及文件内容。如：{ "file1.txt": { "content": "String file contents" } } */
    files: Record<string, unknown>;
    /** 代码片段描述，1~30 个字符 */
    description: string;
    /** 公开/私有，默认：私有 */
    public?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.CodeForksHistory[]>('/v5/gists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取单条代码片段 获取单条代码片段 GET /v5/gists/${param0} */
export async function getV5GistsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CodeForksHistory>(`/v5/gists/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除指定代码片段 删除指定代码片段 DELETE /v5/gists/${param0} */
export async function deleteV5GistsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5GistsIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 修改代码片段 修改代码片段 PATCH /v5/gists/${param0} */
export async function patchV5GistsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5GistsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Hash 形式的代码片段文件名以及文件内容。如：{ "file1.txt": { "content": "String file contents" } } */
    files?: Record<string, unknown>;
    /** 代码片段描述，1~30 个字符 */
    description?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CodeForksHistory>(`/v5/gists/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取代码片段的评论 获取代码片段的评论 GET /v5/gists/${param0}/comments */
export async function getV5GistsGistIdComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsGistIdCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { gist_id: param0, ...queryParams } = params;
  return request<API.CodeComment[]>(`/v5/gists/${param0}/comments`, {
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

/** 增加代码片段的评论 增加代码片段的评论 POST /v5/gists/${param0}/comments */
export async function postV5GistsGistIdComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5GistsGistIdCommentsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 评论内容 */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { gist_id: param0, ...queryParams } = params;
  return request<API.CodeComment>(`/v5/gists/${param0}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取单条代码片段的评论 获取单条代码片段的评论 GET /v5/gists/${param0}/comments/${param1} */
export async function getV5GistsGistIdCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsGistIdCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { gist_id: param0, id: param1, ...queryParams } = params;
  return request<API.CodeComment>(`/v5/gists/${param0}/comments/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除代码片段的评论 删除代码片段的评论 DELETE /v5/gists/${param0}/comments/${param1} */
export async function deleteV5GistsGistIdCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5GistsGistIdCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { gist_id: param0, id: param1, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}/comments/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 修改代码片段的评论 修改代码片段的评论 PATCH /v5/gists/${param0}/comments/${param1} */
export async function patchV5GistsGistIdCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5GistsGistIdCommentsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 评论内容 */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { gist_id: param0, id: param1, ...queryParams } = params;
  return request<API.CodeComment>(`/v5/gists/${param0}/comments/${param1}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取代码片段的 commit 获取代码片段的 commit GET /v5/gists/${param0}/commits */
export async function getV5GistsIdCommits(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsIdCommitsParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CodeForksHistory>(`/v5/gists/${param0}/commits`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取 Fork 了指定代码片段的列表 获取 Fork 了指定代码片段的列表 GET /v5/gists/${param0}/forks */
export async function getV5GistsIdForks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsIdForksParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CodeForks>(`/v5/gists/${param0}/forks`, {
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

/** Fork 代码片段 Fork 代码片段 POST /v5/gists/${param0}/forks */
export async function postV5GistsIdForks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5GistsIdForksParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}/forks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 判断代码片段是否已 Star 判断代码片段是否已 Star GET /v5/gists/${param0}/star */
export async function getV5GistsIdStar(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsIdStarParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}/star`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Star 代码片段 Star 代码片段 PUT /v5/gists/${param0}/star */
export async function putV5GistsIdStar(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5GistsIdStarParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}/star`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 取消 Star 代码片段 取消 Star 代码片段 DELETE /v5/gists/${param0}/star */
export async function deleteV5GistsIdStar(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5GistsIdStarParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gists/${param0}/star`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取用户 Star 的代码片段 获取用户 Star 的代码片段 GET /v5/gists/starred */
export async function getV5GistsStarred(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GistsStarredParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Code[]>('/v5/gists/starred', {
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
