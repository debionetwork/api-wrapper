import { getSignedUrl } from "../../../../src/endpoint/cloud-storage"

describe('Cloud Storage API integration test', () => {
  let url
  let key
  let auth
  let filename = "filename"
  let action = "write"

  it('getSignedUrl endpoint should return', async () => {
    expect(typeof await getSignedUrl(url, key, auth, filename, action)).toBe("string")
  })
})