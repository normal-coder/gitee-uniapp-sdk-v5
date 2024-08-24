/* eslint-disable */
// @ts-ignore

export type AttachFile = {
  id?: number;
  name?: string;
  size?: number;
  uploader?: UserMini;
  browser_download_url?: string;
};

export type Blame = {
  commit?: Commit;
  /** 代码行 */
  lines?: string[];
};

export type Blob = {
  sha?: string;
  size?: number;
  url?: string;
  content?: string;
  encoding?: string;
};

export type Branch = {
  name?: string;
  commit?: string;
  protected?: boolean;
  protection_url?: string;
};

export type CheckAnnotation = {
  /** 文件路径 */
  path?: string;
  /** 开始行 */
  start_line?: number;
  /** 结束行 */
  end_line?: number;
  /** 开始列 */
  start_column?: number;
  /** 结束列 */
  end_column?: number;
  /** 注释级别 */
  annotation_level?: string;
  /** 标题 */
  title?: string;
  /** 信息 */
  message?: string;
  /** 详情 */
  raw_details?: string;
  /** 文件路由 */
  blob_href?: string;
};

export type CheckRun = {
  id?: number;
  /** 提交 sha 值 */
  head_sha?: string;
  /** api 路由 */
  url?: string;
  /** 页面路由 */
  html_url?: string;
  /** 外部详情路由 */
  details_url?: string;
  /** 状态 */
  status?: string;
  /** 结论 */
  conclusion?: string;
  /** 开始时间 */
  started_at?: string;
  /** 完成事件 */
  completed_at?: string;
  /** 详情 */
  output?: Record<string, unknown>;
  /** 检查名 */
  name?: string;
};

export type Code = {
  url?: string;
  forks_url?: string;
  commits_url?: string;
  id?: string;
  description?: string;
  public?: boolean;
  owner?: UserBasic;
  user?: UserBasic;
  files?: string;
  truncated?: boolean;
  html_url?: string;
  comments?: number;
  comments_url?: string;
  git_pull_url?: string;
  git_push_url?: string;
  created_at?: string;
  updated_at?: string;
};

export type CodeComment = {
  id?: number;
  body?: string;
  created_at?: string;
  updated_at?: string;
};

export type CodeForks = {
  user?: UserBasic;
  url?: string;
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type CodeForksHistory = {
  url?: string;
  forks_url?: string;
  commits_url?: string;
  id?: string;
  description?: string;
  public?: boolean;
  owner?: UserBasic;
  user?: UserBasic;
  files?: string;
  truncated?: boolean;
  html_url?: string;
  comments?: number;
  comments_url?: string;
  git_pull_url?: string;
  git_push_url?: string;
  created_at?: string;
  updated_at?: string;
  forks?: string;
  history?: string;
};

export type Commit = {
  sha?: string;
  author?: GitUser;
  committer?: GitUser;
  message?: string;
  tree?: string;
  parents?: string[];
};

export type CommitContent = {
  content?: ContentBasic;
  commit?: Commit;
};

export type CommitParentsBasic = {
  url?: string;
  /** 第一个父级 commit 的 sha 值（即将废弃） */
  sha?: string;
  /** 全部父级 commit 的 sha 值 */
  shas?: string[];
};

export type Compare = {
  base_commit?: RepoCommit;
  merge_base_commit?: RepoCommit;
  /** commits 数量限制在 100 以内 */
  commits?: RepoCommit[];
  /** 文件列表 */
  files?: DiffFile[];
  /** 文件列表是否被截断 */
  truncated?: boolean;
};

export type CompleteBranch = {
  name?: string;
  commit?: string;
  _links?: string;
  protected?: boolean;
  protection_url?: string;
};

export type Content = {
  type?: string;
  encoding?: string;
  size?: number;
  name?: string;
  path?: string;
  content?: string;
  sha?: string;
  url?: string;
  html_url?: string;
  download_url?: string;
  _links?: string;
};

export type ContentBasic = {
  name?: string;
  path?: string;
  size?: number;
  sha?: string;
  type?: string;
  url?: string;
  html_url?: string;
  download_url?: string;
  _links?: string;
};

export type Contributor = {
  email?: string;
  name?: string;
  contributions?: number;
};

export type deleteV5EnterprisesEnterpriseMembersUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 用户名 (username/login) */
  username: string;
};

export type deleteV5EnterprisesEnterpriseWeekReportsReportIdCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 周报 ID */
  report_id: number;
  /** 评论 ID */
  id: number;
};

export type deleteV5GistsGistIdCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  gist_id: string;
  /** 评论的 ID */
  id: number;
};

export type deleteV5GistsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
};

export type deleteV5GistsIdStarParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
};

export type deleteV5OrgsOrgMembershipsUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 用户名 (username/login) */
  username: string;
};

export type deleteV5ReposOwnerRepoBaiduStatisticKeyParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type deleteV5ReposOwnerRepoBranchesBranchProtectionParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支名称 */
  branch: string;
};

export type deleteV5ReposOwnerRepoBranchesWildcardSettingParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支/通配符 */
  wildcard: string;
};

export type deleteV5ReposOwnerRepoCollaboratorsUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 用户名 (username/login) */
  username: string;
};

export type deleteV5ReposOwnerRepoCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoContentsPathParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径 */
  path: string;
  /** 文件的 Blob SHA，可通过 [获取仓库具体路径下的内容] API 获取 */
  sha: string;
  /** 提交信息 */
  message: string;
  /** 分支名称。默认为仓库对默认分支 */
  branch?: string;
  /** Committer 的名字，默认为当前用户的名字 */
  'committer[name]'?: string;
  /** Committer 的邮箱，默认为当前用户的邮箱 */
  'committer[email]'?: string;
  /** Author 的名字，默认为当前用户的名字 */
  'author[name]'?: string;
  /** Author 的邮箱，默认为当前用户的邮箱 */
  'author[email]'?: string;
};

export type deleteV5ReposOwnerRepoHooksIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Webhook 的 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoIssuesCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoIssuesNumberLabelsNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
  /** 标签名称 (批量删除用英文逗号分隔，如：bug,feature) */
  name: string;
};

export type deleteV5ReposOwnerRepoIssuesNumberLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type deleteV5ReposOwnerRepoKeysEnableIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 公钥 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoKeysIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 公钥 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoLabelsNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 标签名称 */
  name: string;
};

export type deleteV5ReposOwnerRepoMilestonesNumberParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 里程碑序号 (id) */
  number: number;
};

export type deleteV5ReposOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type deleteV5ReposOwnerRepoProjectLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type deleteV5ReposOwnerRepoPullsCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type deleteV5ReposOwnerRepoPullsNumberAssigneesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 用户的个人空间地址，以 , 分隔 */
  assignees: string;
};

export type deleteV5ReposOwnerRepoPullsNumberLabelsNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 标签名称 (批量删除用英文逗号分隔，如：bug,feature) */
  name: string;
};

export type deleteV5ReposOwnerRepoPullsNumberTestersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 用户的个人空间地址，以 , 分隔 */
  testers: string;
};

export type deleteV5ReposOwnerRepoReleasesIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  id: number;
};

export type deleteV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdParams =
  {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
    owner: string;
    /** 仓库路径 (path) */
    repo: string;
    release_id: number;
    attach_file_id: number;
  };

export type deleteV5UserFollowingUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
};

export type deleteV5UserKeysIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 公钥 ID */
  id: number;
};

export type deleteV5UserMembershipsOrgsOrgParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
};

export type deleteV5UserStarredOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type deleteV5UserSubscriptionsOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type DiffFile = {
  sha?: string;
  /** 文件路径 */
  filename?: string;
  /** 文件状态 */
  status?: string;
  /** 新增行数 */
  additions?: number;
  /** 删除行数 */
  deletions?: number;
  /** 变更行数 */
  changes?: number;
  /** blob 链接 */
  blob_url?: string;
  /** raw 链接 */
  raw_url?: string;
  /** content 链接 */
  content_url?: string;
  /** patch */
  patch?: string;
  /** patch 内容是否被截断 */
  truncated?: boolean;
};

export type EnterpriseBasic = {
  /** 企业 ID */
  id?: number;
  /** 企业命名空间 */
  path?: string;
  /** 企业名称 */
  name?: string;
  /** 企业地址 */
  url?: string;
  /** 企业头像地址 */
  avatar_url?: string;
};

export type EnterpriseMember = {
  url?: string;
  active?: boolean;
  remark?: string;
  role?: string;
  outsourced?: boolean;
  enterprise?: EnterpriseBasic;
  user?: UserMini;
};

export type Event = {
  id?: number;
  type?: string;
  actor?: UserMini;
  repo?: ProjectMini;
  org?: GroupBasic;
  public?: boolean;
  created_at?: string;
  /** 不同类型动态的内容 */
  payload?: Record<string, unknown>;
};

export type getV5EmailsParams = {
  /** 用户授权码 */
  access_token?: string;
};

export type getV5EmojisParams = {
  /** 用户授权码 */
  access_token?: string;
};

export type getV5EnterpriseEnterprisePullRequestsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 可选。Issue 编号 (区分大小写，无需添加 # 号) */
  issue_number?: string;
  /** 可选。仓库路径 (path) */
  repo?: string;
  /** 可选。项目 ID */
  program_id?: number;
  /** 可选。Pull Request 状态 */
  state?: 'open' | 'closed' | 'merged' | 'all';
  /** 可选。Pull Request 提交的源分支。格式：branch 或者：username:branch */
  head?: string;
  /** 可选。Pull Request 提交目标分支的名称。 */
  base?: string;
  /** 可选。排序字段，默认按创建时间 */
  sort?: 'created' | 'updated' | 'popularity' | 'long-running';
  /** 可选。起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 可选。升序/降序 */
  direction?: 'asc' | 'desc';
  /** 可选。里程碑序号 (id) */
  milestone_number?: number;
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseIssuesNumberCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseIssuesNumberLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseIssuesNumberParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type getV5EnterprisesEnterpriseIssuesNumberPullRequestsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type getV5EnterprisesEnterpriseIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open */
  state?: 'open' | 'progressing' | 'closed' | 'rejected' | 'all';
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at */
  sort?: 'created' | 'updated';
  /** 排序方式：升序 (asc)，降序 (desc)。默认：desc */
  direction?: 'asc' | 'desc';
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80 */
  schedule?: string;
  /** 计划截止日期，格式同上 */
  deadline?: string;
  /** 任务创建时间，格式同上 */
  created_at?: string;
  /** 任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上 */
  finished_at?: string;
  /** 根据里程碑标题。none 为没里程碑的，*为所有带里程碑的 */
  milestone?: string;
  /** 用户的 username。none 为没指派者，*为所有带有指派者的 */
  assignee?: string;
  /** 创建 Issues 的用户 username */
  creator?: string;
  /** 所属项目名称。none 为没所属有项目的，*为所有带所属项目的 */
  program?: string;
};

export type getV5EnterprisesEnterpriseLabelsNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 标签名称 */
  name: string;
};

export type getV5EnterprisesEnterpriseLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
};

export type getV5EnterprisesEnterpriseMembersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 根据角色筛选成员 */
  role?: 'all' | 'admin' | 'member';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseMembersSearchParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 查询类型：username/email */
  query_type: string;
  /** 查询值 */
  query_value: string;
};

export type getV5EnterprisesEnterpriseMembersUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5EnterprisesEnterpriseParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
};

export type getV5EnterprisesEnterpriseReposParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 搜索字符串 */
  search?: string;
  /** 筛选仓库的类型，可以是 all, public, internal, private。默认：all */
  type?: 'all' | 'public' | 'internal' | 'private';
  /** 只获取直属仓库，默认：false */
  direct?: boolean;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseUsersUsernameWeekReportsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 用户名 (username/login) */
  username: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5EnterprisesEnterpriseWeekReportsIdCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 周报 ID */
  id: number;
};

export type getV5EnterprisesEnterpriseWeekReportsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 周报 ID */
  id: number;
};

export type getV5EnterprisesEnterpriseWeekReportsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 用户名 (username/login) */
  username?: string;
  /** 周报所属年 */
  year?: number;
  /** 周报所属周 */
  week_index?: number;
  /** 周报日期 (格式：2019-03-25) */
  date?: string;
};

export type getV5GistsGistIdCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  gist_id: string;
  /** 评论的 ID */
  id: number;
};

export type getV5GistsGistIdCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  gist_id: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5GistsIdCommitsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
};

export type getV5GistsIdForksParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5GistsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
};

export type getV5GistsIdStarParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 代码片段的 ID */
  id: string;
};

export type getV5GistsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5GistsStarredParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5GitignoreTemplatesNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** .gitignore 模板名 */
  name:
  | 'Actionscript'
  | 'Ada'
  | 'Agda'
  | 'Android'
  | 'Anjuta'
  | 'Ansible'
  | 'AppEngine'
  | 'AppceleratorTitanium'
  | 'ArchLinuxPackages'
  | 'Archives'
  | 'Autotools'
  | 'Backup'
  | 'Bazaar'
  | 'BricxCC'
  | 'C'
  | 'C++'
  | 'CFWheels'
  | 'CMake'
  | 'CUDA'
  | 'CVS'
  | 'CakePHP'
  | 'Calabash'
  | 'ChefCookbook'
  | 'Clojure'
  | 'Cloud9'
  | 'CodeIgniter'
  | 'CodeKit'
  | 'CommonLisp'
  | 'Composer'
  | 'Concrete5'
  | 'Coq'
  | 'CraftCMS'
  | 'D'
  | 'DM'
  | 'Dart'
  | 'DartEditor'
  | 'Delphi'
  | 'Diff'
  | 'Dreamweaver'
  | 'Dropbox'
  | 'Drupal'
  | 'EPiServer'
  | 'Eagle'
  | 'Eclipse'
  | 'EiffelStudio'
  | 'Elisp'
  | 'Elixir'
  | 'Elm'
  | 'Emacs'
  | 'Ensime'
  | 'Erlang'
  | 'Espresso'
  | 'ExpressionEngine'
  | 'ExtJs'
  | 'Fancy'
  | 'Finale'
  | 'FlexBuilder'
  | 'Flutter'
  | 'ForceDotCom'
  | 'Fortran'
  | 'FuelPHP'
  | 'GPG'
  | 'GWT'
  | 'Gcov'
  | 'GitBook'
  | 'Go'
  | 'Godot'
  | 'Gradle'
  | 'Grails'
  | 'Haskell'
  | 'IGORPro'
  | 'Idris'
  | 'Images'
  | 'JBoss'
  | 'JDeveloper'
  | 'JENKINS_HOME'
  | 'JEnv'
  | 'Java'
  | 'Jekyll'
  | 'JetBrains'
  | 'Joomla'
  | 'Julia'
  | 'KDevelop4'
  | 'Kate'
  | 'KiCad'
  | 'Kohana'
  | 'Kotlin'
  | 'LabVIEW'
  | 'Laravel'
  | 'Lazarus'
  | 'Leiningen'
  | 'LemonStand'
  | 'LibreOffice'
  | 'Lilypond'
  | 'Linux'
  | 'Lithium'
  | 'Lua'
  | 'LyX'
  | 'MATLAB'
  | 'Magento'
  | 'Maven'
  | 'Mercurial'
  | 'Mercury'
  | 'MetaProgrammingSystem'
  | 'Metals'
  | 'MicrosoftOffice'
  | 'MiniProgram'
  | 'ModelSim'
  | 'Momentics'
  | 'MonoDevelop'
  | 'Nanoc'
  | 'NetBeans'
  | 'Nim'
  | 'Ninja'
  | 'Node'
  | 'NotepadPP'
  | 'OCaml'
  | 'Objective-C'
  | 'Octave'
  | 'Opa'
  | 'OpenCart'
  | 'OracleForms'
  | 'Otto'
  | 'PSoCCreator'
  | 'Packer'
  | 'Patch'
  | 'Perl'
  | 'Phalcon'
  | 'PlayFramework'
  | 'Plone'
  | 'Prestashop'
  | 'Processing'
  | 'PuTTY'
  | 'PureScript'
  | 'Python'
  | 'Qooxdoo'
  | 'Qt'
  | 'R'
  | 'ROS'
  | 'Rails'
  | 'Raku'
  | 'Redcar'
  | 'Redis'
  | 'RhodesRhomobile'
  | 'Ruby'
  | 'Rust'
  | 'SBT'
  | 'SCons'
  | 'SVN'
  | 'Sass'
  | 'Scala'
  | 'Scheme'
  | 'Scrivener'
  | 'Sdcc'
  | 'SeamGen'
  | 'SketchUp'
  | 'SlickEdit'
  | 'Smalltalk'
  | 'Stata'
  | 'Stella'
  | 'SublimeText'
  | 'SugarCRM'
  | 'Swift'
  | 'Symfony'
  | 'SymphonyCMS'
  | 'SynopsysVCS'
  | 'Tags'
  | 'TeX'
  | 'Terraform'
  | 'TextMate'
  | 'Textpattern'
  | 'TortoiseGit'
  | 'TurboGears2'
  | 'Typo3'
  | 'Umbraco'
  | 'Unity'
  | 'UnrealEngine'
  | 'VVVV'
  | 'Vagrant'
  | 'Vim'
  | 'VirtualEnv'
  | 'Virtuoso'
  | 'VisualStudio'
  | 'VisualStudioCode'
  | 'Waf'
  | 'WebMethods'
  | 'Windows'
  | 'WordPress'
  | 'Xcode'
  | 'XilinxISE'
  | 'Xojo'
  | 'Yeoman'
  | 'Yii'
  | 'ZendFramework'
  | 'Zephir'
  | 'macOS';
};

export type getV5GitignoreTemplatesNameRawParams = {
  /** 用户授权码 */
  access_token?: string;
  /** .gitignore 模板名 */
  name:
  | 'Actionscript'
  | 'Ada'
  | 'Agda'
  | 'Android'
  | 'Anjuta'
  | 'Ansible'
  | 'AppEngine'
  | 'AppceleratorTitanium'
  | 'ArchLinuxPackages'
  | 'Archives'
  | 'Autotools'
  | 'Backup'
  | 'Bazaar'
  | 'BricxCC'
  | 'C'
  | 'C++'
  | 'CFWheels'
  | 'CMake'
  | 'CUDA'
  | 'CVS'
  | 'CakePHP'
  | 'Calabash'
  | 'ChefCookbook'
  | 'Clojure'
  | 'Cloud9'
  | 'CodeIgniter'
  | 'CodeKit'
  | 'CommonLisp'
  | 'Composer'
  | 'Concrete5'
  | 'Coq'
  | 'CraftCMS'
  | 'D'
  | 'DM'
  | 'Dart'
  | 'DartEditor'
  | 'Delphi'
  | 'Diff'
  | 'Dreamweaver'
  | 'Dropbox'
  | 'Drupal'
  | 'EPiServer'
  | 'Eagle'
  | 'Eclipse'
  | 'EiffelStudio'
  | 'Elisp'
  | 'Elixir'
  | 'Elm'
  | 'Emacs'
  | 'Ensime'
  | 'Erlang'
  | 'Espresso'
  | 'ExpressionEngine'
  | 'ExtJs'
  | 'Fancy'
  | 'Finale'
  | 'FlexBuilder'
  | 'Flutter'
  | 'ForceDotCom'
  | 'Fortran'
  | 'FuelPHP'
  | 'GPG'
  | 'GWT'
  | 'Gcov'
  | 'GitBook'
  | 'Go'
  | 'Godot'
  | 'Gradle'
  | 'Grails'
  | 'Haskell'
  | 'IGORPro'
  | 'Idris'
  | 'Images'
  | 'JBoss'
  | 'JDeveloper'
  | 'JENKINS_HOME'
  | 'JEnv'
  | 'Java'
  | 'Jekyll'
  | 'JetBrains'
  | 'Joomla'
  | 'Julia'
  | 'KDevelop4'
  | 'Kate'
  | 'KiCad'
  | 'Kohana'
  | 'Kotlin'
  | 'LabVIEW'
  | 'Laravel'
  | 'Lazarus'
  | 'Leiningen'
  | 'LemonStand'
  | 'LibreOffice'
  | 'Lilypond'
  | 'Linux'
  | 'Lithium'
  | 'Lua'
  | 'LyX'
  | 'MATLAB'
  | 'Magento'
  | 'Maven'
  | 'Mercurial'
  | 'Mercury'
  | 'MetaProgrammingSystem'
  | 'Metals'
  | 'MicrosoftOffice'
  | 'MiniProgram'
  | 'ModelSim'
  | 'Momentics'
  | 'MonoDevelop'
  | 'Nanoc'
  | 'NetBeans'
  | 'Nim'
  | 'Ninja'
  | 'Node'
  | 'NotepadPP'
  | 'OCaml'
  | 'Objective-C'
  | 'Octave'
  | 'Opa'
  | 'OpenCart'
  | 'OracleForms'
  | 'Otto'
  | 'PSoCCreator'
  | 'Packer'
  | 'Patch'
  | 'Perl'
  | 'Phalcon'
  | 'PlayFramework'
  | 'Plone'
  | 'Prestashop'
  | 'Processing'
  | 'PuTTY'
  | 'PureScript'
  | 'Python'
  | 'Qooxdoo'
  | 'Qt'
  | 'R'
  | 'ROS'
  | 'Rails'
  | 'Raku'
  | 'Redcar'
  | 'Redis'
  | 'RhodesRhomobile'
  | 'Ruby'
  | 'Rust'
  | 'SBT'
  | 'SCons'
  | 'SVN'
  | 'Sass'
  | 'Scala'
  | 'Scheme'
  | 'Scrivener'
  | 'Sdcc'
  | 'SeamGen'
  | 'SketchUp'
  | 'SlickEdit'
  | 'Smalltalk'
  | 'Stata'
  | 'Stella'
  | 'SublimeText'
  | 'SugarCRM'
  | 'Swift'
  | 'Symfony'
  | 'SymphonyCMS'
  | 'SynopsysVCS'
  | 'Tags'
  | 'TeX'
  | 'Terraform'
  | 'TextMate'
  | 'Textpattern'
  | 'TortoiseGit'
  | 'TurboGears2'
  | 'Typo3'
  | 'Umbraco'
  | 'Unity'
  | 'UnrealEngine'
  | 'VVVV'
  | 'Vagrant'
  | 'Vim'
  | 'VirtualEnv'
  | 'Virtuoso'
  | 'VisualStudio'
  | 'VisualStudioCode'
  | 'Waf'
  | 'WebMethods'
  | 'Windows'
  | 'WordPress'
  | 'Xcode'
  | 'XilinxISE'
  | 'Xojo'
  | 'Yeoman'
  | 'Yii'
  | 'ZendFramework'
  | 'Zephir'
  | 'macOS';
};

export type getV5GitignoreTemplatesParams = {
  /** 用户授权码 */
  access_token?: string;
};

export type getV5IssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned */
  filter?: 'assigned' | 'created' | 'all';
  /** Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open */
  state?: 'open' | 'progressing' | 'closed' | 'rejected' | 'all';
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at */
  sort?: 'created' | 'updated';
  /** 排序方式：升序 (asc)，降序 (desc)。默认：desc */
  direction?: 'asc' | 'desc';
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80 */
  schedule?: string;
  /** 计划截止日期，格式同上 */
  deadline?: string;
  /** 任务创建时间，格式同上 */
  created_at?: string;
  /** 任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上 */
  finished_at?: string;
};

export type getV5LicensesLicenseParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 协议名称 */
  license:
  | 'MulanPSL-2.0'
  | '0BSD'
  | 'AFL-3.0'
  | 'AGPL-3.0'
  | 'Apache-2.0'
  | 'Artistic-2.0'
  | 'BSD-2-Clause'
  | 'BSD-3-Clause'
  | 'BSD-3-Clause-Clear'
  | 'BSD-4-Clause'
  | 'BSL-1.0'
  | 'CC-BY-4.0'
  | 'CC-BY-SA-4.0'
  | 'CC0-1.0'
  | 'CECILL-2.1'
  | 'CERN-OHL-P-2.0'
  | 'CERN-OHL-S-2.0'
  | 'CERN-OHL-W-2.0'
  | 'ECL-2.0'
  | 'EPL-1.0'
  | 'EPL-2.0'
  | 'EUPL-1.1'
  | 'EUPL-1.2'
  | 'GFDL-1.3'
  | 'GPL-2.0'
  | 'GPL-3.0'
  | 'ISC'
  | 'LGPL-2.1'
  | 'LGPL-3.0'
  | 'LPPL-1.3c'
  | 'MIT'
  | 'MIT-0'
  | 'MPL-2.0'
  | 'MS-PL'
  | 'MS-RL'
  | 'MulanPSL-1.0'
  | 'MulanPubL-1.0'
  | 'MulanPubL-2.0'
  | 'NCSA'
  | 'ODbL-1.0'
  | 'OFL-1.1'
  | 'OSL-3.0'
  | 'PostgreSQL'
  | 'UPL-1.0'
  | 'Unlicense'
  | 'Vim'
  | 'WTFPL'
  | 'Zlib';
};

export type getV5LicensesLicenseRawParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 协议名称 */
  license:
  | 'MulanPSL-2.0'
  | '0BSD'
  | 'AFL-3.0'
  | 'AGPL-3.0'
  | 'Apache-2.0'
  | 'Artistic-2.0'
  | 'BSD-2-Clause'
  | 'BSD-3-Clause'
  | 'BSD-3-Clause-Clear'
  | 'BSD-4-Clause'
  | 'BSL-1.0'
  | 'CC-BY-4.0'
  | 'CC-BY-SA-4.0'
  | 'CC0-1.0'
  | 'CECILL-2.1'
  | 'CERN-OHL-P-2.0'
  | 'CERN-OHL-S-2.0'
  | 'CERN-OHL-W-2.0'
  | 'ECL-2.0'
  | 'EPL-1.0'
  | 'EPL-2.0'
  | 'EUPL-1.1'
  | 'EUPL-1.2'
  | 'GFDL-1.3'
  | 'GPL-2.0'
  | 'GPL-3.0'
  | 'ISC'
  | 'LGPL-2.1'
  | 'LGPL-3.0'
  | 'LPPL-1.3c'
  | 'MIT'
  | 'MIT-0'
  | 'MPL-2.0'
  | 'MS-PL'
  | 'MS-RL'
  | 'MulanPSL-1.0'
  | 'MulanPubL-1.0'
  | 'MulanPubL-2.0'
  | 'NCSA'
  | 'ODbL-1.0'
  | 'OFL-1.1'
  | 'OSL-3.0'
  | 'PostgreSQL'
  | 'UPL-1.0'
  | 'Unlicense'
  | 'Vim'
  | 'WTFPL'
  | 'Zlib';
};

export type getV5LicensesParams = {
  /** 用户授权码 */
  access_token?: string;
};

export type getV5NetworksOwnerRepoEventsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5NotificationsCountParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 是否只获取未读消息，默认：否 */
  unread?: boolean;
};

export type getV5NotificationsMessagesIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 私信的 ID */
  id: string;
};

export type getV5NotificationsMessagesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 是否只显示未读私信，默认：否 */
  unread?: boolean;
  /** 只获取在给定时间后更新的私信，要求时间格式为 ISO 8601 */
  since?: string;
  /** 只获取在给定时间前更新的私信，要求时间格式为 ISO 8601 */
  before?: string;
  /** 指定一组私信 ID，以 , 分隔 */
  ids?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5NotificationsThreadsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 通知的 ID */
  id: string;
};

export type getV5NotificationsThreadsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 是否只获取未读消息，默认：否 */
  unread?: boolean;
  /** 是否只获取自己直接参与的消息，默认：否 */
  participating?: boolean;
  /** 筛选指定类型的通知，all：所有，event：事件通知，referer：@ 通知 */
  type?: 'all' | 'event' | 'referer';
  /** 只获取在给定时间后更新的消息，要求时间格式为 ISO 8601 */
  since?: string;
  /** 只获取在给定时间前更新的消息，要求时间格式为 ISO 8601 */
  before?: string;
  /** 指定一组通知 ID，以 , 分隔 */
  ids?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5OrgsOrgEventsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5OrgsOrgFollowersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5OrgsOrgIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned */
  filter?: 'assigned' | 'created' | 'all';
  /** Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open */
  state?: 'open' | 'progressing' | 'closed' | 'rejected' | 'all';
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at */
  sort?: 'created' | 'updated';
  /** 排序方式：升序 (asc)，降序 (desc)。默认：desc */
  direction?: 'asc' | 'desc';
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80 */
  schedule?: string;
  /** 计划截止日期，格式同上 */
  deadline?: string;
  /** 任务创建时间，格式同上 */
  created_at?: string;
  /** 任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上 */
  finished_at?: string;
  /** 组织的路径 (path/login) */
  org: string;
};

export type getV5OrgsOrgMembershipsUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5OrgsOrgMembersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 根据角色筛选成员 */
  role?: 'all' | 'admin' | 'member';
};

export type getV5OrgsOrgParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
};

export type getV5OrgsOrgReposParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
  /** 筛选仓库的类型，可以是 all, public, private。默认：all */
  type?: 'all' | 'public' | 'private';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerIssuesNumberOperateLogsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo?: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  sort?: 'desc' | 'asc';
};

export type getV5ReposOwnerIssuesNumberPullRequestsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo?: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type getV5ReposOwnerRepoBaiduStatisticKeyParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoBlamePathParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径（1 MB 以内的文件文件） */
  path: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支（通常是 master） */
  ref?: string;
};

export type getV5ReposOwnerRepoBranchesBranchParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支名称 */
  branch: string;
};

export type getV5ReposOwnerRepoBranchesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 排序字段 */
  sort?: 'name' | 'updated';
  /** 排序方向 */
  direction?: 'asc' | 'desc';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoCheckRunsCheckRunIdAnnotationsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 检查项 ID */
  check_run_id: number;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoCheckRunsCheckRunIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 检查项 ID */
  check_run_id: number;
};

export type getV5ReposOwnerRepoCollaboratorsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoCollaboratorsUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5ReposOwnerRepoCollaboratorsUsernamePermissionParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5ReposOwnerRepoCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type getV5ReposOwnerRepoCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 排序顺序：asc(default),desc */
  order?: string;
};

export type getV5ReposOwnerRepoCommitsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 提交起始的 SHA 值或者分支名。默认：仓库的默认分支 */
  sha?: string;
  /** 包含该文件的提交 */
  path?: string;
  /** 提交作者的邮箱或个人空间地址 (username/login) */
  author?: string;
  /** 提交的起始时间，时间格式为 ISO 8601 */
  since?: string;
  /** 提交的最后时间，时间格式为 ISO 8601 */
  until?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoCommitsRefCheckRunsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 分支名\标签名\sha 值 */
  ref: string;
  /** 关联 pull request 的 ID */
  pull_request_id?: number;
  /** 检查项名称 */
  check_name?: string;
  /** 检查项状态 */
  status?: 'expected' | 'queued' | 'in_progress' | 'completed';
  /** 最新的\全部 */
  filter?: 'all' | 'latest';
};

export type getV5ReposOwnerRepoCommitsRefCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Commit 的 Reference */
  ref: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoCommitsShaParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 提交的 SHA 值或者分支名 */
  sha: string;
};

export type getV5ReposOwnerRepoContentsPathParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径 */
  path: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支 (通常是 master) */
  ref?: string;
};

export type getV5ReposOwnerRepoContributorsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 贡献者类型 */
  type?: 'authors' | 'committers';
};

export type getV5ReposOwnerRepoEventsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5ReposOwnerRepoForksParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 排序方式：fork 的时间 (newest, oldest)，star 的人数 (stargazers) */
  sort?: 'newest' | 'oldest' | 'stargazers';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoGitBlobsShaParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的 Blob SHA，可通过 [获取仓库具体路径下的内容] API 获取 */
  sha: string;
};

export type getV5ReposOwnerRepoGitGiteeMetricsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoGitTreesShaParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 可以是分支名 (如 master)、Commit 或者目录 Tree 的 SHA 值 */
  sha: string;
  /** 赋值为 1 递归获取目录 */
  recursive?: number;
};

export type getV5ReposOwnerRepoHooksIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Webhook 的 ID */
  id: number;
};

export type getV5ReposOwnerRepoHooksParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoIssuesCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type getV5ReposOwnerRepoIssuesCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Either created or updated. Default: created */
  sort?: 'created' | 'updated';
  /** Either asc or desc. Ignored without the sort parameter. */
  direction?: 'asc' | 'desc';
  /** Only comments updated at or after this time are returned.                                              This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoIssuesNumberCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
  /** Only comments updated at or after this time are returned.                                              This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 排序顺序：asc(default),desc */
  order?: string;
};

export type getV5ReposOwnerRepoIssuesNumberLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type getV5ReposOwnerRepoIssuesNumberParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type getV5ReposOwnerRepoIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open */
  state?: 'open' | 'progressing' | 'closed' | 'rejected' | 'all';
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at */
  sort?: 'created' | 'updated';
  /** 排序方式：升序 (asc)，降序 (desc)。默认：desc */
  direction?: 'asc' | 'desc';
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80 */
  schedule?: string;
  /** 计划截止日期，格式同上 */
  deadline?: string;
  /** 任务创建时间，格式同上 */
  created_at?: string;
  /** 任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上 */
  finished_at?: string;
  /** 根据里程碑标题。none 为没里程碑的，*为所有带里程碑的 */
  milestone?: string;
  /** 用户的 username。none 为没指派者，*为所有带有指派者的 */
  assignee?: string;
  /** 创建 Issues 的用户 username */
  creator?: string;
  /** 所属项目名称。none 为没有所属项目，*为所有带所属项目的 */
  program?: string;
};

export type getV5ReposOwnerRepoKeysAvailableParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoKeysIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 公钥 ID */
  id: number;
};

export type getV5ReposOwnerRepoKeysParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoLabelsNameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 标签名称 */
  name: string;
};

export type getV5ReposOwnerRepoLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoLicenseParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoMilestonesNumberParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 里程碑序号 (id) */
  number: number;
};

export type getV5ReposOwnerRepoMilestonesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 里程碑状态：open, closed, all。默认：open */
  state?: 'open' | 'closed' | 'all';
  /** 排序方式：due_on */
  sort?: 'due_on';
  /** 升序 (asc) 或是降序 (desc)。默认：asc */
  direction?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoNotificationsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 是否只获取未读消息，默认：否 */
  unread?: boolean;
  /** 是否只获取自己直接参与的消息，默认：否 */
  participating?: boolean;
  /** 筛选指定类型的通知，all：所有，event：事件通知，referer：@ 通知 */
  type?: 'all' | 'event' | 'referer';
  /** 只获取在给定时间后更新的消息，要求时间格式为 ISO 8601 */
  since?: string;
  /** 只获取在给定时间前更新的消息，要求时间格式为 ISO 8601 */
  before?: string;
  /** 指定一组通知 ID，以 , 分隔 */
  ids?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoPagesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoProjectLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoPullsCommentsIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  id: number;
};

export type getV5ReposOwnerRepoPullsNumberCommentsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 可选。升序/降序 */
  direction?: 'asc' | 'desc';
  /** 可选。筛选评论类型。代码行评论/pr 普通评论 */
  comment_type?: 'diff_comment' | 'pr_comment';
};

export type getV5ReposOwnerRepoPullsNumberCommitsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type getV5ReposOwnerRepoPullsNumberFilesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type getV5ReposOwnerRepoPullsNumberIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  number: number;
};

export type getV5ReposOwnerRepoPullsNumberLabelsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoPullsNumberMergeParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type getV5ReposOwnerRepoPullsNumberOperateLogsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  sort?: 'desc' | 'asc';
};

export type getV5ReposOwnerRepoPullsNumberParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type getV5ReposOwnerRepoPullsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 可选。Pull Request 状态 */
  state?: 'open' | 'closed' | 'merged' | 'all';
  /** 可选。Pull Request 提交的源分支。格式：branch 或者：username:branch */
  head?: string;
  /** 可选。Pull Request 提交目标分支的名称。 */
  base?: string;
  /** 可选。排序字段，默认按创建时间 */
  sort?: 'created' | 'updated' | 'popularity' | 'long-running';
  /** 可选。起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 可选。升序/降序 */
  direction?: 'asc' | 'desc';
  /** 可选。里程碑序号 (id) */
  milestone_number?: number;
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 可选。PR 创建者用户名 */
  author?: string;
  /** 可选。评审者用户名 */
  assignee?: string;
  /** 可选。测试者用户名 */
  tester?: string;
};

export type getV5ReposOwnerRepoPushConfigParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoRawPathParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径 */
  path: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支（通常是 master） */
  ref?: string;
};

export type getV5ReposOwnerRepoReadmeParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支 (通常是 master) */
  ref?: string;
};

export type getV5ReposOwnerRepoReleasesIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 发行版本的 ID */
  id: number;
};

export type getV5ReposOwnerRepoReleasesLatestParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5ReposOwnerRepoReleasesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 可选。升序/降序。不填为升序 */
  direction?: 'asc' | 'desc';
};

export type getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdDownloadParams =
  {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
    owner: string;
    /** 仓库路径 (path) */
    repo: string;
    /** 发行版本的 ID */
    release_id: number;
    /** 发行版本下的附件 ID */
    attach_file_id: number;
  };

export type getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdParams =
  {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
    owner: string;
    /** 仓库路径 (path) */
    repo: string;
    /** 发行版本的 ID */
    release_id: number;
    /** 发行版本下的附件 ID */
    attach_file_id: number;
  };

export type getV5ReposOwnerRepoReleasesReleaseIdAttachFilesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 发行版本的 ID */
  release_id: number;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 可选：升序/降序，默认为升序 */
  direction?: 'asc' | 'desc';
};

export type getV5ReposOwnerRepoReleasesTagsTagParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Tag 名称 */
  tag: string;
};

export type getV5ReposOwnerRepoStargazersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoSubscribersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoTagsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 排序字段 */
  sort?: 'name' | 'updated';
  /** 排序方向 */
  direction?: 'asc' | 'desc';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5ReposOwnerRepoTarballParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支 (通常是 master) */
  ref?: string;
};

export type getV5ReposOwnerRepoZipballParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支、tag 或 commit。默认：仓库的默认分支 (通常是 master) */
  ref?: string;
};

export type getV5SearchIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 搜索关键字 */
  q: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 筛选指定仓库 (path, e.g. oschina/git-osc) 的 issues */
  repo?: string;
  /** 筛选指定语言的 issues */
  language?:
  | 'Java'
  | 'JavaScript'
  | 'HTML'
  | 'CSS'
  | 'Python'
  | 'C'
  | 'Shell'
  | 'C++'
  | 'PHP'
  | 'TypeScript'
  | 'C#'
  | 'Go'
  | 'Objective-C'
  | 'Android'
  | 'Ruby'
  | 'Assembly'
  | 'Swift'
  | 'NodeJS'
  | 'Perl'
  | 'Dart'
  | 'Lua'
  | 'Matlab'
  | 'Rust'
  | 'PowerShell'
  | 'Scala'
  | 'Groovy'
  | 'XSLT'
  | 'Verilog'
  | 'R'
  | 'QML'
  | 'Docker'
  | 'Pascal'
  | 'CoffeeScript'
  | 'FORTRAN'
  | 'Erlang'
  | 'ActionScript'
  | 'Emacs Lisp'
  | 'Smalltalk'
  | 'Delphi'
  | 'VHDL'
  | 'TeX/LaTeX'
  | 'M'
  | 'ASP'
  | 'Visual Basic'
  | 'Clojure'
  | 'Common Lisp'
  | 'Haskell'
  | 'Awk'
  | 'LiveScript'
  | 'Scheme'
  | 'Elixir'
  | 'Julia'
  | 'OCaml'
  | 'Puppet'
  | 'AutoHotkey'
  | 'Ada'
  | 'D'
  | 'Standard ML'
  | 'Arduino'
  | 'Logos'
  | 'Prolog'
  | 'VimL'
  | 'Haxe'
  | 'ColdFusion'
  | 'Coq'
  | 'Vala'
  | 'Scilab'
  | 'Racket'
  | 'Slash'
  | 'Eiffel'
  | 'eC'
  | 'DOT'
  | 'Nemerle'
  | 'wechat'
  | 'Crystal'
  | 'Kotlin'
  | 'SQL'
  | 'Lisp'
  | 'XML'
  | 'C/C++'
  | 'HTML/CSS'
  | '易语言'
  | '汇编'
  | 'other'
  | 'Pawn'
  | 'Zephir'
  | 'YAML';
  /** 筛选指定标签的 issues */
  label?: string;
  /** 筛选指定状态的 issues, open(开启)、closed(完成)、rejected(拒绝) */
  state?: 'open' | 'progressing' | 'closed' | 'rejected';
  /** 筛选指定创建者 (username/login) 的 issues */
  author?: string;
  /** 筛选指定负责人 (username/login) 的 issues */
  assignee?: string;
  /** 排序字段，created_at(创建时间)、last_push_at(更新时间)、notes_count(评论数)，默认为最佳匹配 */
  sort?: 'created_at' | 'updated_at' | 'notes_count';
  /** 排序顺序：desc(default)、asc */
  order?: 'asc' | 'desc';
};

export type getV5SearchRepositoriesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 搜索关键字 */
  q: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 筛选指定空间地址 (企业、组织或个人的地址 path) 的仓库 */
  owner?: string;
  /** 是否搜索含 fork 的仓库，默认：否 */
  fork?: boolean;
  /** 筛选指定语言的仓库 */
  language?:
  | 'Java'
  | 'JavaScript'
  | 'HTML'
  | 'CSS'
  | 'Python'
  | 'C'
  | 'Shell'
  | 'C++'
  | 'PHP'
  | 'TypeScript'
  | 'C#'
  | 'Go'
  | 'Objective-C'
  | 'Android'
  | 'Ruby'
  | 'Assembly'
  | 'Swift'
  | 'NodeJS'
  | 'Perl'
  | 'Dart'
  | 'Lua'
  | 'Matlab'
  | 'Rust'
  | 'PowerShell'
  | 'Scala'
  | 'Groovy'
  | 'XSLT'
  | 'Verilog'
  | 'R'
  | 'QML'
  | 'Docker'
  | 'Pascal'
  | 'CoffeeScript'
  | 'FORTRAN'
  | 'Erlang'
  | 'ActionScript'
  | 'Emacs Lisp'
  | 'Smalltalk'
  | 'Delphi'
  | 'VHDL'
  | 'TeX/LaTeX'
  | 'M'
  | 'ASP'
  | 'Visual Basic'
  | 'Clojure'
  | 'Common Lisp'
  | 'Haskell'
  | 'Awk'
  | 'LiveScript'
  | 'Scheme'
  | 'Elixir'
  | 'Julia'
  | 'OCaml'
  | 'Puppet'
  | 'AutoHotkey'
  | 'Ada'
  | 'D'
  | 'Standard ML'
  | 'Arduino'
  | 'Logos'
  | 'Prolog'
  | 'VimL'
  | 'Haxe'
  | 'ColdFusion'
  | 'Coq'
  | 'Vala'
  | 'Scilab'
  | 'Racket'
  | 'Slash'
  | 'Eiffel'
  | 'eC'
  | 'DOT'
  | 'Nemerle'
  | 'wechat'
  | 'Crystal'
  | 'Kotlin'
  | 'SQL'
  | 'Lisp'
  | 'XML'
  | 'C/C++'
  | 'HTML/CSS'
  | '易语言'
  | '汇编'
  | 'other'
  | 'Pawn'
  | 'Zephir'
  | 'YAML';
  /** 排序字段，last_push_at(更新时间)、stars_count(收藏数)、forks_count(Fork 数)、watches_count(关注数)，默认为最佳匹配 */
  sort?: 'last_push_at' | 'stars_count' | 'forks_count' | 'watches_count';
  /** 排序顺序：desc(default)、asc */
  order?: 'asc' | 'desc';
};

export type getV5SearchUsersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 搜索关键字 */
  q: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 排序字段，joined_at(注册时间)，默认为最佳匹配 */
  sort?: 'joined_at';
  /** 排序顺序：desc(default)、asc */
  order?: 'asc' | 'desc';
};

export type getV5UserEnterprisesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 只列出授权用户管理的企业 */
  admin?: boolean;
};

export type getV5UserFollowersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserFollowingParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserFollowingUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5UserIssuesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 筛选参数：授权用户负责的 (assigned)，授权用户创建的 (created)，包含前两者的 (all)。默认：assigned */
  filter?: 'assigned' | 'created' | 'all';
  /** Issue 的状态：open（开启的）, progressing(进行中), closed（关闭的）, rejected（拒绝的）。默认：open */
  state?: 'open' | 'progressing' | 'closed' | 'rejected' | 'all';
  /** 用逗号分开的标签。如：bug,performance */
  labels?: string;
  /** 排序依据：创建时间 (created)，更新时间 (updated_at)。默认：created_at */
  sort?: 'created' | 'updated';
  /** 排序方式：升序 (asc)，降序 (desc)。默认：desc */
  direction?: 'asc' | 'desc';
  /** 起始的更新时间，要求时间格式为 ISO 8601 */
  since?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 计划开始日期，格式：20181006T173008+80-20181007T173008+80（区间），或者 -20181007T173008+80（小于 20181007T173008+80），或者 20181006T173008+80-（大于 20181006T173008+80），要求时间格式为 20181006T173008+80 */
  schedule?: string;
  /** 计划截止日期，格式同上 */
  deadline?: string;
  /** 任务创建时间，格式同上 */
  created_at?: string;
  /** 任务完成时间，即任务最后一次转为已完成状态的时间点。格式同上 */
  finished_at?: string;
};

export type getV5UserKeysIdParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 公钥 ID */
  id: number;
};

export type getV5UserKeysParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserMembershipsOrgsOrgParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 组织的路径 (path/login) */
  org: string;
};

export type getV5UserMembershipsOrgsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 根据成员是否已激活进行筛选资料，缺省返回所有资料 */
  active?: boolean;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserNamespaceParams = {
  /** 用户授权码 */
  access_token?: string;
  /** Namespace path */
  path: string;
};

export type getV5UserNamespacesParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 参与方式：project(所有参与仓库的 namepsce)、intrant(所加入的 namespace)、all(包含前两者)，默认 (intrant) */
  mode?: 'project' | 'intrant' | 'all';
};

export type getV5UserOrgsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
  /** 只列出授权用户管理的组织 */
  admin?: boolean;
};

export type getV5UserParams = {
  /** 用户授权码 */
  access_token?: string;
};

export type getV5UserReposParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 公开 (public)、私有 (private) 或者所有 (all)，默认：所有 (all) */
  visibility?: 'private' | 'public' | 'all';
  /** owner(授权用户拥有的仓库)、collaborator(授权用户为仓库成员)、organization_member(授权用户为仓库所在组织并有访问仓库权限)、enterprise_member(授权用户所在企业并有访问仓库权限)、admin(所有有权限的，包括所管理的组织中所有仓库、所管理的企业的所有仓库)。可以用逗号分隔符组合。如：owner, organization_member 或 owner, collaborator, organization_member */
  affiliation?: string;
  /** 筛选用户仓库：其创建 (owner)、个人 (personal)、其为成员 (member)、公开 (public)、私有 (private)，不能与 visibility 或 affiliation 参数一并使用，否则会报 422 错误 */
  type?: 'all' | 'owner' | 'personal' | 'member' | 'public' | 'private';
  /** 排序方式：创建时间 (created)，更新时间 (updated)，最后推送时间 (pushed)，仓库所属与名称 (full_name)。默认：full_name */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  /** 如果 sort 参数为 full_name，用升序 (asc)。否则降序 (desc) */
  direction?: 'asc' | 'desc';
  /** 搜索关键字 */
  q?: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserStarredOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5UserStarredParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间 */
  sort?: 'created' | 'last_push';
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  direction?: 'asc' | 'desc';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UserSubscriptionsOwnerRepoParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type getV5UserSubscriptionsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间 */
  sort?: 'created' | 'last_push';
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  direction?: 'asc' | 'desc';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameEventsOrgsOrgParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
  /** 组织的路径 (path/login) */
  org: string;
};

export type getV5UsersUsernameEventsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5UsersUsernameEventsPublicParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5UsersUsernameFollowersParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameFollowingParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameFollowingTargetUserParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 目标用户的用户名 (username/login) */
  target_user: string;
};

export type getV5UsersUsernameKeysParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameOrgsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
};

export type getV5UsersUsernameReceivedEventsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5UsersUsernameReceivedEventsPublicParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
};

export type getV5UsersUsernameReposParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 用户创建的仓库 (owner)，用户个人仓库 (personal)，用户为仓库成员 (member)，所有 (all)。默认：所有 (all) */
  type?: 'all' | 'owner' | 'personal' | 'member';
  /** 排序方式：创建时间 (created)，更新时间 (updated)，最后推送时间 (pushed)，仓库所属与名称 (full_name)。默认：full_name */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  /** 如果 sort 参数为 full_name，用升序 (asc)。否则降序 (desc) */
  direction?: 'asc' | 'desc';
  /** 当前的页码 */
  page?: number;
  /** 每页的数量，最大为 100 */
  per_page?: number;
};

export type getV5UsersUsernameStarredParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
  /** 根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间 */
  sort?: 'created' | 'last_push';
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  direction?: 'asc' | 'desc';
};

export type getV5UsersUsernameSubscriptionsParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 用户名 (username/login) */
  username: string;
  /** 滚动列表的最后一条记录的 id */
  prev_id?: number;
  /** 滚动列表每页的数量，最大为 100 */
  limit?: number;
  /** 根据仓库创建时间 (created) 或最后推送时间 (updated) 进行排序，默认：创建时间 */
  sort?: 'created' | 'last_push';
  /** 按递增 (asc) 或递减 (desc) 排序，默认：递减 */
  direction?: 'asc' | 'desc';
};

export type GiteeMetrics = {
  data?: string;
  total_score?: number;
  created_at?: string;
  repo?: ProjectBasic;
};

export type GitUser = {
  name?: string;
  email?: string;
  date?: string;
};

export type Group = {
  id?: number;
  login?: string;
  name?: string;
  url?: string;
  avatar_url?: string;
  repos_url?: string;
  events_url?: string;
  members_url?: string;
  description?: string;
  follow_count?: number;
};

export type GroupBasic = {
  id?: number;
  login?: string;
  name?: string;
  url?: string;
  avatar_url?: string;
};

export type GroupDetail = {
  id?: number;
  login?: string;
  name?: string;
  url?: string;
  avatar_url?: string;
  repos_url?: string;
  events_url?: string;
  members_url?: string;
  description?: string;
  follow_count?: number;
  type?: string;
  location?: string;
  email?: string;
  created_at?: string;
  html_url?: string;
  public?: boolean;
  enterprise?: string;
  members?: number;
  public_repos?: number;
  private_repos?: number;
  owner?: UserMini;
};

export type GroupFollowers = {
  self?: UserBasic;
  followed_at?: string;
};

export type GroupMember = {
  url?: string;
  active?: boolean;
  remark?: string;
  role?: string;
  organization_url?: string;
  organization?: Group;
  user?: UserMini;
};

export type HeadParams = {
  /** 用户授权码 */
  access_token?: string;
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 对比的起点。Commit SHA、分支名或标签名 */
  base: string;
  /** 对比的终点。Commit SHA、分支名或标签名 */
  head: string;
  /** 是否直对比。默认 false */
  straight?: boolean;
  /** 按照文件后缀过滤文件，如 `.txt`。只影响 `files` */
  suffix?: string;
};

export type Hook = {
  id?: number;
  url?: string;
  password?: string;
  result?: string;
  project_id?: number;
  result_code?: number;
  created_at?: string;
  push_events?: boolean;
  tag_push_events?: boolean;
  issues_events?: boolean;
  note_events?: boolean;
  merge_requests_events?: boolean;
};

export type Issue = {
  id?: number;
  url?: string;
  repository_url?: string;
  labels_url?: string;
  comments_url?: string;
  html_url?: string;
  parent_url?: string;
  /** 唯一标识 */
  number?: string;
  /** 上级 id */
  parent_id?: number;
  /** 所在层级 */
  depth?: number;
  /** 状态 */
  state?: string;
  /** 标题 */
  title?: string;
  /** 描述 */
  body?: string;
  /** 描述 html 格式 */
  body_html?: string;
  user?: UserBasic;
  /** 标签 */
  labels?: Label[];
  assignee?: UserBasic;
  /** 协作者 */
  collaborators?: UserBasic[];
  repository?: Project;
  milestone?: Milestone;
  /** 创建时间 */
  created_at?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 计划开始时间 */
  plan_started_at?: string;
  /** 结束时间 */
  deadline?: string;
  /** 完成时间 */
  finished_at?: string;
  /** 预计工期 */
  scheduled_time?: number;
  /** 评论数量 */
  comments?: number;
  /** 优先级 (0: 不指定 1: 不重要 2: 次要 3: 主要 4: 严重) */
  priority?: number;
  issue_type_detail?: IssueType;
  program?: ProgramBasic;
  /** 是否为私有 issue */
  security_hole?: boolean;
  issue_state_detail?: IssueState;
  /** 关联分支 */
  branch?: string;
};

export type IssueState = {
  /** 任务状态 ID */
  id?: number;
  /** 任务状态的名称 */
  title?: string;
  /** 任务状态的颜色 */
  color?: string;
  /** 任务状态的 Icon */
  icon?: string;
  /** 任务状态的 指令 */
  command?: string;
  /** 任务状态的 排序 */
  serial?: number;
  /** 任务状态创建时间 */
  created_at?: string;
  /** 任务状态更新时间 */
  updated_at?: string;
};

export type IssueType = {
  /** 任务类型 ID */
  id?: number;
  /** 任务类型的名称 */
  title?: string;
  /** 任务类型模板 */
  template?: string;
  /** 唯一标识符 */
  ident?: string;
  /** 颜色 */
  color?: string;
  /** 是否系统默认类型 */
  is_system?: boolean;
  /** 任务类型创建时间 */
  created_at?: string;
  /** 任务类型更新时间 */
  updated_at?: string;
};

export type Label = {
  id?: number;
  color?: string;
  name?: string;
  repository_id?: number;
  url?: string;
  created_at?: string;
  updated_at?: string;
};

export type Milestone = {
  url?: string;
  html_url?: string;
  number?: number;
  repository_id?: number;
  state?: string;
  title?: string;
  description?: string;
  updated_at?: string;
  created_at?: string;
  open_issues?: number;
  closed_issues?: number;
  due_on?: string;
};

export type Namespace = {
  /** namespace id */
  id?: number;
  /** namespace 类型，企业：Enterprise，组织：Group，用户：null */
  type?: string;
  /** namespace 名称 */
  name?: string;
  /** namespace 路径 */
  path?: string;
  /** namespace 地址 */
  html_url?: string;
  parent?: NamespaceMini;
};

export type NamespaceMini = {
  /** namespace id */
  id?: number;
  /** namespace 类型，企业：Enterprise，组织：Group，用户：null */
  type?: string;
  /** namespace 名称 */
  name?: string;
  /** namespace 路径 */
  path?: string;
  /** namespace 地址 */
  html_url?: string;
};

export type Note = {
  id?: number;
  body?: string;
  body_html?: string;
  user?: UserBasic;
  source?: string;
  target?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
  in_reply_to_id?: number;
  in_reply_to_user?: UserBasic;
};

export type OperateLog = {
  id?: number;
  icon?: string;
  user?: UserBasic;
  target?: string;
  content?: string;
  link_target?: Record<string, unknown>;
  created_at?: string;
  action_type?: string;
};

export type patchV5EnterprisesEnterpriseIssuesNumberParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type patchV5EnterprisesEnterpriseWeekReportIdParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 周报 ID */
  id: number;
};

export type patchV5GistsGistIdCommentsIdParams = {
  /** 代码片段的 ID */
  gist_id: string;
  /** 评论的 ID */
  id: number;
};

export type patchV5GistsIdParams = {
  /** 代码片段的 ID */
  id: string;
};

export type patchV5NotificationsMessagesIdParams = {
  /** 私信的 ID */
  id: string;
};

export type patchV5NotificationsThreadsIdParams = {
  /** 通知的 ID */
  id: string;
};

export type patchV5OrgsOrgParams = {
  /** 组织的路径 (path/login) */
  org: string;
};

export type patchV5ReposOwnerIssuesNumberParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type patchV5ReposOwnerRepoCheckRunsCheckRunIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 检查项 ID */
  check_run_id: number;
};

export type patchV5ReposOwnerRepoCommentsIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type patchV5ReposOwnerRepoHooksIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Webhook 的 ID */
  id: number;
};

export type patchV5ReposOwnerRepoIssuesCommentsIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type patchV5ReposOwnerRepoLabelsOriginalNameParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 标签原有名称 */
  original_name: string;
};

export type patchV5ReposOwnerRepoMilestonesNumberParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 里程碑序号 (id) */
  number: number;
};

export type patchV5ReposOwnerRepoParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type patchV5ReposOwnerRepoPullsCommentsIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 ID */
  id: number;
};

export type patchV5ReposOwnerRepoPullsNumberAssigneesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type patchV5ReposOwnerRepoPullsNumberParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type patchV5ReposOwnerRepoPullsNumberTestersParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type patchV5ReposOwnerRepoReleasesIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  id: number;
};

export type patchV5UserMembershipsOrgsOrgParams = {
  /** 组织的路径 (path/login) */
  org: string;
};

export type postV5EnterprisesEnterpriseMembersParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
};

export type postV5EnterprisesEnterpriseReposParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
};

export type postV5EnterprisesEnterpriseWeekReportParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
};

export type postV5EnterprisesEnterpriseWeekReportsIdCommentParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 周报 ID */
  id: number;
};

export type postV5GistsGistIdCommentsParams = {
  /** 代码片段的 ID */
  gist_id: string;
};

export type postV5GistsIdForksParams = {
  /** 代码片段的 ID */
  id: string;
};

export type postV5OrgsOrgReposParams = {
  /** 组织的路径 (path/login) */
  org: string;
};

export type postV5ReposOwnerIssuesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
};

export type postV5ReposOwnerRepoBaiduStatisticKeyParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoBranchesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoCheckRunsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoCommits = {
  /** 用户授权码 */
  access_token?: string;
  /** 变更的目标分支名。创建新分支时需提供 `start_branch` 参数 */
  branch: string;
  /** 提交信息 */
  message: string;
  actions: {
    action: string;
    path: string;
    previous_path?: string;
    content?: string;
    encoding?: string;
    last_commit_id?: string;
    execute_filemode?: boolean;
  }[];
  /** 分支起地点。新建分支时使用，更新分支时可选 */
  start_branch?: string;
  author?: { name?: string; email?: string };
};

export type postV5ReposOwnerRepoCommitsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoCommitsShaCommentsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 评论的 sha 值 */
  sha: string;
};

export type postV5ReposOwnerRepoContentsPathParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径 */
  path: string;
};

export type postV5ReposOwnerRepoForksParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoHooksIdTestsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Webhook 的 ID */
  id: number;
};

export type postV5ReposOwnerRepoHooksParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoIssuesNumberCommentsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type postV5ReposOwnerRepoIssuesNumberLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type postV5ReposOwnerRepoKeysParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoMilestonesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoOpenParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库 path */
  repo: string;
};

export type postV5ReposOwnerRepoPagesBuildsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoProjectLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoPullsNumberAssigneesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsNumberCommentsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsNumberLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsNumberReviewParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsNumberTestersParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsNumberTestParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type postV5ReposOwnerRepoPullsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoReleasesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoReleasesReleaseIdAttachFilesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 发行版本的 ID */
  release_id: number;
};

export type postV5ReposOwnerRepoTagsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type postV5ReposOwnerRepoTrafficDataParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type ProgramBasic = {
  /** 项目 id */
  id?: number;
  /** 项目名称 */
  name?: string;
  /** 项目描述 */
  description?: string;
  assignee?: UserBasic;
  author?: UserBasic;
};

export type Project = {
  id?: number;
  full_name?: string;
  human_name?: string;
  url?: string;
  namespace?: NamespaceMini;
  /** 仓库路径 */
  path?: string;
  /** 仓库名称 */
  name?: string;
  owner?: UserBasic;
  assigner?: UserBasic;
  /** 仓库描述 */
  description?: string;
  /** 是否私有 */
  private?: boolean;
  /** 是否公开 */
  public?: boolean;
  /** 是否内部开源 */
  internal?: boolean;
  /** 是否是 fork 仓库 */
  fork?: boolean;
  html_url?: string;
  ssh_url?: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  hooks_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  /** 是否是推荐仓库 */
  recommend?: boolean;
  /** 是否是 GVP 仓库 */
  gvp?: boolean;
  /** 主页 */
  homepage?: string;
  /** 语言 */
  language?: string;
  /** 仓库 fork 数量 */
  forks_count?: number;
  /** 仓库 star 数量 */
  stargazers_count?: number;
  /** 仓库 watch 数量 */
  watchers_count?: number;
  /** 默认分支 */
  default_branch?: string;
  /** 开启的 issue 数量 */
  open_issues_count?: number;
  /** 是否开启 issue 功能 */
  has_issues?: boolean;
  /** 是否开启 Wiki 功能 */
  has_wiki?: boolean;
  /** 是否允许用户对“关闭”状态的 Issue 进行评论 */
  issue_comment?: boolean;
  /** 是否允许用户对仓库进行评论 */
  can_comment?: boolean;
  /** 是否接受 Pull Request，协作开发 */
  pull_requests_enabled?: boolean;
  /** 是否开启了 Pages */
  has_page?: boolean;
  /** 开源许可 */
  license?: string;
  /** 仓库类型（内部/外包） */
  outsourced?: boolean;
  /** 仓库创建者的 username */
  project_creator?: string;
  /** 仓库成员的 username */
  members?: string[];
  /** 最近一次代码推送时间 */
  pushed_at?: string;
  created_at?: string;
  updated_at?: string;
  parent?: Project;
  paas?: string;
  /** 是否 star */
  stared?: boolean;
  /** 是否 watch */
  watched?: boolean;
  /** 操作权限 */
  permission?: unknown;
  /** 当前用户相对于仓库的角色 */
  relation?: string;
  /** 代码审查设置，审查人数 */
  assignees_number?: number;
  /** 代码审查设置，测试人数 */
  testers_number?: number;
  /** 代码审查设置，审查人员 */
  assignee?: UserBasic[];
  /** 代码审查设置，测试人员 */
  testers?: UserBasic[];
  /** 仓库状态 */
  status?: string;
  /** 仓库所属的项目 */
  programs?: ProgramBasic[];
  enterprise?: NamespaceMini;
  project_labels?: ProjectLabel[];
  /** Issue 模版来源 project: 使用仓库 Issue Template 作为模版；enterprise: 使用企业工作项作为模版 */
  issue_template_source?: string;
};

export type ProjectBasic = {
  id?: number;
  full_name?: string;
  human_name?: string;
  url?: string;
  namespace?: NamespaceMini;
  /** 仓库路径 */
  path?: string;
  /** 仓库名称 */
  name?: string;
  owner?: UserBasic;
  assigner?: UserBasic;
  /** 仓库描述 */
  description?: string;
  /** 是否私有 */
  private?: boolean;
  /** 是否公开 */
  public?: boolean;
  /** 是否内部开源 */
  internal?: boolean;
  /** 是否是 fork 仓库 */
  fork?: boolean;
  html_url?: string;
  ssh_url?: string;
};

export type ProjectLabel = {
  id?: number;
  name?: string;
  ident?: string;
};

export type ProjectMember = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  permissions?: string;
};

export type ProjectMemberPermission = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  permission?: string;
};

export type ProjectMini = {
  id?: number;
  full_name?: string;
  human_name?: string;
  url?: string;
  namespace?: NamespaceMini;
};

export type ProjectPushConfig = {
  restrict_push_own_commit?: boolean;
  restrict_author_email_suffix?: boolean;
  author_email_suffix?: string;
  restrict_commit_message?: boolean;
  commit_message_regex?: string;
  restrict_file_size?: boolean;
  max_file_size?: number;
  except_manager?: boolean;
};

export type ProjectStargazers = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  star_at?: string;
};

export type ProjectTrafficData = {
  /** 每天的访问量数据集 */
  counts?: ProjectTrafficDataDesc[];
  summary?: ProjectTrafficDataSummary;
};

export type ProjectTrafficDataDesc = {
  /** 日期，10 位日期时间戳 */
  bucket?: number;
  /** 浏览次数 */
  ip?: number;
  /** 拉取次数 */
  pull?: number;
  /** 推送次数 */
  push?: number;
  /** 每天的 ZIP 包下载次数 */
  download_zip?: number;
};

export type ProjectTrafficDataSummary = {
  /** 浏览次数 */
  ip?: number;
  /** 拉取次数 */
  pull?: number;
  /** 推送次数 */
  push?: number;
  /** 每天的 ZIP 包下载次数 */
  download_zip?: number;
};

export type ProjectWatchers = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  watch_at?: string;
};

export type ProtectionRule = {
  id?: number;
  project_id?: number;
  wildcard?: string;
  pushers?: Record<string, unknown>;
  mergers?: Record<string, unknown>;
  /** 检查项列表 */
  contexts?: string[];
  /** 是否严格检查 */
  strict?: boolean;
  /** 模式 standard: 标准模式，review: 评审模式 */
  mode?: string;
  /** 不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b'] */
  escapse_protect_branch_list?: unknown[];
};

export type PullRequest = {
  id?: number;
  url?: string;
  html_url?: string;
  diff_url?: string;
  patch_url?: string;
  issue_url?: string;
  commits_url?: string;
  review_comments_url?: string;
  review_comment_url?: string;
  comments_url?: string;
  number?: number;
  close_related_issue?: number;
  prune_branch?: boolean;
  state?: string;
  assignees_number?: number;
  testers_number?: number;
  assignees?: UserAssignee[];
  testers?: UserAssignee[];
  api_reviewers_number?: number;
  api_reviewers?: UserAssignee[];
  milestone?: Milestone;
  labels?: Label[];
  locked?: boolean;
  created_at?: string;
  updated_at?: string;
  closed_at?: string;
  draft?: boolean;
  merged_at?: string;
  mergeable?: boolean;
  can_merge_check?: boolean;
  _links?: string;
  user?: UserBasic;
  ref_pull_requests?: RefPullRequest[];
  title?: string;
  body?: string;
  body_html?: string;
  head?: string;
  base?: string;
};

export type PullRequestComments = {
  url?: string;
  id?: number;
  path?: string;
  position?: string;
  original_position?: string;
  new_line?: string;
  commit_id?: string;
  original_commit_id?: string;
  user?: UserBasic;
  created_at?: string;
  updated_at?: string;
  body?: string;
  html_url?: string;
  pull_request_url?: string;
  _links?: string;
  comment_type?: string;
  in_reply_to_id?: number;
};

export type PullRequestCommits = {
  url?: string;
  sha?: string;
  html_url?: string;
  comments_url?: string;
  commit?: string;
  author?: UserBasic;
  committer?: string;
  parents?: CommitParentsBasic;
};

export type PullRequestFiles = {
  sha?: string;
  filename?: string;
  status?: string;
  additions?: string;
  deletions?: string;
  blob_url?: string;
  raw_url?: string;
  patch?: string;
};

export type putV5EnterprisesEnterpriseMembersUsernameParams = {
  /** 企业的路径 (path/login) */
  enterprise: string;
  /** 用户名 (username/login) */
  username: string;
};

export type putV5GistsIdStarParams = {
  /** 代码片段的 ID */
  id: string;
};

export type putV5OrgsOrgMembershipsUsernameParams = {
  /** 组织的路径 (path/login) */
  org: string;
  /** 用户名 (username/login) */
  username: string;
};

export type putV5ReposOwnerRepoBranchesBranchProtectionParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支名称 */
  branch: string;
};

export type putV5ReposOwnerRepoBranchesSettingNewParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoBranchesWildcardSettingParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 分支/通配符 */
  wildcard: string;
};

export type putV5ReposOwnerRepoClearParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoCollaboratorsUsernameParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 用户名 (username/login) */
  username: string;
};

export type putV5ReposOwnerRepoContentsPathParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 文件的路径 */
  path: string;
};

export type putV5ReposOwnerRepoIssuesNumberLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** Issue 编号 (区分大小写，无需添加 # 号) */
  number: string;
};

export type putV5ReposOwnerRepoKeysEnableIdParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 公钥 ID */
  id: number;
};

export type putV5ReposOwnerRepoNotificationsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoPagesParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoProjectLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoPullsNumberLabelsParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type putV5ReposOwnerRepoPullsNumberMergeParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
  /** 第几个 PR，即本仓库 PR 的序数 */
  number: number;
};

export type putV5ReposOwnerRepoPushConfigParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5ReposOwnerRepoReviewerParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5UserFollowingUsernameParams = {
  /** 用户名 (username/login) */
  username: string;
};

export type putV5UserStarredOwnerRepoParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type putV5UserSubscriptionsOwnerRepoParams = {
  /** 仓库所属空间地址 (企业、组织或个人的地址 path) */
  owner: string;
  /** 仓库路径 (path) */
  repo: string;
};

export type RefPullRequest = {
  number?: string;
  title?: string;
  state?: string;
};

export type Release = {
  id?: number;
  tag_name?: string;
  target_commitish?: string;
  prerelease?: boolean;
  name?: string;
  body?: string;
  author?: UserBasic;
  created_at?: string;
  assets?: string[];
};

export type RepoCommit = {
  url?: string;
  sha?: string;
  html_url?: string;
  comments_url?: string;
  commit?: string;
  author?: UserBasic;
  committer?: UserBasic;
  parents?: string[];
};

export type RepoCommitWithFiles = {
  url?: string;
  sha?: string;
  html_url?: string;
  comments_url?: string;
  commit?: string;
  author?: UserBasic;
  committer?: UserBasic;
  parents?: string[];
  stats?: string;
  /** 文件列表 */
  files?: DiffFile[];
  /** 文件列表是否被截断 */
  truncated?: boolean;
};

export type SSHKey = {
  id?: number;
  key?: string;
  url?: string;
  title?: string;
  created_at?: string;
};

export type SSHKeyBasic = {
  id?: number;
  key?: string;
};

export type Tag = {
  name?: string;
  message?: string;
  commit?: string;
  tagger?: GitUser;
};

export type Tree = {
  sha?: string;
  url?: string;
  tree?: string[];
  truncated?: boolean;
};

export type User = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  blog?: string;
  weibo?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  stared?: number;
  watched?: number;
  created_at?: string;
  updated_at?: string;
};

export type UserAssignee = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  /** 是否默认指派审查 */
  assignee?: boolean;
  /** 是否 CodeOwner 指派审查 */
  code_owner?: boolean;
  /** 是否审查通过 */
  accept?: boolean;
};

export type UserBasic = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
};

export type UserDetail = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  blog?: string;
  weibo?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  stared?: number;
  watched?: number;
  created_at?: string;
  updated_at?: string;
  email?: string;
};

export type UserEmail = {
  email?: string;
  state?: string;
  scope?: string[];
};

export type UserInfo = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  member_role?: string;
  blog?: string;
  weibo?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  stared?: number;
  watched?: number;
  created_at?: string;
  updated_at?: string;
  company?: string;
  profession?: string;
  wechat?: string;
  qq?: string;
  linkedin?: string;
  email?: string;
};

export type UserMessage = {
  id?: number;
  sender?: UserBasic;
  unread?: boolean;
  content?: string;
  updated_at?: string;
  url?: string;
  html_url?: string;
};

export type UserMessageList = {
  total_count?: number;
  /** 私信列表 */
  list?: UserMessage[];
};

export type UserMini = {
  id?: number;
  login?: string;
  name?: string;
  avatar_url?: string;
  url?: string;
  html_url?: string;
  /** 企业备注名 */
  remark?: string;
};

export type UserNotification = {
  id?: number;
  content?: string;
  type?: string;
  unread?: boolean;
  mute?: boolean;
  updated_at?: string;
  url?: string;
  html_url?: string;
  actor?: UserBasic;
  repository?: ProjectBasic;
  subject?: UserNotificationSubject;
  /** 通知次级关联对象 */
  namespaces?: UserNotificationNamespace[];
};

export type UserNotificationCount = {
  /** 通知总数 */
  total_count?: number;
  /** 通知数量 */
  notification_count?: number;
  /** 私信数量 */
  message_count?: number;
};

export type UserNotificationList = {
  total_count?: number;
  /** 通知列表 */
  list?: UserNotification[];
};

export type UserNotificationNamespace = {
  name?: string;
  html_url?: string;
  type?: string;
};

export type UserNotificationSubject = {
  title?: string;
  url?: string;
  latest_comment_url?: string;
  type?: string;
};

export type WeekReport = {
  id?: number;
  content?: string;
  content_html?: string;
  year?: number;
  month?: number;
  week_index?: number;
  week_begin?: string;
  week_end?: string;
  /** 创建时间 */
  created_at?: string;
  /** 更新时间 */
  updated_at?: string;
  user?: UserMini;
};
