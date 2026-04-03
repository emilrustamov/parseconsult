import { onBeforeUnmount, watch, type Ref } from 'vue'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(isActive: Ref<boolean>, rootRef: Ref<HTMLElement | null>): void {
  let previous: HTMLElement | null = null

  const onKeydown = (e: KeyboardEvent): void => {
    if (e.key !== 'Tab' || !rootRef.value || !isActive.value) {
      return
    }
    const root = rootRef.value
    const nodes = [...root.querySelectorAll<HTMLElement>(FOCUSABLE)]
    if (nodes.length === 0) {
      return
    }
    const first = nodes[0]!
    const last = nodes[nodes.length - 1]!
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else if (document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  watch(isActive, (open) => {
    if (open) {
      previous = document.activeElement as HTMLElement | null
      requestAnimationFrame(() => {
        const first = rootRef.value?.querySelector<HTMLElement>(FOCUSABLE)
        first?.focus()
      })
      document.addEventListener('keydown', onKeydown)
    } else {
      document.removeEventListener('keydown', onKeydown)
      previous?.focus?.()
      previous = null
    }
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeydown)
  })
}
