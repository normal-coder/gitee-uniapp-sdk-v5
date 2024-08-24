/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取文件 Blob 获取文件 Blob GET /v5/repos/${param0}/${param1}/git/blobs/${param2} */
export async function getV5ReposOwnerRepoGitBlobsSha(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoGitBlobsShaParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, sha: param2, ...queryParams } = params;
  return request<API.Blob>(
    `/v5/repos/${param0}/${param1}/git/blobs/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取 Gitee 指数 获取 Gitee 指数 GET /v5/repos/${param0}/${param1}/git/gitee_metrics */
export async function getV5ReposOwnerRepoGitGiteeMetrics(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoGitGiteeMetricsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.GiteeMetrics>(
    `/v5/repos/${param0}/${param1}/git/gitee_metrics`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取目录 Tree 获取目录 Tree GET /v5/repos/${param0}/${param1}/git/trees/${param2} */
export async function getV5ReposOwnerRepoGitTreesSha(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoGitTreesShaParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, sha: param2, ...queryParams } = params;
  return request<API.Tree>(
    `/v5/repos/${param0}/${param1}/git/trees/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}
