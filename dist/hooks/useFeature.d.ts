import { EventProperties } from "../Types";
export declare const useFeature: (featureId: string) => {
    featureFlag: boolean;
    triggerEvent: (eventId: string, properties: EventProperties) => void;
    buildEventName: (context: string, featureName: string, resource: string, action: string) => string;
    identity: ((userId: string) => void) | undefined;
};
