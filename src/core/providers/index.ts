import { WithRouter } from 'core/providers/with-router'
import { WithTheme } from 'core/providers/with-theme'
import compose from 'compose-function'

export const withProviders = compose(WithTheme, WithRouter)
