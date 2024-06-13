import { EventProperties } from "../Types";
export declare const useEvents: () => {
    identity: ((userId: string, properties?: EventProperties | undefined) => void) | undefined;
    triggerEvent: (eventId: string, properties: EventProperties, featureId?: string) => void;
    buildEventName: (context: string, featureName: string, resource: string, action: string) => string;
};
