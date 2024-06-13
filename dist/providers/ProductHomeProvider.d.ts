import React, { ReactNode } from 'react';
import { EventProperties } from "src/Types";
interface MyContextProps {
    publicKey?: string;
    userId?: string;
    anonymousId?: string;
    identity?: (userId: string, properties?: EventProperties) => void;
}
export declare const ProductHouseContext: React.Context<MyContextProps>;
interface ProductHomeProviderProps {
    publicKey: string;
    children: ReactNode;
}
export declare const ProductHomeProvider: React.FC<ProductHomeProviderProps>;
export {};
