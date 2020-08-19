import { INIT_CODE_HASH } from '../src/constants'

import { bytecode } from '../src/contracts_pair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.

//console.log(bytecode);

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])


console.log(COMPUTED_INIT_CODE_HASH);

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
