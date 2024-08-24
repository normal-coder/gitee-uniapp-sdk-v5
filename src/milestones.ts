/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取仓库所有里程碑 获取仓库所有里程碑 GET /v5/repos/${param0}/${param1}/milestones */
export async function getV5ReposOwnerRepoMilestones(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoMilestonesParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Milestone[]>(`/v5/repos/${param0}/${param1}/milestones`, {
    method: 'GET',
    params: {
      // state has a default value: open
      state: 'open',
      // sort has a default value: due_on
      sort: 'due_on',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 创建仓库里程碑 创建仓库里程碑 POST /v5/repos/${param0}/${param1}/milestones */
export async function postV5ReposOwnerRepoMilestones(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoMilestonesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 里程碑标题 */
    title: string;
    /** 里程碑状态：open, closed, all。默认：open */
    state?: 'open' | 'closed' | 'all';
    /** 里程碑具体描述 */
    description?: string;
    /** 里程碑的截止日期 */
    due_on: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Milestone>(`/v5/repos/${param0}/${param1}/milestones`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库单个里程碑 获取仓库单个里程碑 GET /v5/repos/${param0}/${param1}/milestones/${param2} */
export async function getV5ReposOwnerRepoMilestonesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoMilestonesNumberParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Milestone>(
    `/v5/repos/${param0}/${param1}/milestones/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除仓库单个里程碑 删除仓库单个里程碑 DELETE /v5/repos/${param0}/${param1}/milestones/${param2} */
export async function deleteV5ReposOwnerRepoMilestonesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoMilestonesNumberParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/milestones/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新仓库里程碑 更新仓库里程碑 PATCH /v5/repos/${param0}/${param1}/milestones/${param2} */
export async function patchV5ReposOwnerRepoMilestonesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoMilestonesNumberParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 里程碑标题 */
    title: string;
    /** 里程碑状态：open, closed, all。默认：open */
    state?: 'open' | 'closed' | 'all';
    /** 里程碑具体描述 */
    description?: string;
    /** 里程碑的截止日期 */
    due_on: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Milestone>(
    `/v5/repos/${param0}/${param1}/milestones/${param2}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}
