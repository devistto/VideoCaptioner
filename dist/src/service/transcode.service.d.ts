export declare class TranscodeService {
    validate(filePath: string): Promise<unknown>;
    extract(filePath: string): Promise<string>;
    burn(filePath: string, content: string): Promise<unknown>;
}
