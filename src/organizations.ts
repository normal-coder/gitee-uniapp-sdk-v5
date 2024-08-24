/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取一个组织 获取一个组织 GET /v5/orgs/${param0} */
export async function getV5OrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.GroupDetail>(`/v5/orgs/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新授权用户所管理的组织资料 更新授权用户所管理的组织资料 PATCH /v5/orgs/${param0} */
export async function patchV5OrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5OrgsOrgParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 组织公开的邮箱地址 */
    email?: string;
    /** 组织所在地 */
    location?: string;
    /** 组织名称 */
    name?: string;
    /** 组织简介 */
    description?: string;
    /** 组织站点 */
    html_url?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.GroupDetail>(`/v5/orgs/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出指定组织的所有关注者 列出指定组织的所有关注者 GET /v5/orgs/${param0}/followers */
export async function getV5OrgsOrgFollowers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgFollowersParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.GroupFollowers[]>(`/v5/orgs/${param0}/followers`, {
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

/** 列出一个组织的所有成员 列出一个组织的所有成员 GET /v5/orgs/${param0}/members */
export async function getV5OrgsOrgMembers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgMembersParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.UserBasic[]>(`/v5/orgs/${param0}/members`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      // role has a default value: all
      role: 'all',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取授权用户所属组织的一个成员 获取授权用户所属组织的一个成员 GET /v5/orgs/${param0}/memberships/${param1} */
export async function getV5OrgsOrgMembershipsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgMembershipsUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, username: param1, ...queryParams } = params;
  return request<API.GroupMember>(`/v5/orgs/${param0}/memberships/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 增加或更新授权用户所管理组织的成员 增加或更新授权用户所管理组织的成员 PUT /v5/orgs/${param0}/memberships/${param1} */
export async function putV5OrgsOrgMembershipsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5OrgsOrgMembershipsUsernameParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 设置用户在组织的角色 */
    role?: 'admin' | 'member';
  },
  options?: { [key: string]: unknown }
) {
  const { org: param0, username: param1, ...queryParams } = params;
  return request<API.GroupMember>(`/v5/orgs/${param0}/memberships/${param1}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 移除授权用户所管理组织中的成员 移除授权用户所管理组织中的成员 DELETE /v5/orgs/${param0}/memberships/${param1} */
export async function deleteV5OrgsOrgMembershipsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5OrgsOrgMembershipsUsernameParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, username: param1, ...queryParams } = params;
  return request<unknown>(`/v5/orgs/${param0}/memberships/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出授权用户在所属组织的成员资料 列出授权用户在所属组织的成员资料 GET /v5/user/memberships/orgs */
export async function getV5UserMembershipsOrgs(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserMembershipsOrgsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.GroupMember[]>('/v5/user/memberships/orgs', {
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

/** 获取授权用户在一个组织的成员资料 获取授权用户在一个组织的成员资料 GET /v5/user/memberships/orgs/${param0} */
export async function getV5UserMembershipsOrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserMembershipsOrgsOrgParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.GroupMember>(`/v5/user/memberships/orgs/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 退出一个组织 退出一个组织 DELETE /v5/user/memberships/orgs/${param0} */
export async function deleteV5UserMembershipsOrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5UserMembershipsOrgsOrgParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<unknown>(`/v5/user/memberships/orgs/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新授权用户在一个组织的成员资料 更新授权用户在一个组织的成员资料 PATCH /v5/user/memberships/orgs/${param0} */
export async function patchV5UserMembershipsOrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5UserMembershipsOrgsOrgParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 在组织中的备注信息 */
    remark?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.GroupMember>(`/v5/user/memberships/orgs/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出授权用户所属的组织 列出授权用户所属的组织 GET /v5/user/orgs */
export async function getV5UserOrgs(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserOrgsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Group[]>('/v5/user/orgs', {
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

/** 列出用户所属的组织 列出用户所属的组织 GET /v5/users/${param0}/orgs */
export async function getV5UsersUsernameOrgs(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameOrgsParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Group[]>(`/v5/users/${param0}/orgs`, {
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

/** 创建组织 创建组织 POST /v5/users/organization */
export async function postV5UsersOrganization(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 组织名称 */
    name: string;
    /** 组织的路径 (path/login) */
    org: string;
    /** 组织描述 */
    description?: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.Group>('/v5/users/organization', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}
