import { Request, Response } from "express";
export declare const getMatches: (req: Request, res: Response) => Promise<void>;
export declare const getMatchById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createMatch: (req: Request, res: Response) => Promise<void>;
export declare const updateMatch: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteMatch: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=match.controller.d.ts.map