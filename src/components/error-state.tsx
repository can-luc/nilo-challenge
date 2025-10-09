import Link from 'next/link'

import EyeEmptyIcon from 'src/components/icons/eye-empty'
import { Button } from 'src/components/ui/button'

interface ErrorStateProps {
  title?: string
  isEmpty?: boolean
}

export default function ErrorState({
  title = 'No Pokémon Seen Yet',
  isEmpty = false,
}: ErrorStateProps) {
  return (
    <>
      <div className="mx-auto flex w-full max-w-xs flex-col items-center overflow-hidden rounded-2xl bg-white p-6 shadow-lg">
        {/* icon eye closed */}
        <div className="mb-4 mt-2 flex items-center justify-center">
          <EyeEmptyIcon />
        </div>
        <span className="mb-2 text-center font-poppins text-lg font-bold text-primary">
          {title}
        </span>
        {isEmpty && (
          <div className="mb-6 text-center font-poppins text-base font-normal text-primary">
            You haven’t marked any Pokémon as seen yet. Start exploring and
            click the eye icon on Pokémon cards to track your discoveries!
          </div>
        )}

        <Link href="/">
          <Button color="primary" size="md">
            Explore Pokémon
          </Button>
        </Link>
      </div>
    </>
  )
}
