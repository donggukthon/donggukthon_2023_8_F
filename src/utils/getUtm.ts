import { getParam } from './getParam'

export type UtmType = 'utm_id' | 'utm_content' | 'utm_term' | 'utm_source' | 'utm_medium' | 'utm_campaign'

export const UTM_TYPES: UtmType[] = ['utm_campaign', 'utm_content', 'utm_id', 'utm_medium', 'utm_source', 'utm_term']

type GetUtm = (_?: UtmType[] | UtmType) => { [Property in UtmType]: string }

export const initialUtmMap = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
  utm_term: '',
  utm_id: '',
}

export const getUtm: GetUtm = (types = UTM_TYPES) => {
  return Array.isArray(types)
    ? types.reduce<{ [Property in UtmType]: string }>(
        (acc, curr) => ({
          ...acc,
          [curr]: getParam(curr),
        }),
        initialUtmMap
      )
    : { ...initialUtmMap, [types]: types }
}
