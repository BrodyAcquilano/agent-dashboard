import AppAdapter from './AppAdapter.jsx'
import {
  PagesAdapter,
  getPagesConfig,
} from './PagesAdapter.jsx'

export const GeneralEngine = {
  key: 'general',
  label: 'General',

  AppAdapter,
  PagesAdapter,
  getPagesConfig,

  allowed: {
    agentTypes: [],
    providers: [],
    roles: [],
    tasks: [],
    tools: [],
  },
}