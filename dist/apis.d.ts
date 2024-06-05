import { AnalyticsRequest, ProductHouseFeature } from "./Types";
export declare const postEvent: (event: AnalyticsRequest) => Promise<void>;
export declare const getFeatures: () => ProductHouseFeature[];
