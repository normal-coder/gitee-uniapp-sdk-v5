/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 创建检查项 创建检查项 POST /v5/repos/${param0}/${param1}/check-runs */
export async function postV5ReposOwnerRepoCheckRuns(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoCheckRunsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** PullRequest ID */
    pull_request_id?: number;
    /** 详情链接 */
    details_url?: string;
    /** 状态 */
    status?: 'queued' | 'in_progress' | 'completed';
    /** 开始时间 */
    started_at?: string;
    /** 结论 */
    conclusion?:
    | 'neutral'
    | 'success'
    | 'failure'
    | 'cancelled'
    | 'action_required'
    | 'timed_out'
    | 'skipped';
    /** 完成时间 */
    completed_at?: string;
    /** 标题 */
    'output[title]': string;
    /** 概论 */
    'output[summary]': string;
    /** 详细信息 */
    'output[text]'?: string;
    /** 路径 */
    'output[annotations][path]': string[];
    /** 开始行 */
    'output[annotations][start_line]': number[];
    /** 结束行 */
    'output[annotations][end_line]': number[];
    /** 开始列 */
    'output[annotations][start_column]'?: number[];
    /** 结束列 */
    'output[annotations][end_column]'?: number[];
    /** 注释级别 */
    'output[annotations][annotation_level]': 'notice' | 'warning' | 'failure';
    /** 注释信息 */
    'output[annotations][message]': string[];
    /** 标题 */
    'output[annotations][title]'?: string[];
    /** 详情内容 */
    'output[annotations][raw_details]'?: string[];
    /** 注释 */
    'output[images][alt]': string[];
    /** URL */
    'output[images][image_url]': string[];
    /** 描述 */
    'output[images][caption]'?: string[];
    /** 文本 */
    'actions[label]': string[];
    /** 描述 */
    'actions[description]': string[];
    /** 标识 */
    'actions[identifier]': string[];
    /** 名字 */
    name: string;
    /** 提交的 sha 值（必须是完整的） */
    head_sha: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.CheckRun>(`/v5/repos/${param0}/${param1}/check-runs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取检查项详情 获取检查项详情 GET /v5/repos/${param0}/${param1}/check-runs/${param2} */
export async function getV5ReposOwnerRepoCheckRunsCheckRunId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCheckRunsCheckRunIdParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    check_run_id: param2,
    ...queryParams
  } = params;
  return request<API.CheckRun>(
    `/v5/repos/${param0}/${param1}/check-runs/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新检查项 更新检查项 PATCH /v5/repos/${param0}/${param1}/check-runs/${param2} */
export async function patchV5ReposOwnerRepoCheckRunsCheckRunId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoCheckRunsCheckRunIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 关联 pull_request 的 ID */
    pull_request_id?: number;
    /** 详情链接 */
    details_url?: string;
    /** 状态 */
    status?: 'queued' | 'in_progress' | 'completed';
    /** 开始时间 */
    started_at?: string;
    /** 结论 */
    conclusion?:
    | 'neutral'
    | 'success'
    | 'failure'
    | 'cancelled'
    | 'action_required'
    | 'timed_out'
    | 'skipped';
    /** 完成时间 */
    completed_at?: string;
    /** 标题 */
    'output[title]': string;
    /** 概论 */
    'output[summary]': string;
    /** 详细信息 */
    'output[text]'?: string;
    /** 路径 */
    'output[annotations][path]': string[];
    /** 开始行 */
    'output[annotations][start_line]': number[];
    /** 结束行 */
    'output[annotations][end_line]': number[];
    /** 开始列 */
    'output[annotations][start_column]'?: number[];
    /** 结束列 */
    'output[annotations][end_column]'?: number[];
    /** 注释级别 */
    'output[annotations][annotation_level]': 'notice' | 'warning' | 'failure';
    /** 注释信息 */
    'output[annotations][message]': string[];
    /** 标题 */
    'output[annotations][title]'?: string[];
    /** 详情内容 */
    'output[annotations][raw_details]'?: string[];
    /** 注释 */
    'output[images][alt]': string[];
    /** URL */
    'output[images][image_url]': string[];
    /** 描述 */
    'output[images][caption]'?: string[];
    /** 文本 */
    'actions[label]': string[];
    /** 描述 */
    'actions[description]': string[];
    /** 标识 */
    'actions[identifier]': string[];
    /** 名字 */
    name?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    check_run_id: param2,
    ...queryParams
  } = params;
  return request<API.CheckRun>(
    `/v5/repos/${param0}/${param1}/check-runs/${param2}`,
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

/** 获取检查项代码注释 获取检查项代码注释 GET /v5/repos/${param0}/${param1}/check-runs/${param2}/annotations */
export async function getV5ReposOwnerRepoCheckRunsCheckRunIdAnnotations(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCheckRunsCheckRunIdAnnotationsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    check_run_id: param2,
    ...queryParams
  } = params;
  return request<API.CheckAnnotation>(
    `/v5/repos/${param0}/${param1}/check-runs/${param2}/annotations`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // per_page has a default value: 20
        per_page: '20',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取某个提交的检查项 获取某个提交的检查项 GET /v5/repos/${param0}/${param1}/commits/${param2}/check-runs */
export async function getV5ReposOwnerRepoCommitsRefCheckRuns(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommitsRefCheckRunsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ref: param2, ...queryParams } = params;
  return request<API.CheckRun>(
    `/v5/repos/${param0}/${param1}/commits/${param2}/check-runs`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // per_page has a default value: 20
        per_page: '20',

        // filter has a default value: latest
        filter: 'latest',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}
