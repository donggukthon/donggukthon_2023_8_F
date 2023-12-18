export const trimBreakLine = (htmlString: string) =>
  htmlString.replace(/^(\s*<br\s*\/?\s*>\s*)*|(\s*<br\s*\/?\s*>\s*)*\s*$/g, '')
