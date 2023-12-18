export const isServer = typeof window === 'undefined'

export const isBrowser = !isServer

export const canUseDOM = Boolean(isBrowser && window.document && window.document.createElement)
