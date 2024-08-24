/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 企业 Pull Request 列表 企业 Pull Request 列表 GET /v5/enterprise/${param0}/pull_requests */
export async function getV5EnterpriseEnterprisePullRequests(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterpriseEnterprisePullRequestsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.PullRequest[]>(`/v5/enterprise/${param0}/pull_requests`, {
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

/** 获取一个企业 获取一个企业 GET /v5/enterprises/${param0} */
export async function getV5EnterprisesEnterprise(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.EnterpriseBasic>(`/v5/enterprises/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出企业的所有成员 列出企业的所有成员 GET /v5/enterprises/${param0}/members */
export async function getV5EnterprisesEnterpriseMembers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseMembersParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.EnterpriseMember[]>(`/v5/enterprises/${param0}/members`, {
    method: 'GET',
    params: {
      // role has a default value: all
      role: 'all',
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 添加或邀请企业成员 添加或邀请企业成员 POST /v5/enterprises/${param0}/members */
export async function postV5EnterprisesEnterpriseMembers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5EnterprisesEnterpriseMembersParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 需要邀请的用户名 (username/login)，username,email 至少填写一个 */
    username?: string;
    /** 要添加邮箱地址，若该邮箱未注册则自动创建帐号。username,email 至少填写一个 */
    email?: string;
    /** 企业角色：member => 普通成员，outsourced => 外包成员，admin => 管理员 */
    role?: 'admin' | 'member' | 'outsourced';
    /** 企业成员真实姓名（备注） */
    name?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<unknown>(`/v5/enterprises/${param0}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取企业的一个成员 获取企业的一个成员 GET /v5/enterprises/${param0}/members/${param1} */
export async function getV5EnterprisesEnterpriseMembersUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseMembersUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, username: param1, ...queryParams } = params;
  return request<API.EnterpriseMember>(
    `/v5/enterprises/${param0}/members/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 修改企业成员权限或备注 修改企业成员权限或备注 PUT /v5/enterprises/${param0}/members/${param1} */
export async function putV5EnterprisesEnterpriseMembersUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5EnterprisesEnterpriseMembersUsernameParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 企业角色：member => 普通成员，outsourced => 外包成员，admin => 管理员 */
    role?: 'admin' | 'member' | 'outsourced';
    /** 是否可访问企业资源，默认：是。（若选否则禁止该用户访问企业资源） */
    active?: boolean;
    /** 企业成员真实姓名（备注） */
    name?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, username: param1, ...queryParams } = params;
  return request<API.EnterpriseMember>(
    `/v5/enterprises/${param0}/members/${param1}`,
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

/** 移除企业成员 移除企业成员 DELETE /v5/enterprises/${param0}/members/${param1} */
export async function deleteV5EnterprisesEnterpriseMembersUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5EnterprisesEnterpriseMembersUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, username: param1, ...queryParams } = params;
  return request<unknown>(`/v5/enterprises/${param0}/members/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取企业成员信息 (通过用户名/邮箱) 获取企业成员信息 (通过用户名/邮箱) GET /v5/enterprises/${param0}/members/search */
export async function getV5EnterprisesEnterpriseMembersSearch(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseMembersSearchParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.EnterpriseMember>(
    `/v5/enterprises/${param0}/members/search`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 个人周报列表 个人周报列表 GET /v5/enterprises/${param0}/users/${param1}/week_reports */
export async function getV5EnterprisesEnterpriseUsersUsernameWeekReports(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseUsersUsernameWeekReportsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, username: param1, ...queryParams } = params;
  return request<API.WeekReport[]>(
    `/v5/enterprises/${param0}/users/${param1}/week_reports`,
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

/** 新建周报 新建周报 POST /v5/enterprises/${param0}/week_report */
export async function postV5EnterprisesEnterpriseWeekReport(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5EnterprisesEnterpriseWeekReportParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 周报所属年 */
    year: number;
    /** 周报内容 */
    content: string;
    /** 周报所属周 */
    week_index: number;
    /** 周报日期 (格式：2019-03-25) */
    date?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.WeekReport>(`/v5/enterprises/${param0}/week_report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 编辑周报 编辑周报 PATCH /v5/enterprises/${param0}/week_report/${param1} */
export async function patchV5EnterprisesEnterpriseWeekReportId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5EnterprisesEnterpriseWeekReportIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 周报内容 */
    content: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, id: param1, ...queryParams } = params;
  return request<API.WeekReport>(
    `/v5/enterprises/${param0}/week_report/${param1}`,
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

/** 企业成员周报列表 企业成员周报列表 GET /v5/enterprises/${param0}/week_reports */
export async function getV5EnterprisesEnterpriseWeekReports(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseWeekReportsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.WeekReport[]>(`/v5/enterprises/${param0}/week_reports`, {
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

/** 周报详情 周报详情 GET /v5/enterprises/${param0}/week_reports/${param1} */
export async function getV5EnterprisesEnterpriseWeekReportsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseWeekReportsIdParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, id: param1, ...queryParams } = params;
  return request<API.WeekReport>(
    `/v5/enterprises/${param0}/week_reports/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 评论周报 评论周报 POST /v5/enterprises/${param0}/week_reports/${param1}/comment */
export async function postV5EnterprisesEnterpriseWeekReportsIdComment(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5EnterprisesEnterpriseWeekReportsIdCommentParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 评论的内容 */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, id: param1, ...queryParams } = params;
  return request<API.Note>(
    `/v5/enterprises/${param0}/week_reports/${param1}/comment`,
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

/** 某个周报评论列表 某个周报评论列表 GET /v5/enterprises/${param0}/week_reports/${param1}/comments */
export async function getV5EnterprisesEnterpriseWeekReportsIdComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseWeekReportsIdCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, id: param1, ...queryParams } = params;
  return request<API.Note[]>(
    `/v5/enterprises/${param0}/week_reports/${param1}/comments`,
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

/** 删除周报某个评论 删除周报某个评论 DELETE /v5/enterprises/${param0}/week_reports/${param1}/comments/${param2} */
export async function deleteV5EnterprisesEnterpriseWeekReportsReportIdCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5EnterprisesEnterpriseWeekReportsReportIdCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const {
    enterprise: param0,
    report_id: param1,
    id: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/enterprises/${param0}/week_reports/${param1}/comments/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 列出授权用户所属的企业 列出授权用户所属的企业 GET /v5/user/enterprises */
export async function getV5UserEnterprises(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserEnterprisesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.EnterpriseBasic[]>('/v5/user/enterprises', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      // admin has a default value: true
      admin: 'true',
      ...params,
    },
    ...(options || {}),
  });
}
