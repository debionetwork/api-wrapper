import { DataStaking } from "../../../../src/models/bounty"
import { createSyncEvent } from '../../../../src/endpoint/bounty'
import { dataBountyMock } from "./data-bounty-mock"

describe('Data Bounty API integration test', () => {

  let url
  let key
  let auth
  let dataStaking: DataStaking;
  
  it('createSyncEvent endpoint should return', async () => {

    const dataStakingPromise: Promise<DataStaking> = new Promise((res, rej) => {
      createSyncEvent(url, key, auth, dataBountyMock)
    })

    dataStaking = await dataStakingPromise
    expect(dataStaking.order_id).toEqual(dataBountyMock.order_id)
    expect(dataStaking.service_category_id).toEqual(dataBountyMock.service_category_id)
    expect(dataStaking.filename).toEqual(dataBountyMock.filename)

  })
})