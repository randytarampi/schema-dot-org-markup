//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { LanguageType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { URLType } from '../types';
import type { OfferType } from '../types';
import type { EventType } from '../types';
import type { ProductType } from '../types';
import type { PersonType } from '../types';
import type { OrganizationType } from '../types';
import type { AudioObjectType } from '../types';
import type { InteractionCounterType } from '../types';
import type { AlignmentObjectType } from '../types';
import type { DateType } from '../types';
import type { DateTimeType } from '../types';
import type { PublicationEventType } from '../types';
import type { AggregateRatingType } from '../types';
import type { PlaceType } from '../types';
import type { MediaObjectType } from '../types';
import type { DurationType } from '../types';
import type { IntegerType } from '../types';
import type { BooleanType } from '../types';
import type { TripType } from '../types';
import type { CorrectionCommentType } from '../types';
import type { AudienceType } from '../types';
import type { ReviewType } from '../types';
import type { CommentType } from '../types';
import type { RatingType } from '../types';
import type { VideoObjectType } from '../types';
export type CreativeWorkType = {
    inLanguage?: LanguageType | TextType,
    copyrightYear?: NumberType,
    publishingPrinciples?: CreativeWorkType | URLType,
    offers?: OfferType,
    recordedAt?: EventType,
    material?: ProductType | TextType | URLType,
    sdPublisher?: PersonType | OrganizationType,
    accessibilityAPI?: TextType,
    audio?: AudioObjectType,
    translator?: OrganizationType | PersonType,
    interactionStatistic?: InteractionCounterType,
    fileFormat?: TextType | URLType,
    educationalAlignment?: AlignmentObjectType,
    learningResourceType?: TextType,
    dateModified?: DateType | DateTimeType,
    sdLicense?: CreativeWorkType | URLType,
    releasedEvent?: PublicationEventType,
    aggregateRating?: AggregateRatingType,
    discussionUrl?: URLType,
    citation?: TextType | CreativeWorkType,
    spatialCoverage?: PlaceType,
    character?: PersonType,
    datePublished?: DateType,
    sponsor?: PersonType | OrganizationType,
    keywords?: TextType,
    encoding?: MediaObjectType,
    timeRequired?: DurationType,
    about?: ThingType,
    sourceOrganization?: OrganizationType,
    workTranslation?: CreativeWorkType,
    commentCount?: IntegerType,
    isBasedOnUrl?: URLType | ProductType | CreativeWorkType,
    temporalCoverage?: URLType | TextType | DateTimeType,
    isFamilyFriendly?: BooleanType,
    license?: CreativeWorkType | URLType,
    associatedMedia?: MediaObjectType,
    mentions?: ThingType,
    award?: TextType,
    locationCreated?: PlaceType,
    encodingFormat?: TextType | URLType,
    copyrightHolder?: OrganizationType | PersonType,
    editor?: PersonType,
    hasPart?: CreativeWorkType | TripType,
    creator?: PersonType | OrganizationType,
    headline?: TextType,
    sdDatePublished?: DateType,
    accessibilitySummary?: TextType,
    dateCreated?: DateType | DateTimeType,
    correction?: URLType | TextType | CorrectionCommentType,
    translationOfWork?: CreativeWorkType,
    mainEntity?: ThingType,
    accessibilityFeature?: TextType,
    position?: IntegerType | TextType,
    exampleOfWork?: CreativeWorkType,
    audience?: AudienceType,
    typicalAgeRange?: TextType,
    contentLocation?: PlaceType,
    producer?: OrganizationType | PersonType,
    reviews?: ReviewType,
    educationalUse?: TextType,
    accessMode?: TextType,
    contentReferenceTime?: DateTimeType,
    publisherImprint?: OrganizationType,
    accessibilityHazard?: TextType,
    contributor?: PersonType | OrganizationType,
    version?: TextType | NumberType,
    provider?: PersonType | OrganizationType,
    publication?: PublicationEventType,
    isPartOf?: TripType | CreativeWorkType,
    funder?: PersonType | OrganizationType,
    accessibilityControl?: TextType,
    accountablePerson?: PersonType,
    genre?: URLType | TextType,
    thumbnailUrl?: URLType,
    isAccessibleForFree?: BooleanType,
    awards?: TextType,
    comment?: CommentType,
    publisher?: OrganizationType | PersonType,
    expires?: DateType,
    contentRating?: RatingType | TextType,
    isBasedOn?: CreativeWorkType | URLType | ProductType,
    workExample?: CreativeWorkType,
    author?: OrganizationType | PersonType,
    review?: ReviewType,
    schemaVersion?: URLType | TextType,
    video?: VideoObjectType,
    accessModeSufficient?: TextType,
    encodings?: MediaObjectType,
    interactivityType?: TextType,
    alternativeHeadline?: TextType,
    text?: TextType,
    } & ThingType;

export class CreativeWork extends Thing {
    inLanguage: LanguageType | TextType;
    copyrightYear: NumberType;
    publishingPrinciples: CreativeWorkType | URLType;
    offers: OfferType;
    recordedAt: EventType;
    material: ProductType | TextType | URLType;
    sdPublisher: PersonType | OrganizationType;
    accessibilityAPI: TextType;
    audio: AudioObjectType;
    translator: OrganizationType | PersonType;
    interactionStatistic: InteractionCounterType;
    fileFormat: TextType | URLType;
    educationalAlignment: AlignmentObjectType;
    learningResourceType: TextType;
    dateModified: DateType | DateTimeType;
    sdLicense: CreativeWorkType | URLType;
    releasedEvent: PublicationEventType;
    aggregateRating: AggregateRatingType;
    discussionUrl: URLType;
    citation: TextType | CreativeWorkType;
    spatialCoverage: PlaceType;
    character: PersonType;
    datePublished: DateType;
    sponsor: PersonType | OrganizationType;
    keywords: TextType;
    encoding: MediaObjectType;
    timeRequired: DurationType;
    about: ThingType;
    sourceOrganization: OrganizationType;
    workTranslation: CreativeWorkType;
    commentCount: IntegerType;
    isBasedOnUrl: URLType | ProductType | CreativeWorkType;
    temporalCoverage: URLType | TextType | DateTimeType;
    isFamilyFriendly: BooleanType;
    license: CreativeWorkType | URLType;
    associatedMedia: MediaObjectType;
    mentions: ThingType;
    award: TextType;
    locationCreated: PlaceType;
    encodingFormat: TextType | URLType;
    copyrightHolder: OrganizationType | PersonType;
    editor: PersonType;
    hasPart: CreativeWorkType | TripType;
    creator: PersonType | OrganizationType;
    headline: TextType;
    sdDatePublished: DateType;
    accessibilitySummary: TextType;
    dateCreated: DateType | DateTimeType;
    correction: URLType | TextType | CorrectionCommentType;
    translationOfWork: CreativeWorkType;
    mainEntity: ThingType;
    accessibilityFeature: TextType;
    position: IntegerType | TextType;
    exampleOfWork: CreativeWorkType;
    audience: AudienceType;
    typicalAgeRange: TextType;
    contentLocation: PlaceType;
    producer: OrganizationType | PersonType;
    reviews: ReviewType;
    educationalUse: TextType;
    accessMode: TextType;
    contentReferenceTime: DateTimeType;
    publisherImprint: OrganizationType;
    accessibilityHazard: TextType;
    contributor: PersonType | OrganizationType;
    version: TextType | NumberType;
    provider: PersonType | OrganizationType;
    publication: PublicationEventType;
    isPartOf: TripType | CreativeWorkType;
    funder: PersonType | OrganizationType;
    accessibilityControl: TextType;
    accountablePerson: PersonType;
    genre: URLType | TextType;
    thumbnailUrl: URLType;
    isAccessibleForFree: BooleanType;
    awards: TextType;
    comment: CommentType;
    publisher: OrganizationType | PersonType;
    expires: DateType;
    contentRating: RatingType | TextType;
    isBasedOn: CreativeWorkType | URLType | ProductType;
    workExample: CreativeWorkType;
    author: OrganizationType | PersonType;
    review: ReviewType;
    schemaVersion: URLType | TextType;
    video: VideoObjectType;
    accessModeSufficient: TextType;
    encodings: MediaObjectType;
    interactivityType: TextType;
    alternativeHeadline: TextType;
    text: TextType;

    constructor(props : CreativeWorkType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('CreativeWork');
    }
}