/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 列出可使用的 Emoji 列出可使用的 Emoji GET /v5/emojis */
export async function getV5Emojis(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EmojisParams,
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/emojis', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列出可使用的 .gitignore 模板 列出可使用的 .gitignore 模板 GET /v5/gitignore/templates */
export async function getV5GitignoreTemplates(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GitignoreTemplatesParams,
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/gitignore/templates', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一个 .gitignore 模板 获取一个 .gitignore 模板 GET /v5/gitignore/templates/${param0} */
export async function getV5GitignoreTemplatesName(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GitignoreTemplatesNameParams,
  options?: { [key: string]: unknown }
) {
  const { name: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gitignore/templates/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取一个 .gitignore 模板原始文件 获取一个 .gitignore 模板原始文件 GET /v5/gitignore/templates/${param0}/raw */
export async function getV5GitignoreTemplatesNameRaw(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5GitignoreTemplatesNameRawParams,
  options?: { [key: string]: unknown }
) {
  const { name: param0, ...queryParams } = params;
  return request<unknown>(`/v5/gitignore/templates/${param0}/raw`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出可使用的开源许可协议 列出可使用的开源许可协议 GET /v5/licenses */
export async function getV5Licenses(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5LicensesParams,
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/licenses', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取一个开源许可协议 获取一个开源许可协议 GET /v5/licenses/${param0} */
export async function getV5LicensesLicense(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5LicensesLicenseParams,
  options?: { [key: string]: unknown }
) {
  const { license: param0, ...queryParams } = params;
  return request<unknown>(`/v5/licenses/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取一个开源许可协议原始文件 获取一个开源许可协议原始文件 GET /v5/licenses/${param0}/raw */
export async function getV5LicensesLicenseRaw(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5LicensesLicenseRawParams,
  options?: { [key: string]: unknown }
) {
  const { license: param0, ...queryParams } = params;
  return request<unknown>(`/v5/licenses/${param0}/raw`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 渲染 Markdown 文本 渲染 Markdown 文本 POST /v5/markdown */
export async function postV5Markdown(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Markdown 文本 */
    text: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/markdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取一个仓库使用的开源许可协议 获取一个仓库使用的开源许可协议 GET /v5/repos/${param0}/${param1}/license */
export async function getV5ReposOwnerRepoLicense(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoLicenseParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/license`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
