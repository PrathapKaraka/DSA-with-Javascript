export interface SubModule {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  subModules: SubModule[];
}
