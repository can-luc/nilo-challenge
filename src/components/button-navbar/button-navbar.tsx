import React, { memo } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import EyeNavbarIcon from 'src/components/icons/eye-navbar'
import { Button } from 'src/components/ui/button'

import { useSeenList } from 'src/state/use-seen-list'
const ButtonNavbar: React.FC = () => {
  const seenList = useSeenList()
  const countPokemons = seenList.length
  const pathname = usePathname()
  return (
    <div className="py-11 pr-2">
      {pathname !== '/seen' && (
        <Link href="/seen" className="text-link font-poppins text-sm">
          <Button color="primary" size="s">
            <EyeNavbarIcon />
            Seen ({countPokemons})
          </Button>
        </Link>
      )}
    </div>
  )
}
export default memo(ButtonNavbar)
