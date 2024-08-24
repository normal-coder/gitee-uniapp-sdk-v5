/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取 Pull Request 列表 获取 Pull Request 列表 GET /v5/repos/${param0}/${param1}/pulls */
export async function getV5ReposOwnerRepoPulls(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.PullRequest[]>(`/v5/repos/${param0}/${param1}/pulls`, {
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

/** 创建 Pull Request 创建 Pull Request POST /v5/repos/${param0}/${param1}/pulls */
export async function postV5ReposOwnerRepoPulls(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 必填。Pull Request 标题 */
    title: string;
    /** 必填。Pull Request 提交的源分支。格式：branch (master) 或者：path_with_namespace:branch (oschina/gitee:master) */
    head: string;
    /** 必填。Pull Request 提交目标分支的名称 */
    base: string;
    /** 可选。Pull Request 内容 */
    body?: string;
    /** 可选。里程碑序号 (id) */
    milestone_number?: number;
    /** 用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance */
    labels?: string;
    /** 可选。Pull Request 的标题和内容可以根据指定的 Issue Id 自动填充 */
    issue?: string;
    /** 可选。审查人员 username，可多个，半角逗号分隔，如：(username1,username2), 注意：当仓库代码审查设置中已设置【指派审查人员】则此选项无效 */
    assignees?: string;
    /** 可选。测试人员 username，可多个，半角逗号分隔，如：(username1,username2), 注意：当仓库代码审查设置中已设置【指派测试人员】则此选项无效 */
    testers?: string;
    /** 可选。最少审查人数 */
    assignees_number?: number;
    /** 可选。最少测试人数 */
    testers_number?: number;
    /** 可选。依赖的当前仓库下的 PR 编号，置空则清空依赖的 PR。如：17,18,19 */
    ref_pull_request_numbers?: string;
    /** 可选。合并 PR 后是否删除源分支，默认 false（不删除） */
    prune_source_branch?: boolean;
    /** 可选，合并后是否关闭关联的 Issue，默认根据仓库配置设置 */
    close_related_issue?: boolean;
    /** 是否设置为草稿 */
    draft?: boolean;
    /** 接受 Pull Request 时使用扁平化（Squash）合并 */
    squash?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.PullRequest>(`/v5/repos/${param0}/${param1}/pulls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取单个 Pull Request 获取单个 Pull Request GET /v5/repos/${param0}/${param1}/pulls/${param2} */
export async function getV5ReposOwnerRepoPullsNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新 Pull Request 信息 更新 Pull Request 信息 PATCH /v5/repos/${param0}/${param1}/pulls/${param2} */
export async function patchV5ReposOwnerRepoPullsNumber(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoPullsNumberParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 可选。Pull Request 标题 */
    title?: string;
    /** 可选。Pull Request 内容 */
    body?: string;
    /** 可选。Pull Request 状态 */
    state?: 'closed' | 'open';
    /** 可选。里程碑序号 (id) */
    milestone_number?: number;
    /** 用逗号分开的标签，名称要求长度在 2-20 之间且非特殊字符。如：bug,performance */
    labels?: string;
    /** 可选。最少审查人数 */
    assignees_number?: number;
    /** 可选。最少测试人数 */
    testers_number?: number;
    /** 可选。依赖的当前仓库下的 PR 编号，置空则清空依赖的 PR。如：17,18,19 */
    ref_pull_request_numbers?: string;
    /** 可选，合并后是否关闭关联的 Issue，默认根据仓库配置设置 */
    close_related_issue?: boolean;
    /** 是否设置为草稿 */
    draft?: boolean;
    /** 接受 Pull Request 时使用扁平化（Squash）合并 */
    squash?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}`,
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

/** 指派用户审查 Pull Request 指派用户审查 Pull Request POST /v5/repos/${param0}/${param1}/pulls/${param2}/assignees */
export async function postV5ReposOwnerRepoPullsNumberAssignees(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberAssigneesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 用户的个人空间地址，以 , 分隔 */
    assignees: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/assignees`,
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

/** 取消用户审查 Pull Request 取消用户审查 Pull Request DELETE /v5/repos/${param0}/${param1}/pulls/${param2}/assignees */
export async function deleteV5ReposOwnerRepoPullsNumberAssignees(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoPullsNumberAssigneesParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/assignees`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 重置 Pull Request 审查 的状态 重置 Pull Request 审查 的状态 PATCH /v5/repos/${param0}/${param1}/pulls/${param2}/assignees */
export async function patchV5ReposOwnerRepoPullsNumberAssignees(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoPullsNumberAssigneesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 是否重置所有审查人，默认：false，只对管理员生效 */
    reset_all?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/assignees`,
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

/** 获取某个 Pull Request 的所有评论 获取某个 Pull Request 的所有评论 GET /v5/repos/${param0}/${param1}/pulls/${param2}/comments */
export async function getV5ReposOwnerRepoPullsNumberComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberCommentsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequestComments[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/comments`,
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

/** 提交 Pull Request 评论 提交 Pull Request 评论 POST /v5/repos/${param0}/${param1}/pulls/${param2}/comments */
export async function postV5ReposOwnerRepoPullsNumberComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberCommentsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 必填。评论内容 */
    body: string;
    /** 可选。PR 代码评论的 commit id */
    commit_id?: string;
    /** 可选。PR 代码评论的文件名 */
    path?: string;
    /** 可选。PR 代码评论 diff 中的行数 */
    position?: number;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequestComments>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/comments`,
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

/** 获取某 Pull Request 的所有 Commit 信息。最多显示 250 条 Commit 获取某 Pull Request 的所有 Commit 信息。最多显示 250 条 Commit GET /v5/repos/${param0}/${param1}/pulls/${param2}/commits */
export async function getV5ReposOwnerRepoPullsNumberCommits(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberCommitsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequestCommits[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/commits`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** Pull Request Commit 文件列表。最多显示 300 条 diff Pull Request Commit 文件列表。最多显示 300 条 diff GET /v5/repos/${param0}/${param1}/pulls/${param2}/files */
export async function getV5ReposOwnerRepoPullsNumberFiles(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberFilesParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequestFiles[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/files`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取 Pull Request 关联的 issues 获取 Pull Request 关联的 issues GET /v5/repos/${param0}/${param1}/pulls/${param2}/issues */
export async function getV5ReposOwnerRepoPullsNumberIssues(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberIssuesParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Issue[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/issues`,
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

/** 获取某个 Pull Request 的所有标签 获取某个 Pull Request 的所有标签 GET /v5/repos/${param0}/${param1}/pulls/${param2}/labels */
export async function getV5ReposOwnerRepoPullsNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberLabelsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.Label[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/labels`,
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

/** 替换 Pull Request 所有标签 替换 Pull Request 所有标签 需要在请求的 body 里填上数组，元素为标签的名字。如：["performance", "bug"] PUT /v5/repos/${param0}/${param1}/pulls/${param2}/labels */
export async function putV5ReposOwnerRepoPullsNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoPullsNumberLabelsParams,
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
    `/v5/repos/${param0}/${param1}/pulls/${param2}/labels`,
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

/** 创建 Pull Request 标签 创建 Pull Request 标签 需要在请求的 body 里填上数组，元素为标签的名字。如：["performance", "bug"] POST /v5/repos/${param0}/${param1}/pulls/${param2}/labels */
export async function postV5ReposOwnerRepoPullsNumberLabels(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberLabelsParams,
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
    `/v5/repos/${param0}/${param1}/pulls/${param2}/labels`,
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

/** 删除 Pull Request 标签 删除 Pull Request 标签 DELETE /v5/repos/${param0}/${param1}/pulls/${param2}/labels/${param3} */
export async function deleteV5ReposOwnerRepoPullsNumberLabelsName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoPullsNumberLabelsNameParams,
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
    `/v5/repos/${param0}/${param1}/pulls/${param2}/labels/${param3}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 判断 Pull Request 是否已经合并 判断 Pull Request 是否已经合并 GET /v5/repos/${param0}/${param1}/pulls/${param2}/merge */
export async function getV5ReposOwnerRepoPullsNumberMerge(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberMergeParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/merge`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 合并 Pull Request 合并 Pull Request PUT /v5/repos/${param0}/${param1}/pulls/${param2}/merge */
export async function putV5ReposOwnerRepoPullsNumberMerge(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoPullsNumberMergeParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 可选。合并 PR 的方法，merge（合并所有提交）、squash（扁平化分支合并）和 rebase（变基并合并）。默认为 merge。 */
    merge_method?: 'merge' | 'squash' | 'rebase';
    /** 可选。合并 PR 后是否删除源分支，默认 false（不删除） */
    prune_source_branch?: boolean;
    /** 可选。合并标题，默认为 PR 的标题 */
    title?: string;
    /** 可选。合并描述，默认为 "Merge pull request !{pr_id} from {author}/{source_branch}"，与页面显示的默认一致。 */
    description?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/merge`,
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

/** 获取某个 Pull Request 的操作日志 获取某个 Pull Request 的操作日志 GET /v5/repos/${param0}/${param1}/pulls/${param2}/operate_logs */
export async function getV5ReposOwnerRepoPullsNumberOperateLogs(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsNumberOperateLogsParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.OperateLog[]>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/operate_logs`,
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

/** 处理 Pull Request 审查 处理 Pull Request 审查 POST /v5/repos/${param0}/${param1}/pulls/${param2}/review */
export async function postV5ReposOwnerRepoPullsNumberReview(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberReviewParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 是否强制审查通过（默认否），只对管理员生效 */
    force?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/review`,
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

/** 处理 Pull Request 测试 处理 Pull Request 测试 POST /v5/repos/${param0}/${param1}/pulls/${param2}/test */
export async function postV5ReposOwnerRepoPullsNumberTest(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberTestParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 是否强制测试通过（默认否），只对管理员生效 */
    force?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/test`,
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

/** 指派用户测试 Pull Request 指派用户测试 Pull Request POST /v5/repos/${param0}/${param1}/pulls/${param2}/testers */
export async function postV5ReposOwnerRepoPullsNumberTesters(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPullsNumberTestersParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 用户的个人空间地址，以 , 分隔 */
    testers: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/testers`,
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

/** 取消用户测试 Pull Request 取消用户测试 Pull Request DELETE /v5/repos/${param0}/${param1}/pulls/${param2}/testers */
export async function deleteV5ReposOwnerRepoPullsNumberTesters(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoPullsNumberTestersParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/testers`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 重置 Pull Request 测试 的状态 重置 Pull Request 测试 的状态 PATCH /v5/repos/${param0}/${param1}/pulls/${param2}/testers */
export async function patchV5ReposOwnerRepoPullsNumberTesters(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoPullsNumberTestersParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 是否重置所有测试人，默认：false，只对管理员生效 */
    reset_all?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    number: param2,
    ...queryParams
  } = params;
  return request<API.PullRequest>(
    `/v5/repos/${param0}/${param1}/pulls/${param2}/testers`,
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

/** 获取 Pull Request 的某个评论 获取 Pull Request 的某个评论 GET /v5/repos/${param0}/${param1}/pulls/comments/${param2} */
export async function getV5ReposOwnerRepoPullsCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPullsCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.PullRequestComments>(
    `/v5/repos/${param0}/${param1}/pulls/comments/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除评论 删除评论 DELETE /v5/repos/${param0}/${param1}/pulls/comments/${param2} */
export async function deleteV5ReposOwnerRepoPullsCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoPullsCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/pulls/comments/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 编辑评论 编辑评论 PATCH /v5/repos/${param0}/${param1}/pulls/comments/${param2} */
export async function patchV5ReposOwnerRepoPullsCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoPullsCommentsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 必填。评论内容 */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.PullRequestComments>(
    `/v5/repos/${param0}/${param1}/pulls/comments/${param2}`,
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
