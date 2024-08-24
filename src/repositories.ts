/* eslint-disable */
// @ts-ignore
import request from 'axios';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter();

import * as API from './types';

/** 获取企业的所有仓库 获取企业的所有仓库 GET /v5/enterprises/${param0}/repos */
export async function getV5EnterprisesEnterpriseRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5EnterprisesEnterpriseReposParams,
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.Project[]>(`/v5/enterprises/${param0}/repos`, {
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
  });
}

/** 创建企业仓库 创建企业仓库 POST /v5/enterprises/${param0}/repos */
export async function postV5EnterprisesEnterpriseRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5EnterprisesEnterpriseReposParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库名称 */
    name: string;
    /** 仓库描述 */
    description?: string;
    /** 主页 (eg: https://gitee.com) */
    homepage?: string;
    /** 允许提 Issue 与否。默认：允许 (true) */
    has_issues?: boolean;
    /** 提供 Wiki 与否。默认：提供 (true) */
    has_wiki?: boolean;
    /** 允许用户对仓库进行评论。默认：允许 (true) */
    can_comment?: boolean;
    /** 值为 true 时则会用 README 初始化仓库。默认：不初始化 (false) */
    auto_init?: boolean;
    /** Git Ignore 模版 */
    gitignore_template?:
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
    /** License 模版 */
    license_template?:
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
    /** 仓库路径 */
    path?: string;
    /** 仓库开源类型。0(私有), 1(外部开源), 2(内部开源)。默认：0 */
    private?: 0 | 1 | 2;
    /** 值为 true 值为外包仓库，false 值为内部仓库。默认：内部仓库 (false) */
    outsourced?: boolean;
    /** 负责人的 username */
    project_creator?: string;
    /** 用逗号分开的仓库成员。如：member1,member2 */
    members?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { enterprise: param0, ...queryParams } = params;
  return request<API.Project>(`/v5/enterprises/${param0}/repos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取一个组织的仓库 获取一个组织的仓库 GET /v5/orgs/${param0}/repos */
export async function getV5OrgsOrgRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5OrgsOrgReposParams,
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.Project[]>(`/v5/orgs/${param0}/repos`, {
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
  });
}

/** 创建组织仓库 创建组织仓库 POST /v5/orgs/${param0}/repos */
export async function postV5OrgsOrgRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5OrgsOrgReposParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库名称 */
    name: string;
    /** 仓库描述 */
    description?: string;
    /** 主页 (eg: https://gitee.com) */
    homepage?: string;
    /** 允许提 Issue 与否。默认：允许 (true) */
    has_issues?: boolean;
    /** 提供 Wiki 与否。默认：提供 (true) */
    has_wiki?: boolean;
    /** 允许用户对仓库进行评论。默认：允许 (true) */
    can_comment?: boolean;
    /** 仓库开源类型。0(私有), 1(外部开源), 2(内部开源)，注：与 private 互斥，以 public 为主。 */
    public?: 0 | 1 | 2;
    /** 仓库公开或私有。默认：公开 (false)，注：与 public 互斥，以 public 为主。 */
    private?: boolean;
    /** 值为 true 时则会用 README 初始化仓库。默认：不初始化 (false) */
    auto_init?: boolean;
    /** Git Ignore 模版 */
    gitignore_template?:
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
    /** License 模版 */
    license_template?:
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
    /** 仓库路径 */
    path?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { org: param0, ...queryParams } = params;
  return request<API.Project>(`/v5/orgs/${param0}/repos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户的某个仓库 获取用户的某个仓库 GET /v5/repos/${param0}/${param1} */
export async function getV5ReposOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Project>(`/v5/repos/${param0}/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除一个仓库 删除一个仓库 DELETE /v5/repos/${param0}/${param1} */
export async function deleteV5ReposOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新仓库设置 更新仓库设置 PATCH /v5/repos/${param0}/${param1} */
export async function patchV5ReposOwnerRepo(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库名称 */
    name: string;
    /** 仓库描述 */
    description?: string;
    /** 主页 (eg: https://gitee.com) */
    homepage?: string;
    /** 允许提 Issue 与否。默认：允许 (true) */
    has_issues?: boolean;
    /** 提供 Wiki 与否。默认：提供 (true) */
    has_wiki?: boolean;
    /** 允许用户对仓库进行评论。默认：允许 (true) */
    can_comment?: boolean;
    /** 允许对“关闭”状态的 Issue 进行评论。默认：不允许 (false) */
    issue_comment?: boolean;
    /** 这个 Issue 涉及到安全/隐私问题，提交后不公开此 Issue（可见范围：仓库成员，企业成员） */
    security_hole_enabled?: boolean;
    /** 仓库公开或私有。 */
    private?: boolean;
    /** 更新仓库路径 */
    path?: string;
    /** 更新默认分支 */
    default_branch?: string;
    /** 接受 pull request，协作开发 */
    pull_requests_enabled?: boolean;
    /** 是否允许仓库文件在线编辑 */
    online_edit_enabled?: boolean;
    /** 是否接受轻量级 pull request */
    lightweight_pr_enabled?: boolean;
    /** 是否开启 merge 合并方式，默认为开启 */
    merge_enabled?: boolean;
    /** 是否开启 squash 合并方式，默认为开启 */
    squash_enabled?: boolean;
    /** 是否开启 rebase 合并方式，默认为开启 */
    rebase_enabled?: boolean;
    /** 选择默认合并 Pull Request 的方式，分别为 merge squash rebase */
    default_merge_method?: 'merge' | 'squash' | 'rebase';
    /** Issue 模版来源 project: 使用仓库 Issue Template 作为模版；enterprise: 使用企业工作项作为模版 */
    issue_template_source?: 'project' | 'enterprise';
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Project>(`/v5/repos/${param0}/${param1}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库的百度统计 key 获取仓库的百度统计 key GET /v5/repos/${param0}/${param1}/baidu_statistic_key */
export async function getV5ReposOwnerRepoBaiduStatisticKey(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoBaiduStatisticKeyParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/baidu_statistic_key`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 设置/更新仓库的百度统计 key 设置/更新仓库的百度统计 key POST /v5/repos/${param0}/${param1}/baidu_statistic_key */
export async function postV5ReposOwnerRepoBaiduStatisticKey(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoBaiduStatisticKeyParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 通过百度统计页面获取的 hm.js? 后面的 key */
    key?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/baidu_statistic_key`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除仓库的百度统计 key 删除仓库的百度统计 key DELETE /v5/repos/${param0}/${param1}/baidu_statistic_key */
export async function deleteV5ReposOwnerRepoBaiduStatisticKey(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoBaiduStatisticKeyParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/baidu_statistic_key`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Blame Blame GET /v5/repos/${param0}/${param1}/blame/${param2} */
export async function getV5ReposOwnerRepoBlamePath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoBlamePathParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<API.Blame[]>(`/v5/repos/${param0}/${param1}/blame/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取所有分支 获取所有分支 GET /v5/repos/${param0}/${param1}/branches */
export async function getV5ReposOwnerRepoBranches(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoBranchesParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Branch[]>(`/v5/repos/${param0}/${param1}/branches`, {
    method: 'GET',
    params: {
      // sort has a default value: name
      sort: 'name',
      // direction has a default value: asc
      direction: 'asc',
      // page has a default value: 1
      page: '1',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 创建分支 创建分支 POST /v5/repos/${param0}/${param1}/branches */
export async function postV5ReposOwnerRepoBranches(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoBranchesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 起点名称，默认：master */
    refs: string;
    /** 新创建的分支名称 */
    branch_name: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.CompleteBranch>(`/v5/repos/${param0}/${param1}/branches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取单个分支 获取单个分支 GET /v5/repos/${param0}/${param1}/branches/${param2} */
export async function getV5ReposOwnerRepoBranchesBranch(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoBranchesBranchParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    branch: param2,
    ...queryParams
  } = params;
  return request<API.CompleteBranch>(
    `/v5/repos/${param0}/${param1}/branches/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 设置分支保护 设置分支保护 PUT /v5/repos/${param0}/${param1}/branches/${param2}/protection */
export async function putV5ReposOwnerRepoBranchesBranchProtection(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoBranchesBranchProtectionParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    branch: param2,
    ...queryParams
  } = params;
  return request<API.CompleteBranch>(
    `/v5/repos/${param0}/${param1}/branches/${param2}/protection`,
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

/** 取消保护分支的设置 取消保护分支的设置 DELETE /v5/repos/${param0}/${param1}/branches/${param2}/protection */
export async function deleteV5ReposOwnerRepoBranchesBranchProtection(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoBranchesBranchProtectionParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    branch: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/branches/${param2}/protection`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新保护分支规则 更新保护分支规则 PUT /v5/repos/${param0}/${param1}/branches/${param2}/setting */
export async function putV5ReposOwnerRepoBranchesWildcardSetting(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoBranchesWildcardSettingParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 新分支/通配符 (为空不修改) */
    new_wildcard?: string;
    /** 可推送代码成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开） */
    pusher: string;
    /** 可合并 Pull Request 成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开） */
    merger: string;
    /** 模式。standard: 标准模式，review: 评审模式 */
    mode: 'standard' | 'review';
    /** 不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b'] */
    escapse_protect_branch_list?: string[];
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    wildcard: param2,
    ...queryParams
  } = params;
  return request<API.ProtectionRule>(
    `/v5/repos/${param0}/${param1}/branches/${param2}/setting`,
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

/** 删除保护分支规则 删除保护分支规则 DELETE /v5/repos/${param0}/${param1}/branches/${param2}/setting */
export async function deleteV5ReposOwnerRepoBranchesWildcardSetting(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoBranchesWildcardSettingParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    wildcard: param2,
    ...queryParams
  } = params;
  return request<API.ProtectionRule>(
    `/v5/repos/${param0}/${param1}/branches/${param2}/setting`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 新建保护分支规则 新建保护分支规则 PUT /v5/repos/${param0}/${param1}/branches/setting/new */
export async function putV5ReposOwnerRepoBranchesSettingNew(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoBranchesSettingNewParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 分支/通配符 */
    wildcard: string;
    /** 可推送代码成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开） */
    pusher: string;
    /** 可合并 Pull Request 成员。developer：仓库管理员和开发者；admin：仓库管理员；none：禁止任何人合并; 用户：个人的地址 path（多个用户用 ';' 隔开） */
    merger: string;
    /** 模式。standard: 标准模式，review: 评审模式 */
    mode: 'standard' | 'review';
    /** 不受规则影响的分支列表，以英文逗号分隔，形如：['a', 'b'] */
    escapse_protect_branch_list?: string[];
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProtectionRule>(
    `/v5/repos/${param0}/${param1}/branches/setting/new`,
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

/** 清空一个仓库 清空一个仓库 PUT /v5/repos/${param0}/${param1}/clear */
export async function putV5ReposOwnerRepoClear(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoClearParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/clear`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库的所有成员 获取仓库的所有成员 GET /v5/repos/${param0}/${param1}/collaborators */
export async function getV5ReposOwnerRepoCollaborators(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCollaboratorsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectMember[]>(
    `/v5/repos/${param0}/${param1}/collaborators`,
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

/** 判断用户是否为仓库成员 判断用户是否为仓库成员 GET /v5/repos/${param0}/${param1}/collaborators/${param2} */
export async function getV5ReposOwnerRepoCollaboratorsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCollaboratorsUsernameParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    username: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/collaborators/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 添加仓库成员或更新仓库成员权限 添加仓库成员或更新仓库成员权限 PUT /v5/repos/${param0}/${param1}/collaborators/${param2} */
export async function putV5ReposOwnerRepoCollaboratorsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoCollaboratorsUsernameParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 成员权限：拉代码 (pull)，推代码 (push)，管理员 (admin)。默认：push */
    permission: 'pull' | 'push' | 'admin';
  },
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    username: param2,
    ...queryParams
  } = params;
  return request<API.ProjectMember>(
    `/v5/repos/${param0}/${param1}/collaborators/${param2}`,
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

/** 移除仓库成员 移除仓库成员 DELETE /v5/repos/${param0}/${param1}/collaborators/${param2} */
export async function deleteV5ReposOwnerRepoCollaboratorsUsername(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoCollaboratorsUsernameParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    username: param2,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/collaborators/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 查看仓库成员的权限 查看仓库成员的权限 GET /v5/repos/${param0}/${param1}/collaborators/${param2}/permission */
export async function getV5ReposOwnerRepoCollaboratorsUsernamePermission(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCollaboratorsUsernamePermissionParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    username: param2,
    ...queryParams
  } = params;
  return request<API.ProjectMemberPermission>(
    `/v5/repos/${param0}/${param1}/collaborators/${param2}/permission`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取仓库的 Commit 评论 获取仓库的 Commit 评论 GET /v5/repos/${param0}/${param1}/comments */
export async function getV5ReposOwnerRepoComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Note[]>(`/v5/repos/${param0}/${param1}/comments`, {
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
  });
}

/** 获取仓库的某条 Commit 评论 获取仓库的某条 Commit 评论 GET /v5/repos/${param0}/${param1}/comments/${param2} */
export async function getV5ReposOwnerRepoCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Note>(`/v5/repos/${param0}/${param1}/comments/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除 Commit 评论 删除 Commit 评论 DELETE /v5/repos/${param0}/${param1}/comments/${param2} */
export async function deleteV5ReposOwnerRepoCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoCommentsIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/comments/${param2}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新 Commit 评论 更新 Commit 评论 PATCH /v5/repos/${param0}/${param1}/comments/${param2} */
export async function patchV5ReposOwnerRepoCommentsId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoCommentsIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 评论的内容 */
    body: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Note>(`/v5/repos/${param0}/${param1}/comments/${param2}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 仓库的所有提交 仓库的所有提交 GET /v5/repos/${param0}/${param1}/commits */
export async function getV5ReposOwnerRepoCommits(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommitsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.RepoCommit[]>(`/v5/repos/${param0}/${param1}/commits`, {
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

/** 提交多个文件变更 提交多个文件变更 POST /v5/repos/${param0}/${param1}/commits */
export async function postV5ReposOwnerRepoCommits(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoCommitsParams,
  body: API.postV5ReposOwnerRepoCommits,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.RepoCommitWithFiles>(
    `/v5/repos/${param0}/${param1}/commits`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    }
  );
}

/** 仓库的某个提交 仓库的某个提交 GET /v5/repos/${param0}/${param1}/commits/${param2} */
export async function getV5ReposOwnerRepoCommitsSha(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommitsShaParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, sha: param2, ...queryParams } = params;
  return request<API.RepoCommitWithFiles>(
    `/v5/repos/${param0}/${param1}/commits/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取单个 Commit 的评论 获取单个 Commit 的评论 GET /v5/repos/${param0}/${param1}/commits/${param2}/comments */
export async function getV5ReposOwnerRepoCommitsRefComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoCommitsRefCommentsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ref: param2, ...queryParams } = params;
  return request<API.Note[]>(
    `/v5/repos/${param0}/${param1}/commits/${param2}/comments`,
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

/** 创建 Commit 评论 创建 Commit 评论 POST /v5/repos/${param0}/${param1}/commits/${param2}/comments */
export async function postV5ReposOwnerRepoCommitsShaComments(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoCommitsShaCommentsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 评论的内容 */
    body: string;
    /** 文件的相对路径 */
    path?: string;
    /** Diff 的相对行数 */
    position?: number;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, sha: param2, ...queryParams } = params;
  return request<API.Note>(
    `/v5/repos/${param0}/${param1}/commits/${param2}/comments`,
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

/** Commits 对比 Commits 对比 返回的 commits 数量限制在 100 以内 GET /v5/repos/${param0}/${param1}/compare/${param2}...${param3} */
export async function getV5ReposOwnerRepoCompareBaseHead(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.HeadParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    base: param2,
    head: param3,
    ...queryParams
  } = params;
  return request<API.Compare>(
    `/v5/repos/${param0}/${param1}/compare/${param2}...${param3}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取仓库具体路径下的内容 获取仓库具体路径下的内容 GET /v5/repos/${param0}/${param1}/contents(/${param2}) */
export async function getV5ReposOwnerRepoContentsPath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoContentsPathParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<API.Content[]>(
    `/v5/repos/${param0}/${param1}/contents(/${param2})`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 更新文件 更新文件 PUT /v5/repos/${param0}/${param1}/contents/${param2} */
export async function putV5ReposOwnerRepoContentsPath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoContentsPathParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 文件内容，要用 base64 编码 */
    content: string;
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
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<API.CommitContent>(
    `/v5/repos/${param0}/${param1}/contents/${param2}`,
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

/** 新建文件 新建文件 POST /v5/repos/${param0}/${param1}/contents/${param2} */
export async function postV5ReposOwnerRepoContentsPath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoContentsPathParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 文件内容，要用 base64 编码 */
    content: string;
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
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<API.CommitContent>(
    `/v5/repos/${param0}/${param1}/contents/${param2}`,
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

/** 删除文件 删除文件 DELETE /v5/repos/${param0}/${param1}/contents/${param2} */
export async function deleteV5ReposOwnerRepoContentsPath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoContentsPathParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<API.CommitContent>(
    `/v5/repos/${param0}/${param1}/contents/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取仓库贡献者 获取仓库贡献者 GET /v5/repos/${param0}/${param1}/contributors */
export async function getV5ReposOwnerRepoContributors(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoContributorsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Contributor[]>(
    `/v5/repos/${param0}/${param1}/contributors`,
    {
      method: 'GET',
      params: {
        // type has a default value: committers
        type: 'committers',
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 查看仓库的 Forks 查看仓库的 Forks GET /v5/repos/${param0}/${param1}/forks */
export async function getV5ReposOwnerRepoForks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoForksParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Project[]>(`/v5/repos/${param0}/${param1}/forks`, {
    method: 'GET',
    params: {
      // sort has a default value: newest
      sort: 'newest',
      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Fork 一个仓库 Fork 一个仓库 POST /v5/repos/${param0}/${param1}/forks */
export async function postV5ReposOwnerRepoForks(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoForksParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 组织空间完整地址，不填写默认 Fork 到用户个人空间地址 */
    organization?: string;
    /** fork 后仓库名称。默认：源仓库名称 */
    name?: string;
    /** fork 后仓库地址。默认：源仓库地址 */
    path?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Project>(`/v5/repos/${param0}/${param1}/forks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库已部署的公钥 获取仓库已部署的公钥 GET /v5/repos/${param0}/${param1}/keys */
export async function getV5ReposOwnerRepoKeys(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoKeysParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.SSHKey[]>(`/v5/repos/${param0}/${param1}/keys`, {
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

/** 为仓库添加公钥 为仓库添加公钥 POST /v5/repos/${param0}/${param1}/keys */
export async function postV5ReposOwnerRepoKeys(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoKeysParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 公钥内容 */
    key: string;
    /** 公钥名称 */
    title: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.SSHKey>(`/v5/repos/${param0}/${param1}/keys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库的单个公钥 获取仓库的单个公钥 GET /v5/repos/${param0}/${param1}/keys/${param2} */
export async function getV5ReposOwnerRepoKeysId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoKeysIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.SSHKey>(`/v5/repos/${param0}/${param1}/keys/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 删除一个仓库公钥 删除一个仓库公钥 DELETE /v5/repos/${param0}/${param1}/keys/${param2} */
export async function deleteV5ReposOwnerRepoKeysId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoKeysIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/keys/${param2}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库可部署的公钥 获取仓库可部署的公钥 GET /v5/repos/${param0}/${param1}/keys/available */
export async function getV5ReposOwnerRepoKeysAvailable(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoKeysAvailableParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.SSHKeyBasic[]>(
    `/v5/repos/${param0}/${param1}/keys/available`,
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

/** 启用仓库公钥 启用仓库公钥 PUT /v5/repos/${param0}/${param1}/keys/enable/${param2} */
export async function putV5ReposOwnerRepoKeysEnableId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoKeysEnableIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/keys/enable/${param2}`,
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

/** 停用仓库公钥 停用仓库公钥 DELETE /v5/repos/${param0}/${param1}/keys/enable/${param2} */
export async function deleteV5ReposOwnerRepoKeysEnableId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoKeysEnableIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/keys/enable/${param2}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 开通 Gitee Go 开通 Gitee Go POST /v5/repos/${param0}/${param1}/open */
export async function postV5ReposOwnerRepoOpen(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoOpenParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/open`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取 Pages 信息 获取 Pages 信息 GET /v5/repos/${param0}/${param1}/pages */
export async function getV5ReposOwnerRepoPages(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPagesParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/pages`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 上传设置 Pages SSL 证书和域名 上传设置 Pages SSL 证书和域名 PUT /v5/repos/${param0}/${param1}/pages */
export async function putV5ReposOwnerRepoPages(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoPagesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 自定义域名 */
    domain: string;
    /** 证书文件内容（需进行 BASE64 编码） */
    ssl_certificate_crt?: string;
    /** 私钥文件内容（需进行 BASE64 编码） */
    ssl_certificate_key?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/pages`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 请求建立 Pages 请求建立 Pages POST /v5/repos/${param0}/${param1}/pages/builds */
export async function postV5ReposOwnerRepoPagesBuilds(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoPagesBuildsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/pages/builds`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库推送规则设置 获取仓库推送规则设置 GET /v5/repos/${param0}/${param1}/push_config */
export async function getV5ReposOwnerRepoPushConfig(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoPushConfigParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectPushConfig>(
    `/v5/repos/${param0}/${param1}/push_config`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 修改仓库推送规则设置 修改仓库推送规则设置 PUT /v5/repos/${param0}/${param1}/push_config */
export async function putV5ReposOwnerRepoPushConfig(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoPushConfigParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 启用只能推送自己的提交（所推送提交中的邮箱必须与推送者所设置的提交邮箱一致） */
    restrict_push_own_commit?: boolean;
    /** 启用只允许指定邮箱域名后缀的提交 */
    restrict_author_email_suffix?: boolean;
    /** 指定邮箱域名的后缀 */
    author_email_suffix?: string;
    /** 启用提交信息正则表达式校验 */
    restrict_commit_message?: boolean;
    /** 用于验证提交信息的正则表达式 */
    commit_message_regex?: string;
    /** 启用限制单文件大小 */
    restrict_file_size?: boolean;
    /** 限制单文件大小（MB） */
    max_file_size?: number;
    /** 仓库管理员不受上述规则限制 */
    except_manager?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectPushConfig>(
    `/v5/repos/${param0}/${param1}/push_config`,
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

/** 获取 raw 文件（100MB 以内）获取 raw 文件（100MB 以内）GET /v5/repos/${param0}/${param1}/raw/${param2} */
export async function getV5ReposOwnerRepoRawPath(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoRawPathParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, path: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/raw/${param2}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库 README 获取仓库 README GET /v5/repos/${param0}/${param1}/readme */
export async function getV5ReposOwnerRepoReadme(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReadmeParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Content>(`/v5/repos/${param0}/${param1}/readme`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取仓库的所有 Releases 获取仓库的所有 Releases GET /v5/repos/${param0}/${param1}/releases */
export async function getV5ReposOwnerRepoReleases(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Release[]>(`/v5/repos/${param0}/${param1}/releases`, {
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

/** 创建仓库 Release 创建仓库 Release POST /v5/repos/${param0}/${param1}/releases */
export async function postV5ReposOwnerRepoReleases(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoReleasesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Tag 名称，提倡以 v 字母为前缀做为 Release 名称，例如 v1.0 或者 v2.3.4 */
    tag_name: string;
    /** Release 名称 */
    name: string;
    /** Release 描述 */
    body: string;
    /** 是否为预览版本。默认：false（非预览版本） */
    prerelease?: boolean;
    /** 分支名称或者 commit SHA, 默认是当前默认分支 */
    target_commitish: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Release>(`/v5/repos/${param0}/${param1}/releases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取仓库的单个 Releases 获取仓库的单个 Releases GET /v5/repos/${param0}/${param1}/releases/${param2} */
export async function getV5ReposOwnerRepoReleasesId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Release>(
    `/v5/repos/${param0}/${param1}/releases/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除仓库 Release 删除仓库 Release DELETE /v5/repos/${param0}/${param1}/releases/${param2} */
export async function deleteV5ReposOwnerRepoReleasesId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoReleasesIdParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/releases/${param2}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 更新仓库 Release 更新仓库 Release PATCH /v5/repos/${param0}/${param1}/releases/${param2} */
export async function patchV5ReposOwnerRepoReleasesId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.patchV5ReposOwnerRepoReleasesIdParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** Tag 名称，提倡以 v 字母为前缀做为 Release 名称，例如 v1.0 或者 v2.3.4 */
    tag_name: string;
    /** Release 名称 */
    name: string;
    /** Release 描述 */
    body: string;
    /** 是否为预览版本。默认：false（非预览版本） */
    prerelease?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, id: param2, ...queryParams } = params;
  return request<API.Release>(
    `/v5/repos/${param0}/${param1}/releases/${param2}`,
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

/** 获取仓库下的指定 Release 的所有附件 获取仓库下的指定 Release 的所有附件 GET /v5/repos/${param0}/${param1}/releases/${param2}/attach_files */
export async function getV5ReposOwnerRepoReleasesReleaseIdAttachFiles(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesReleaseIdAttachFilesParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    release_id: param2,
    ...queryParams
  } = params;
  return request<API.AttachFile[]>(
    `/v5/repos/${param0}/${param1}/releases/${param2}/attach_files`,
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

/** 上传附件到仓库指定 Release 上传附件到仓库指定 Release POST /v5/repos/${param0}/${param1}/releases/${param2}/attach_files */
export async function postV5ReposOwnerRepoReleasesReleaseIdAttachFiles(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoReleasesReleaseIdAttachFilesParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
  },
  file?: File,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    release_id: param2,
    ...queryParams
  } = params;
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as { [key: string]: any })[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.AttachFile>(
    `/v5/repos/${param0}/${param1}/releases/${param2}/attach_files`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    }
  );
}

/** 获取仓库下指定 Release 的单个附件 获取仓库下指定 Release 的单个附件 GET /v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3} */
export async function getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    release_id: param2,
    attach_file_id: param3,
    ...queryParams
  } = params;
  return request<API.AttachFile>(
    `/v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 删除仓库下指定 Release 的指定附件 删除仓库下指定 Release 的指定附件 DELETE /v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3} */
export async function deleteV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileId(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.deleteV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    release_id: param2,
    attach_file_id: param3,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3}`,
    {
      method: 'DELETE',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 下载指定 Release 的单个附件 下载指定 Release 的单个附件 GET /v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3}/download */
export async function getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdDownload(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesReleaseIdAttachFilesAttachFileIdDownloadParams,
  options?: { [key: string]: unknown }
) {
  const {
    owner: param0,
    repo: param1,
    release_id: param2,
    attach_file_id: param3,
    ...queryParams
  } = params;
  return request<unknown>(
    `/v5/repos/${param0}/${param1}/releases/${param2}/attach_files/${param3}/download`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 获取仓库的最后更新的 Release 获取仓库的最后更新的 Release GET /v5/repos/${param0}/${param1}/releases/latest */
export async function getV5ReposOwnerRepoReleasesLatest(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesLatestParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Release>(`/v5/repos/${param0}/${param1}/releases/latest`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 根据 Tag 名称获取仓库的 Release 根据 Tag 名称获取仓库的 Release GET /v5/repos/${param0}/${param1}/releases/tags/${param2} */
export async function getV5ReposOwnerRepoReleasesTagsTag(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoReleasesTagsTagParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, tag: param2, ...queryParams } = params;
  return request<API.Release>(
    `/v5/repos/${param0}/${param1}/releases/tags/${param2}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 修改代码审查设置 修改代码审查设置 PUT /v5/repos/${param0}/${param1}/reviewer */
export async function putV5ReposOwnerRepoReviewer(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.putV5ReposOwnerRepoReviewerParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 审查人员 username，可多个，半角逗号分隔，如：(username1,username2) */
    assignees: string;
    /** 测试人员 username，可多个，半角逗号分隔，如：(username1,username2) */
    testers: string;
    /** 最少审查人数 */
    assignees_number: number;
    /** 最少测试人数 */
    testers_number: number;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Project>(`/v5/repos/${param0}/${param1}/reviewer`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 列出仓库所有的 tags 列出仓库所有的 tags GET /v5/repos/${param0}/${param1}/tags */
export async function getV5ReposOwnerRepoTags(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoTagsParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Tag[]>(`/v5/repos/${param0}/${param1}/tags`, {
    method: 'GET',
    params: {
      // sort has a default value: name
      sort: 'name',
      // direction has a default value: asc
      direction: 'asc',
      // page has a default value: 1
      page: '1',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 创建一个仓库的 Tag 创建一个仓库的 Tag POST /v5/repos/${param0}/${param1}/tags */
export async function postV5ReposOwnerRepoTags(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoTagsParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 起点名称，默认：master */
    refs: string;
    /** 新创建的标签名称 */
    tag_name: string;
    /** Tag 描述，默认为空 */
    tag_message?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.Tag>(`/v5/repos/${param0}/${param1}/tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 下载仓库 tar.gz 下载仓库 tar.gz GET /v5/repos/${param0}/${param1}/tarball */
export async function getV5ReposOwnerRepoTarball(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoTarballParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/tarball`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取最近 30 天的七日以内访问量 获取最近 30 天的七日以内访问量 POST /v5/repos/${param0}/${param1}/traffic-data */
export async function postV5ReposOwnerRepoTrafficData(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.postV5ReposOwnerRepoTrafficDataParams,
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 访问量的开始时间，默认今天，格式：yyyy-MM-dd */
    start_day?: string;
    /** 访问量的结束时间，默认七天前，格式：yyyy-MM-dd */
    end_day?: string;
  },
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<API.ProjectTrafficData>(
    `/v5/repos/${param0}/${param1}/traffic-data`,
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

/** 下载仓库 zip 下载仓库 zip GET /v5/repos/${param0}/${param1}/zipball */
export async function getV5ReposOwnerRepoZipball(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5ReposOwnerRepoZipballParams,
  options?: { [key: string]: unknown }
) {
  const { owner: param0, repo: param1, ...queryParams } = params;
  return request<unknown>(`/v5/repos/${param0}/${param1}/zipball`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 列出授权用户的所有仓库 列出授权用户的所有仓库 GET /v5/user/repos */
export async function getV5UserRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UserReposParams,
  options?: { [key: string]: unknown }
) {
  return request<API.Project[]>('/v5/user/repos', {
    method: 'GET',
    params: {
      // sort has a default value: full_name
      sort: 'full_name',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建一个仓库 创建一个仓库 POST /v5/user/repos */
export async function postV5UserRepos(
  body: {
    /** 用户授权码 */
    access_token?: string;
    /** 仓库名称 */
    name: string;
    /** 仓库描述 */
    description?: string;
    /** 主页 (eg: https://gitee.com) */
    homepage?: string;
    /** 允许提 Issue 与否。默认：允许 (true) */
    has_issues?: boolean;
    /** 提供 Wiki 与否。默认：提供 (true) */
    has_wiki?: boolean;
    /** 允许用户对仓库进行评论。默认：允许 (true) */
    can_comment?: boolean;
    /** 值为 true 时则会用 README 初始化仓库。默认：不初始化 (false) */
    auto_init?: boolean;
    /** Git Ignore 模版 */
    gitignore_template?:
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
    /** License 模版 */
    license_template?:
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
    /** 仓库路径 */
    path?: string;
    /** 目前仅支持私有 */
    private?: boolean;
  },
  options?: { [key: string]: unknown }
) {
  return request<API.Project>('/v5/user/repos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取某个用户的公开仓库 获取某个用户的公开仓库 GET /v5/users/${param0}/repos */
export async function getV5UsersUsernameRepos(
  // 叠加生成的 Param 类型 (非 body 参数 openapi 默认没有生成对象)
  params: API.getV5UsersUsernameReposParams,
  options?: { [key: string]: unknown }
) {
  const { username: param0, ...queryParams } = params;
  return request<API.Project[]>(`/v5/users/${param0}/repos`, {
    method: 'GET',
    params: {
      // type has a default value: all
      type: 'all',
      // sort has a default value: full_name
      sort: 'full_name',

      // page has a default value: 1
      page: '1',
      // per_page has a default value: 20
      per_page: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}
