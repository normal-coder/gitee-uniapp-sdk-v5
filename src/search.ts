/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 搜索 Issues 搜索 Issues GET /v5/search/issues */
export async function getV5SearchIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5SearchIssuesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Issue[]>('/v5/search/issues', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      // order has a default value: desc
      order: 'desc',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索仓库 搜索仓库 GET /v5/search/repositories */
export async function getV5SearchRepositories(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5SearchRepositoriesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Project[]>('/v5/search/repositories', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      // order has a default value: desc
      order: 'desc',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索用户 搜索用户 GET /v5/search/users */
export async function getV5SearchUsers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5SearchUsersParams,
  options?: { [key: string]: unknown }
) {
  return request<API.User[]>('/v5/search/users', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      // order has a default value: desc
      order: 'desc',
      ...params,
    },
    ...(options || {}),
  });
}
