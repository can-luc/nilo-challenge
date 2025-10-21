import React from 'react'

import { SearchInfo } from './search-info'

const ContainerSearchInfo: React.FC<any> = ({ search, pokemonsCount }) => {
  return (
    <div className="px-4 pt-6">
      <SearchInfo search={search} pokemonsCount={pokemonsCount} />
    </div>
  )
}

export default ContainerSearchInfo
