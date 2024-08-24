/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 列出仓库的所有公开动态 列出仓库的所有公开动态 GET /v5/networks/${param0}/${param1}/events */
export async function getV5NetworksOwnerRepoEvents(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NetworksOwnerRepoEventsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Event[]>(`/v5/networks/${param0}/${param1}/events`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取授权用户的通知数 获取授权用户的通知数 GET /v5/notifications/count */
export async function getV5NotificationsCount(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NotificationsCountParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserNotificationCount>('/v5/notifications/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列出授权用户的所有私信 列出授权用户的所有私信 GET /v5/notifications/messages */
export async function getV5NotificationsMessages(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NotificationsMessagesParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserMessageList>('/v5/notifications/messages', {
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

/** 标记所有私信为已读 标记所有私信为已读 PUT /v5/notifications/messages */
export async function putV5NotificationsMessages(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 指定一组私信 ID，以 , 分隔 */
    ids?: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/notifications/messages', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送私信给指定用户 发送私信给指定用户 POST /v5/notifications/messages */
export async function postV5NotificationsMessages(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 用户名 (username/login) */
    username: string;
    /** 私信内容 */
    content: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.UserMessage>('/v5/notifications/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取一条私信 获取一条私信 GET /v5/notifications/messages/${param0} */
export async function getV5NotificationsMessagesId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NotificationsMessagesIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserMessage>(`/v5/notifications/messages/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 标记一条私信为已读 标记一条私信为已读 PATCH /v5/notifications/messages/${param0} */
export async function patchV5NotificationsMessagesId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5NotificationsMessagesIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/notifications/messages/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出授权用户的所有通知 列出授权用户的所有通知 GET /v5/notifications/threads */
export async function getV5NotificationsThreads(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NotificationsThreadsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.UserNotificationList>('/v5/notifications/threads', {
    method: 'GET',
    params: {
      // type has a default value: all
      type: 'all',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 标记所有通知为已读 标记所有通知为已读 PUT /v5/notifications/threads */
export async function putV5NotificationsThreads(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 指定一组通知 ID，以 , 分隔 */
    ids?: string;
  },
  options?: { [key: string]: unknown }
) {
  return request<unknown>('/v5/notifications/threads', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取一条通知 获取一条通知 GET /v5/notifications/threads/${param0} */
export async function getV5NotificationsThreadsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5NotificationsThreadsIdParams,
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserNotification>(`/v5/notifications/threads/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 标记一条通知为已读 标记一条通知为已读 PATCH /v5/notifications/threads/${param0} */
export async function patchV5NotificationsThreadsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5NotificationsThreadsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { id: param0, ...queryParams } = params;
  return request<unknown>(`/v5/notifications/threads/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出组织的公开动态 列出组织的公开动态 GET /v5/orgs/${param0}/events */
export async function getV5OrgsOrgEvents(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgEventsParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.Event[]>(`/v5/orgs/${param0}/events`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出仓库的所有动态 列出仓库的所有动态 GET /v5/repos/${param0}/${param1}/events */
export async function getV5ReposOwnerRepoEvents(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoEventsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Event[]>(`/v5/repos/${param0}/${param1}/events`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出一个仓库里的通知 列出一个仓库里的通知 GET /v5/repos/${param0}/${param1}/notifications */
export async function getV5ReposOwnerRepoNotifications(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoNotificationsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.UserNotificationList>(
    `/v5/repos/${param0}/${param1}/notifications`,
    {
      method: 'GET',
      params: {
        // type has a default value: all
        type: 'all',

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

/** 标记一个仓库里的通知为已读 标记一个仓库里的通知为已读 PUT /v5/repos/${param0}/${param1}/notifications */
export async function putV5ReposOwnerRepoNotifications(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoNotificationsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 指定一组通知 ID，以 , 分隔 */
    ids?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/notifications`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出 star 了仓库的用户 列出 star 了仓库的用户 GET /v5/repos/${param0}/${param1}/stargazers */
export async function getV5ReposOwnerRepoStargazers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoStargazersParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectStargazers[]>(
    `/v5/repos/${param0}/${param1}/stargazers`,
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

/** 列出 watch 了仓库的用户 列出 watch 了仓库的用户 GET /v5/repos/${param0}/${param1}/subscribers */
export async function getV5ReposOwnerRepoSubscribers(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoSubscribersParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectWatchers[]>(
    `/v5/repos/${param0}/${param1}/subscribers`,
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

/** 列出授权用户 star 了的仓库 列出授权用户 star 了的仓库 GET /v5/user/starred */
export async function getV5UserStarred(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserStarredParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Project[]>('/v5/user/starred', {
    method: 'GET',
    params: {
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

/** 检查授权用户是否 star 了一个仓库 检查授权用户是否 star 了一个仓库 GET /v5/user/starred/${param0}/${param1} */
export async function getV5UserStarredOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserStarredOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/starred/${param0}/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** star 一个仓库 star 一个仓库 PUT /v5/user/starred/${param0}/${param1} */
export async function putV5UserStarredOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5UserStarredOwnerRepoParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/starred/${param0}/${param1}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 取消 star 一个仓库 取消 star 一个仓库 DELETE /v5/user/starred/${param0}/${param1} */
export async function deleteV5UserStarredOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5UserStarredOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/starred/${param0}/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出授权用户 watch 了的仓库 列出授权用户 watch 了的仓库 GET /v5/user/subscriptions */
export async function getV5UserSubscriptions(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserSubscriptionsParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Project[]>('/v5/user/subscriptions', {
    method: 'GET',
    params: {
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

/** 检查授权用户是否 watch 了一个仓库 检查授权用户是否 watch 了一个仓库 GET /v5/user/subscriptions/${param0}/${param1} */
export async function getV5UserSubscriptionsOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserSubscriptionsOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/subscriptions/${param0}/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** watch 一个仓库 watch 一个仓库 PUT /v5/user/subscriptions/${param0}/${param1} */
export async function putV5UserSubscriptionsOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5UserSubscriptionsOwnerRepoParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** watch 策略，watching: 关注所有动态，ignoring: 关注但不提醒动态 */
    watch_type: 'watching' | 'ignoring';
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/subscriptions/${param0}/${param1}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 取消 watch 一个仓库 取消 watch 一个仓库 DELETE /v5/user/subscriptions/${param0}/${param1} */
export async function deleteV5UserSubscriptionsOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5UserSubscriptionsOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/user/subscriptions/${param0}/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出用户的动态 列出用户的动态 GET /v5/users/${param0}/events */
export async function getV5UsersUsernameEvents(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameEventsParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Event[]>(`/v5/users/${param0}/events`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出用户所属组织的动态 列出用户所属组织的动态 GET /v5/users/${param0}/events/orgs/${param1} */
export async function getV5UsersUsernameEventsOrgsOrg(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameEventsOrgsOrgParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, org: param1, ...queryParams } = params;
  return request<API.Event[]>(`/v5/users/${param0}/events/orgs/${param1}`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出用户的公开动态 列出用户的公开动态 GET /v5/users/${param0}/events/public */
export async function getV5UsersUsernameEventsPublic(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameEventsPublicParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Event[]>(`/v5/users/${param0}/events/public`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出一个用户收到的动态 列出一个用户收到的动态 GET /v5/users/${param0}/received_events */
export async function getV5UsersUsernameReceivedEvents(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameReceivedEventsParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Event[]>(`/v5/users/${param0}/received_events`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出一个用户收到的公开动态 列出一个用户收到的公开动态 GET /v5/users/${param0}/received_events/public */
export async function getV5UsersUsernameReceivedEventsPublic(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameReceivedEventsPublicParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Event[]>(`/v5/users/${param0}/received_events/public`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出用户 star 了的仓库 列出用户 star 了的仓库 GET /v5/users/${param0}/starred */
export async function getV5UsersUsernameStarred(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameStarredParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Project[]>(`/v5/users/${param0}/starred`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出用户 watch 了的仓库 列出用户 watch 了的仓库 GET /v5/users/${param0}/subscriptions */
export async function getV5UsersUsernameSubscriptions(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameSubscriptionsParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Project[]>(`/v5/users/${param0}/subscriptions`, {
    method: 'GET',
    params: {
      // limit has a default value: 20
      limit: '20',
      // sort has a default value: created
      sort: 'created',
      // direction has a default value: desc
      direction: 'desc',
      ...queryParams,
    },
    ...(options || {}),
  });
}
