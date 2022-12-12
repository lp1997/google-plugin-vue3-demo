// jsonstring type
export type jsonString = {
  [propName:string] : string
}

// page tabs type
export type pageTabs = {
  path: string,
  name: string,
  title: string,
  component: any
  isCom?: boolean,
}
