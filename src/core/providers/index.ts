import { WithRouter } from 'core/providers/with-router'
import { WithStore } from 'core/providers/with-store'
import { WithTheme } from 'core/providers/with-theme'
import compose from 'compose-function'

export const withProviders = compose(WithStore, WithTheme, WithRouter)
