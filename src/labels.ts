/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取企业所有标签 获取企业所有标签 GET /v5/enterprises/${param0}/labels */
export async function getV5EnterprisesEnterpriseLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseLabelsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.Label[]>(`/v5/enterprises/${param0}/labels`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取企业某个标签 获取企业某个标签 GET /v5/enterprises/${param0}/labels/${param1} */
export async function getV5EnterprisesEnterpriseLabelsName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseLabelsNameParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, name: param1, ...queryParams } = params;
  return request<API.Label>(`/v5/enterprises/${param0}/labels/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库任务的所有标签 获取仓库任务的所有标签 GET /v5/repos/${param0}/${param1}/issues/${param2}/labels */
export async function getV5ReposOwnerRepoIssuesNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesNumberLabelsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Label[]>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/labels`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 替换 Issue 所有标签 替换 Issue 所有标签 需要在请求的 body 里填上数组，元素为标签的名字。如：["performance", "bug"] PUT /v5/repos/${param0}/${param1}/issues/${param2}/labels */
export async function putV5ReposOwnerRepoIssuesNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoIssuesNumberLabelsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Label[]>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/labels`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 创建 Issue 标签 创建 Issue 标签 需要在请求的 body 里填上数组，元素为标签的名字。如：["performance", "bug"] POST /v5/repos/${param0}/${param1}/issues/${param2}/labels */
export async function postV5ReposOwnerRepoIssuesNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoIssuesNumberLabelsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Label[]>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/labels`,
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

/** 删除 Issue 所有标签 删除 Issue 所有标签 DELETE /v5/repos/${param0}/${param1}/issues/${param2}/labels */
export async function deleteV5ReposOwnerRepoIssuesNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoIssuesNumberLabelsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/labels`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除 Issue 标签 删除 Issue 标签 DELETE /v5/repos/${param0}/${param1}/issues/${param2}/labels/${param3} */
export async function deleteV5ReposOwnerRepoIssuesNumberLabelsName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoIssuesNumberLabelsNameParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    name: param3,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/labels/${param3}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取仓库所有任务标签 获取仓库所有任务标签 GET /v5/repos/${param0}/${param1}/labels */
export async function getV5ReposOwnerRepoLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoLabelsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Label[]>(`/v5/repos/${param0}/${param1}/labels`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 创建仓库任务标签 创建仓库任务标签 POST /v5/repos/${param0}/${param1}/labels */
export async function postV5ReposOwnerRepoLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoLabelsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 标签名称 */
    name: string;
    /** 标签颜色。为 6 位的数字，如：000000 */
    color: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Label>(`/v5/repos/${param0}/${param1}/labels`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据标签名称获取单个标签 根据标签名称获取单个标签 GET /v5/repos/${param0}/${param1}/labels/${param2} */
export async function getV5ReposOwnerRepoLabelsName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoLabelsNameParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, name: param2, ...queryParams } = params;
  return request<API.Label>(`/v5/repos/${param0}/${param1}/labels/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除一个仓库任务标签 删除一个仓库任务标签 DELETE /v5/repos/${param0}/${param1}/labels/${param2} */
export async function deleteV5ReposOwnerRepoLabelsName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoLabelsNameParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, name: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/labels/${param2}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新一个仓库任务标签 更新一个仓库任务标签 PATCH /v5/repos/${param0}/${param1}/labels/${param2} */
export async function patchV5ReposOwnerRepoLabelsOriginalName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoLabelsOriginalNameParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 标签新名称 */
    name?: string;
    /** 标签新颜色 */
    color?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    original_name: param2,
    ...queryParams
  } = params;
  return request<API.Label>(`/v5/repos/${param0}/${param1}/labels/${param2}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库所有标签 获取仓库所有标签 GET /v5/repos/${param0}/${param1}/project_labels */
export async function getV5ReposOwnerRepoProjectLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoProjectLabelsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectLabel[]>(
    `/v5/repos/${param0}/${param1}/project_labels`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 替换所有仓库标签 替换所有仓库标签 PUT /v5/repos/${param0}/${param1}/project_labels */
export async function putV5ReposOwnerRepoProjectLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoProjectLabelsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectLabel[]>(
    `/v5/repos/${param0}/${param1}/project_labels`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 添加仓库标签 添加仓库标签 POST /v5/repos/${param0}/${param1}/project_labels */
export async function postV5ReposOwnerRepoProjectLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoProjectLabelsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectLabel[]>(
    `/v5/repos/${param0}/${param1}/project_labels`,
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

/** 删除仓库标签 删除仓库标签 DELETE /v5/repos/${param0}/${param1}/project_labels */
export async function deleteV5ReposOwnerRepoProjectLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoProjectLabelsParams,
  body: string[],
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/project_labels`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}
