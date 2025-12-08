export interface ContentSection {
  heading?: string;
  content: string;
  codeExample?: string;
}

export interface SubModule {
  id: string;
  title: string;
  sections: ContentSection[];
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  subModules: SubModule[];
}
