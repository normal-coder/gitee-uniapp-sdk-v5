/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取授权用户的全部邮箱 获取授权用户的全部邮箱 GET /v5/emails */
export async function getV5Emails(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EmailsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserEmail[]>('/v5/emails', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
