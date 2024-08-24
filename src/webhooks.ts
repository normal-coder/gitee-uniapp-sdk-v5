/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 列出仓库的 WebHooks 列出仓库的 WebHooks GET /v5/repos/${param0}/${param1}/hooks */
export async function getV5ReposOwnerRepoHooks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoHooksParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Hook[]>(`/v5/repos/${param0}/${param1}/hooks`, {
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

/** 创建一个仓库 WebHook 创建一个仓库 WebHook POST /v5/repos/${param0}/${param1}/hooks */
export async function postV5ReposOwnerRepoHooks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoHooksParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 远程 HTTP URL */
    url: string;
    /** 加密类型：0: 密码，1: 签名密钥 */
    encryption_type?: 0 | 1;
    /** 请求 URL 时会带上该密码，防止 URL 被恶意请求 */
    password?: string;
    /** Push 代码到仓库 */
    push_events?: boolean;
    /** 提交 Tag 到仓库 */
    tag_push_events?: boolean;
    /** 创建/关闭 Issue */
    issues_events?: boolean;
    /** 评论了 Issue/代码等等 */
    note_events?: boolean;
    /** 合并请求和合并后 */
    merge_requests_events?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Hook>(`/v5/repos/${param0}/${param1}/hooks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库单个 WebHook 获取仓库单个 WebHook GET /v5/repos/${param0}/${param1}/hooks/${param2} */
export async function getV5ReposOwnerRepoHooksId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoHooksIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Hook>(`/v5/repos/${param0}/${param1}/hooks/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除一个仓库 WebHook 删除一个仓库 WebHook DELETE /v5/repos/${param0}/${param1}/hooks/${param2} */
export async function deleteV5ReposOwnerRepoHooksId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoHooksIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/hooks/${param2}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新一个仓库 WebHook 更新一个仓库 WebHook PATCH /v5/repos/${param0}/${param1}/hooks/${param2} */
export async function patchV5ReposOwnerRepoHooksId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoHooksIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 远程 HTTP URL */
    url: string;
    /** 加密类型：0: 密码，1: 签名密钥 */
    encryption_type?: 0 | 1;
    /** 请求 URL 时会带上该密码，防止 URL 被恶意请求 */
    password?: string;
    /** Push 代码到仓库 */
    push_events?: boolean;
    /** 提交 Tag 到仓库 */
    tag_push_events?: boolean;
    /** 创建/关闭 Issue */
    issues_events?: boolean;
    /** 评论了 Issue/代码等等 */
    note_events?: boolean;
    /** 合并请求和合并后 */
    merge_requests_events?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Hook>(`/v5/repos/${param0}/${param1}/hooks/${param2}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 测试 WebHook 是否发送成功 测试 WebHook 是否发送成功 POST /v5/repos/${param0}/${param1}/hooks/${param2}/tests */
export async function postV5ReposOwnerRepoHooksIdTests(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoHooksIdTestsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/hooks/${param2}/tests`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}
