export type EventProperties = Record<string, string | number>;
export interface ProductHouseFeature {
    name: string;
    value?: boolean;
}
export interface AnalyticsRequest {
    event_id: string;
    feature_id?: string;
    properties?: EventProperties;
    user_id?: string;
    anonymous_id?: string;
    key: string;
}
export interface IdentityAnalyticsRequest {
    properties?: EventProperties;
    user_id?: string;
    anonymous_id: string;
    key: string;
}
export interface Feature {
    name: string;
    value: boolean;
}
