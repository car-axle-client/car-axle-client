import { Pen } from './penexutils'

export type ContentList = {
    [key: string]: Content[]
}

export type Content =
    | {
          type: 'iframe'
          id: string
          src: string
          controls: boolean
      }
    | {
          type: 'module'
          path: string
      }
    | {
          type: 'seperator'
      }
    | {
          type: 'block'
          id: string
          handler: string // reference to a file in the attatchments folder
      }

export type HandlerOutput = void | Pen[]

export type HandlerDefinition = {
    name: string
    function: (content: Pen[]) => HandlerOutput
}
