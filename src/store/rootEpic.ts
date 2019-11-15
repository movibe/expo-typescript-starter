import { combineEpics } from 'redux-observable'
import { AppChangeLanguageEpic } from 'store/app/epic'

const epics = [AppChangeLanguageEpic]

export const rootEpic: any = combineEpics(...epics)
