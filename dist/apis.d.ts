import { AnalyticsRequest, IdentityAnalyticsRequest, ProductHouseFeature } from "./Types";
export declare const postEvent: (event: AnalyticsRequest) => Promise<void>;
export declare const postIdentity: (event: IdentityAnalyticsRequest) => Promise<void>;
export declare const getFeatures: () => ProductHouseFeature[];
