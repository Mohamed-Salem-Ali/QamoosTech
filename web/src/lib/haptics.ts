// A short vibration on phones that support it (Android; iOS Safari has no vibration API).
// Skipped for visitors who ask for reduced motion.
export function buzz(pattern: number | number[]) {
  try {
    if (typeof navigator.vibrate !== 'function') return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    navigator.vibrate(pattern)
  } catch {}
}
