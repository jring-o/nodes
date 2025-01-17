export interface ResearchObject {
    version: number | string;
}

export interface ResearchObjectPreviewResult {
    title: string;
    abstract: string;
    doi: string;
    pdf: string;
    publishedDate: Date;
    blob: string;
}

export interface IpldUrl {
    ['/']: string;
}

export interface ResearchObjectV1 extends ResearchObject {
  version: "desci-nodes-0.1.0" | 1;
  title?: string;
  defaultLicense?: string;
  image?: string | IpldUrl;
  components: ResearchObjectV1Component[];
  contributors: ResearchObjectV1Contributor[];
  validations?: ResearchObjectV1Validation[];
  attributes?: ResearchObjectV1Attributes[];
  history?: ResearchObjectV1History[];
  tags?: ResearchObjectV1Tags[];
  organizations?: ResearchObjectV1Organization[];
  dpid?: ResearchObjectV1Dpid;
  researchFields?: string[];
}

export interface ResearchObjectV1Dpid {
    prefix: string;
    id: string;
}

export interface ResearchObjectV1Organization {
    name: string;
    subtext: string;
    url: string;
}
export interface ResearchObjectV1Tags {
    name: string;
}

export interface ResearchObjectV1Component {
    id: string;
    name: string;
    type: ResearchObjectComponentType;
    icon?: any;
    payload: any;
    primary?: boolean;
}

export interface ResearchObjectAuthor {
    id: string;
    name: string;
    orcid?: string;
    github?: string;
    twitter?: string;
    holonym?: string;
}

export interface ResearchObjectV1History {
    title: string;
    author: ResearchObjectAuthor;
    content: string;
    date?: number; // utc seconds
    transaction?: ResearchObjectTransaction;
}

export interface ResearchObjectTransaction {
    id: string;
    chainId?: string;
}

export enum ResearchObjectValidationType {
    GRANT = 'grant',
    REVIEW = 'review',
    CONFERENCE = 'conference',
    AUDIT = 'audit',
    CERTIFICATION = 'certification',
    CERTIFICATION_ARC = 'certification-arc',
}
export interface ResearchObjectValidationDeposit {
    token: string;
    address: string;
    amount: string;
}

export interface ResearchObjectV1Validation {
    type: ResearchObjectValidationType;
    title: string;
    subtitle: string;
    transactionId?: string;
    contractAddress?: string;
    tokenId?: string;
    url?: string;
    deposits?: ResearchObjectValidationDeposit[];
}

export interface ResearchObjectV1Contributor {
    title: string;
    author: ResearchObjectAuthor;
}

export enum ResearchObjectAttributeKey {
    ACM_AVAILABLE = 'available',
    ACM_FUNCTIONAL = 'functional',
    ACM_REUSABLE = 'reusable',
    ACM_REPRODUCED = 'reproduced',
    ACM_REPLICATED = 'replicated',
}

export interface ResearchObjectV1Attributes {
    key: ResearchObjectAttributeKey;
    value: boolean;
}

export enum ResearchObjectComponentType {
    PDF = 'pdf',
    CODE = 'code',
    VIDEO = 'video',
    TERMINAL = 'terminal', // not used, TODO: remove
    DATA = 'data',
    LINK = 'link', // external link
}

export enum ResearchObjectComponentDocumentSubtype {
    RESEARCH_ARTICLE = 'research-article',
    PREREGISTERED_REPORT = 'preregistered-report',
    PREREGISTERED_ANALYSIS_PLAN = 'preregistered-analysis-plan',
    SUPPLEMENTARY_INFORMATION = 'supplementary-information',
    PRESENTATION_DECK = 'presentation-deck',
    OTHER = 'other',
}

export enum ResearchObjectComponentLinkSubtype {
    COMMUNITY_DISCUSSION = 'community-discussion',
    VIDEO_RESOURCE = 'video-resource',
    EXTERNAL_API = 'external-api',
    RESTRICTED_DATA = 'restricted',
    PRESENTATION_DECK = 'presentation-deck',
    OTHER = 'other',
}

export type ResearchObjectComponentSubtypes =
    | ResearchObjectComponentDocumentSubtype
    | ResearchObjectComponentLinkSubtype;

export interface CommonComponentPayload {
    title?: string;
    keywords?: string[];
    description?: string;
    licenseType?: string;
}

export interface PdfComponentPayload {
    url: string;
    annotations?: ResearchObjectComponentAnnotation[];
}

export interface ExternalLinkComponentPayload {
    url: string;
    archives?: ExternalLinkArchive[];
}

export interface ExternalLinkArchive {
    url: string | IpldUrl;
    accessDate: number; // utc seconds
}

export type Path = string;

export interface DataComponentMetadata extends CommonComponentPayload {
    ontologyPurl?: string;
    controlledVocabTerms?: string[];
}
export interface DataComponentPayload {
    cid: string;
    subMetadata: Record<Path, DataComponentMetadata>;
}

export interface PdfComponent extends ResearchObjectV1Component {
    type: ResearchObjectComponentType.PDF;
    subtype?: ResearchObjectComponentDocumentSubtype;
    payload: PdfComponentPayload & CommonComponentPayload;
}

export interface ExternalLinkComponent extends ResearchObjectV1Component {
    type: ResearchObjectComponentType.LINK;
    subtype?: ResearchObjectComponentLinkSubtype;
    payload: ExternalLinkComponentPayload & CommonComponentPayload;
}

export interface DataComponent extends ResearchObjectV1Component {
    type: ResearchObjectComponentType.DATA;
    payload: DataComponentPayload & DataComponentMetadata;
}

export interface CodeComponent extends ResearchObjectV1Component {
    type: ResearchObjectComponentType.CODE;
    payload: {
        language?: string;
        code?: string;
        url?: string;
        externalUrl?: string;
    } & CommonComponentPayload;
}
export interface TerminalComponent extends ResearchObjectV1Component {
    type: ResearchObjectComponentType.TERMINAL;
    payload: {
        logs: string;
    } & CommonComponentPayload;
}

export type Annotation = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    pageIndex?: number;
    move?: boolean;
    id: string;
    text?: string;
    title?: string;
};

export type ResearchObjectComponentAnnotation = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    pageIndex?: number;
    id: string;
    text?: string;
    title?: string;
    __client?: any; // client-only variables, deleted before saving to server
};
