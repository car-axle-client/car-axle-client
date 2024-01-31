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
          name: string
          description: string
          handler: string // what it says down there
      }
    | {
          type: 'seperator'
      }
    | {
          type: 'block'
          handler: string // reference to a file in the attatchments folder
      }
    | {
          type: 'input'
          id: string
          handler: string // what it says up there
          placeholder?: string
      }

export type HandlerOutput = void | Pen[]

export type HandlerDefinition =
    | {
          type: 'block'
          id: string
          function: (content: Pen[]) => HandlerOutput
      }
    | {
          type: 'module'
          id: string
          onEnable?: () => HandlerOutput
          onDisable?: () => HandlerOutput
          autoReset?: boolean
      }
    | {
          type: 'input'
          id: string
          handler: (input: string, input_element: Pen) => HandlerOutput
      }
    | {
          type: 'dropdown'
          id: string
          handler: (input: string, input_element: Pen) => HandlerOutput
      }
