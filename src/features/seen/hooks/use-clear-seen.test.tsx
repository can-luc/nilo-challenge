// import { renderHook, act } from '@testing-library/react'
// import { vi } from 'vitest'

// import * as useSeenModule from 'src/state/use-seen'

// const mockClearSeen = vi.fn()

// vi.spyOn(useSeenModule, 'useSeen').mockImplementation(() => ({
//   clearSeen: mockClearSeen,
// }))

// import { useClearSeenWithSkeleton } from './use-clear-seen'

// describe('useClearSeenWithSkeleton', () => {
//   beforeEach(() => {
//     mockClearSeen.mockClear()
//     vi.useFakeTimers()
//   })

//   afterEach(() => {
//     vi.useRealTimers()
//   })

//   it('calls clearSeen and toggles showSkeleton', () => {
//     const { result } = renderHook(() => useClearSeenWithSkeleton(500))

//     expect(result.current.showSkeleton).toBe(false)

//     act(() => {
//       result.current.handleClearSeen()
//     })

//     expect(mockClearSeen).toHaveBeenCalled()
//     expect(result.current.showSkeleton).toBe(true)

//     act(() => {
//       vi.advanceTimersByTime(500)
//     })

//     expect(result.current.showSkeleton).toBe(false)
//   })
// })
