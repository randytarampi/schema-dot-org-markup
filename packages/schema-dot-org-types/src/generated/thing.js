//@flow
import objectAssign from 'object-assign';
import {Context} from '../context';
import type { ContextType } from '../context';
import type { TextType } from '../types';
import type { URLType } from '../types';
import type { EventType } from '../types';
import type { CreativeWorkType } from '../types';
import type { PropertyValueType } from '../types';
import type { ImageObjectType } from '../types';
import type { ActionType } from '../types';
export type ThingType = {
    disambiguatingDescription?: TextType,
    url?: URLType,
    subjectOf?: EventType | CreativeWorkType,
    identifier?: PropertyValueType | TextType | URLType,
    name?: TextType,
    sameAs?: URLType,
    alternateName?: TextType,
    mainEntityOfPage?: URLType | CreativeWorkType,
    image?: URLType | ImageObjectType,
    description?: TextType,
    potentialAction?: ActionType,
    additionalType?: URLType,
    } & ContextType;

export class Thing extends Context {
    disambiguatingDescription: TextType;
    url: URLType;
    subjectOf: EventType | CreativeWorkType;
    identifier: PropertyValueType | TextType | URLType;
    name: TextType;
    sameAs: URLType;
    alternateName: TextType;
    mainEntityOfPage: URLType | CreativeWorkType;
    image: URLType | ImageObjectType;
    description: TextType;
    potentialAction: ActionType;
    additionalType: URLType;

    constructor(props : ThingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Thing');
    }
}