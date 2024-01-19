import { IconJsonOptions } from './';

export class IconConfiguration {
  fonts?: object[];
  file?: string;
  folder?: string;
  folderExpanded?: string;
  folderNames?: Record<string, string>;
  folderNamesExpanded?: Record<string, string>;
  rootFolder?: string;
  rootFolderExpanded?: string;
  fileExtensions?: Record<string, string>;
  fileNames?: Record<string, string>;
  languageIds?: Record<string, string>;
  iconDefinitions?: Record<string, any>;
  light?: IconConfiguration;
  highContrast?: IconConfiguration;
  options?: IconJsonOptions;
  hidesExplorerArrows?: boolean;

  constructor() {
    const fontsConfiguration = [
      {
        id: 'jetbrains-mono-nerd-font',
        src: [
          {
            path: './../fonts/jetbrains-mono-nl-nerdfont-mono.woff',
            format: 'woff',
          },
        ],
        weight: 'normal',
        style: 'normal',
        size: '100%',
      },
      {
        id: 'fira-cod-nerd-font',
        src: [
          {
            path: './../fonts/fira-code-nerd-font-regular.woff',
            format: 'woff',
          },
        ],
        weight: 'normal',
        style: 'normal',
        size: '100%',
      },
    ];
    this.fonts = fontsConfiguration;
    this.iconDefinitions = {};
    this.folderNames = {};
    this.folderNamesExpanded = {};
    this.fileExtensions = {};
    this.fileNames = {};
    this.languageIds = {};
    this.light = {
      fileExtensions: {},
      fileNames: {},
    };
    this.highContrast = {
      fileExtensions: {},
      fileNames: {},
    };
    this.options = {};
  }
}
