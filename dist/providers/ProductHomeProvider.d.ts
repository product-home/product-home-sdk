import React, { ReactNode } from 'react';
interface MyContextProps {
    publicKey?: string;
    userId?: string;
    identity?: (userId: string) => void;
    anonymousId?: string;
}
export declare const ProductHouseContext: React.Context<MyContextProps>;
interface ProductHomeProviderProps {
    publicKey: string;
    children: ReactNode;
}
export declare const ProductHomeProvider: React.FC<ProductHomeProviderProps>;
export {};
