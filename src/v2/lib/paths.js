export const V2_PREFIX = '/v2'

export function toV2Path(path) {
  if (path.startsWith(V2_PREFIX)) return path
  return path === '/' ? V2_PREFIX : `${V2_PREFIX}${path}`
}

export function fromV2Path(path) {
  if (!path.startsWith(V2_PREFIX)) return path
  const stripped = path.slice(V2_PREFIX.length) || '/'
  return stripped.startsWith('/') ? stripped : `/${stripped}`
}

export function v2Href(path) {
  return `#${toV2Path(path)}`
}

export function isV2Path(path) {
  return path === V2_PREFIX || path.startsWith(`${V2_PREFIX}/`)
}
