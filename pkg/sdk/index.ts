import { Configuration, V0alpha2Api } from '@ory/client'

export default new V0alpha2Api(new Configuration({
  baseOptions: {
    withCredentials: true,
  }
}))
