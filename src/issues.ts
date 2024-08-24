/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取某个企业的所有 Issues 获取某个企业的所有 Issues GET /v5/enterprises/${param0}/issues */
export async function getV5EnterprisesEnterpriseIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseIssuesParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.Issue[]>(`/v5/enterprises/${param0}/issues`, {
    method: 'GET',
    params: {
      // state has a default value: open
      state: 'open',

      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取企业的某个 Issue 获取企业的某个 Issue GET /v5/enterprises/${param0}/issues/${param1} */
export async function getV5EnterprisesEnterpriseIssuesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseIssuesNumberParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, number: param1, ...queryParams } = params;
  return request<API.Issue>(`/v5/enterprises/${param0}/issues/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新企业的某个 Issue 更新企业的某个 Issue PATCH /v5/enterprises/${param0}/issues/${param1} */
export async function patchV5EnterprisesEnterpriseIssuesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5EnterprisesEnterpriseIssuesNumberParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Issue 标题 */
    title?: string;
    /** Issue 状态，open（开启的）、progressing（进行中）、closed（关闭的） */
    state?: 'open' | 'progressing' | 'closed';
    /** Issue 描述 */
    body?: string;
    /** Issue 负责人的个人空间地址 */
    assignee?: string;
    /** Issue 协助者的个人空间地址，以 , 分隔 */
    collaborators?: string;
    /** 里程碑序号 */
    milestone?: number;
    /** 用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance */
    labels?: string;
    /** 项目 ID */
    program?: string;
    /** 是否是私有 issue(默认为 false) */
    security_hole?: boolean;
    /** 分支名称，传空串表示取消关联分支 */
    branch?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, number: param1, ...queryParams } = params;
  return request<API.Issue>(`/v5/enterprises/${param0}/issues/${param1}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取企业某个 Issue 所有评论 获取企业某个 Issue 所有评论 GET /v5/enterprises/${param0}/issues/${param1}/comments */
export async function getV5EnterprisesEnterpriseIssuesNumberComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseIssuesNumberCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, number: param1, ...queryParams } = params;
  return request<API.Note[]>(
    `/v5/enterprises/${param0}/issues/${param1}/comments`,
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

/** 获取企业某个 Issue 所有标签 获取企业某个 Issue 所有标签 GET /v5/enterprises/${param0}/issues/${param1}/labels */
export async function getV5EnterprisesEnterpriseIssuesNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseIssuesNumberLabelsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, number: param1, ...queryParams } = params;
  return request<API.Label[]>(
    `/v5/enterprises/${param0}/issues/${param1}/labels`,
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

/** 获取企业 issue 关联的 Pull Requests 获取企业 issue 关联的 Pull Requests GET /v5/enterprises/${param0}/issues/${param1}/pull_requests */
export async function getV5EnterprisesEnterpriseIssuesNumberPullRequests(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseIssuesNumberPullRequestsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, number: param1, ...queryParams } = params;
  return request<API.PullRequest[]>(
    `/v5/enterprises/${param0}/issues/${param1}/pull_requests`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取当前授权用户的所有 Issues 获取当前授权用户的所有 Issues GET /v5/issues */
export async function getV5Issues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5IssuesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Issue[]>('/v5/issues', {
    method: 'GET',
    params: {
      // filter has a default value: assigned
      filter: 'assigned',
      // state has a default value: open
      state: 'open',

      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户某个组织的 Issues 获取当前用户某个组织的 Issues GET /v5/orgs/${param0}/issues */
export async function getV5OrgsOrgIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgIssuesParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.Issue[]>(`/v5/orgs/${param0}/issues`, {
    method: 'GET',
    params: {
      // filter has a default value: assigned
      filter: 'assigned',
      // state has a default value: open
      state: 'open',

      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 仓库的所有 Issues 仓库的所有 Issues GET /v5/repos/${param0}/${param1}/issues */
export async function getV5ReposOwnerRepoIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Issue[]>(`/v5/repos/${param0}/${param1}/issues`, {
    method: 'GET',
    params: {
      // state has a default value: open
      state: 'open',

      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 仓库的某个 Issue 仓库的某个 Issue GET /v5/repos/${param0}/${param1}/issues/${param2} */
export async function getV5ReposOwnerRepoIssuesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesNumberParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Issue>(`/v5/repos/${param0}/${param1}/issues/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库某个 Issue 所有的评论 获取仓库某个 Issue 所有的评论 GET /v5/repos/${param0}/${param1}/issues/${param2}/comments */
export async function getV5ReposOwnerRepoIssuesNumberComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesNumberCommentsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Note[]>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/comments`,
    {
      method: 'GET',
      params: {
        // page has a default value: 1
        page: '1',
        // per_page has a default value: 20
        per_page: '20',
        // order has a default value: asc
        order: 'asc',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 创建某个 Issue 评论 创建某个 Issue 评论 POST /v5/repos/${param0}/${param1}/issues/${param2}/comments */
export async function postV5ReposOwnerRepoIssuesNumberComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoIssuesNumberCommentsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** The contents of the comment. */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Note>(
    `/v5/repos/${param0}/${param1}/issues/${param2}/comments`,
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

/** 获取仓库所有 Issue 的评论 获取仓库所有 Issue 的评论 GET /v5/repos/${param0}/${param1}/issues/comments */
export async function getV5ReposOwnerRepoIssuesComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Note[]>(`/v5/repos/${param0}/${param1}/issues/comments`, {
    method: 'GET',
    params: {
      // sort has a default value: created
      sort: 'created',
      // direction has a default value: asc
      direction: 'asc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库 Issue 某条评论 获取仓库 Issue 某条评论 GET /v5/repos/${param0}/${param1}/issues/comments/${param2} */
export async function getV5ReposOwnerRepoIssuesCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoIssuesCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Note>(
    `/v5/repos/${param0}/${param1}/issues/comments/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除 Issue 某条评论 删除 Issue 某条评论 DELETE /v5/repos/${param0}/${param1}/issues/comments/${param2} */
export async function deleteV5ReposOwnerRepoIssuesCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoIssuesCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/issues/comments/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新 Issue 某条评论 更新 Issue 某条评论 PATCH /v5/repos/${param0}/${param1}/issues/comments/${param2} */
export async function patchV5ReposOwnerRepoIssuesCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoIssuesCommentsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** The contents of the comment. */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Note>(
    `/v5/repos/${param0}/${param1}/issues/comments/${param2}`,
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

/** 创建 Issue 创建 Issue POST /v5/repos/${param0}/issues */
export async function postV5ReposOwnerIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerIssuesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库路径 (path) */
    repo?: string;
    /** Issue 标题 */
    title: string;
    /** 企业自定义任务类型，非企业默认任务类型为“任务” */
    issue_type?: string;
    /** Issue 描述 */
    body?: string;
    /** Issue 负责人的个人空间地址 */
    assignee?: string;
    /** Issue 协助者的个人空间地址，以 , 分隔 */
    collaborators?: string;
    /** 里程碑序号 */
    milestone?: number;
    /** 用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance */
    labels?: string;
    /** 项目 ID */
    program?: string;
    /** 是否是私有 issue(默认为 false) */
    security_hole?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, ...queryParams } = params;
  return request<API.Issue>(`/v5/repos/${param0}/issues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 更新 Issue 更新 Issue PATCH /v5/repos/${param0}/issues/${param1} */
export async function patchV5ReposOwnerIssuesNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerIssuesNumberParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库路径 (path) */
    repo?: string;
    /** Issue 标题 */
    title?: string;
    /** Issue 状态，open（开启的）、progressing（进行中）、closed（关闭的） */
    state?: 'open' | 'progressing' | 'closed';
    /** Issue 描述 */
    body?: string;
    /** Issue 负责人的个人空间地址 */
    assignee?: string;
    /** Issue 协助者的个人空间地址，以 , 分隔 */
    collaborators?: string;
    /** 里程碑序号 */
    milestone?: number;
    /** 用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance */
    labels?: string;
    /** 项目 ID */
    program?: string;
    /** 是否是私有 issue(默认为 false) */
    security_hole?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, number: param1, ...queryParams } = params;
  return request<API.Issue>(`/v5/repos/${param0}/issues/${param1}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取某个 Issue 下的操作日志 获取某个 Issue 下的操作日志 GET /v5/repos/${param0}/issues/${param1}/operate_logs */
export async function getV5ReposOwnerIssuesNumberOperateLogs(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerIssuesNumberOperateLogsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, number: param1, ...queryParams } = params;
  return request<API.OperateLog[]>(
    `/v5/repos/${param0}/issues/${param1}/operate_logs`,
    {
      method: 'GET',
      params: {
        // sort has a default value: desc
        sort: 'desc',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取 issue 关联的 Pull Requests 获取 issue 关联的 Pull Requests GET /v5/repos/${param0}/issues/${param1}/pull_requests */
export async function getV5ReposOwnerIssuesNumberPullRequests(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerIssuesNumberPullRequestsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, number: param1, ...queryParams } = params;
  return request<API.PullRequest[]>(
    `/v5/repos/${param0}/issues/${param1}/pull_requests`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取授权用户的所有 Issues 获取授权用户的所有 Issues GET /v5/user/issues */
export async function getV5UserIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserIssuesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Issue[]>('/v5/user/issues', {
    method: 'GET',
    params: {
      // filter has a default value: assigned
      filter: 'assigned',
      // state has a default value: open
      state: 'open',

      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',

      ...params,
    },
    ...(options || {}),
  });
}
