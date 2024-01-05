export interface IAbstractDiscoveryService {
    readonly serverTag: string;
    readonly nodeEnv: NDiscoveryService.NodeEnv

    init(): Promise<boolean>;
    destroy(): Promise<void>;

    getMandatory<T>(name: string): T;
    getString(name: string, def: string): string;
    getNumber(name: string, def: number): number;
    getBoolean(name: string, def: boolean): boolean;
    getArray<T>(name: string, def: Array<T>): Array<T>;
    getCertificateBuffer(path: string): Promise<Buffer>;
    getCertificateString(path: string): Promise<string>;
}

export namespace NDiscoveryService {
    export type NodeEnv = 'test' | 'development' | 'stage' | 'close-beta' |'close-alfa' | 'beta' | 'alfa' | 'production' | string
}