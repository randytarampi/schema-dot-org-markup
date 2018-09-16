//@flow
import objectAssign from 'object-assign';
import {Context} from '../context';
import type { ContextType } from '../context';
import type { URLType } from '../types';
import type { TextType } from '../types';
import type { CreativeWorkType } from '../types';
import type { EventType } from '../types';
import type { ImageObjectType } from '../types';
import type { PropertyValueType } from '../types';
import type { ActionType } from '../types';
export type ThingType = {
    sameAs?: URLType,
    alternateName?: TextType,
    mainEntityOfPage?: CreativeWorkType | URLType,
    subjectOf?: CreativeWorkType | EventType,
    image?: ImageObjectType | URLType,
    description?: TextType,
    identifier?: URLType | TextType | PropertyValueType,
    name?: TextType,
    potentialAction?: ActionType,
    additionalType?: URLType,
    disambiguatingDescription?: TextType,
    url?: URLType,
    } & ContextType;

export class Thing extends Context {
    sameAs: URLType;
    alternateName: TextType;
    mainEntityOfPage: CreativeWorkType | URLType;
    subjectOf: CreativeWorkType | EventType;
    image: ImageObjectType | URLType;
    description: TextType;
    identifier: URLType | TextType | PropertyValueType;
    name: TextType;
    potentialAction: ActionType;
    additionalType: URLType;
    disambiguatingDescription: TextType;
    url: URLType;

    constructor(props : ThingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Thing');
    }
}