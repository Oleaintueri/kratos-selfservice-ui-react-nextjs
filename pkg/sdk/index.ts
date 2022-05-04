import { Configuration, V0alpha2Api } from '@ory/client'

export default new V0alpha2Api(new Configuration({
  basePath: process.env.NEXT_PUBLIC_ORY_SDK_URL,
  baseOptions: {
    withCredentials: true,
  }
}))
