import type { GenerateServiceProps } from 'openapi-ts-request'

export default {
  schemaPath: 'https://gitee.com/api/v5/doc_json',
  serversPath: './src',
  requestImportStatement: `import request from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
request.defaults.baseURL = 'https://gitee.com/api';
request.defaults.adapter = createUniAppAxiosAdapter()
`
} as GenerateServiceProps
