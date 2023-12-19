export type GenderType = 'MALE' | 'FEMALE'

export type IdType = {
  id: number
}

export type CreatedAtType = {
  createdAt: string
}

export type CommonModelType = IdType & CreatedAtType

export type MemberItemType = {
  email: string
  password: string
  name?: string
  nickname?: string
  gender?: GenderType
  phoneNumber?: string
  isSubmitted?: boolean
} & CommonModelType

// decoration 종류 type
export type ProvidedDecorationItemType = {
  description?: string
  file?: any
  scale: number
  location: string
} & CommonModelType

export type ProvidedDecorationListType = ProvidedDecorationItemType[]

// member가 선택한 decoration type
export type DecorationItemType = {
  providedDecorationId: number
} & ProvidedDecorationItemType

export type DecorationListType = DecorationItemType[]

export type TreeItemType = {
  member: MemberItemType
  submission: SubmissionItemType
  decorationList: DecorationListType
} & IdType

export type TreeListType = TreeItemType[]

export type DesignatedPersonType = {
  submissionId: number
  memberId: number
  sendMessage: string
  sendEmail: string
} & CommonModelType

export type SubmissionItemType = {
  memberId: number
  amount: number
  cardMessage?: string
  sendEmail?: string
  sendMessage?: string
  isActive?: boolean
} & CommonModelType

export type TestTreeListType = {
  name: string
  decorationList: {
    decorationType: any
    url: string
    position: [number, number, number] | any
    scale: [number, number, number] | any
    rotate: [number, number, number] | any
    type: string
    floor: any
    degree: number
  }[]
}[]
