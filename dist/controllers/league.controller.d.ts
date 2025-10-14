import { Request, Response } from "express";
export declare const getLeagues: (req: Request, res: Response) => Promise<void>;
export declare const getLeagueById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createLeague: (req: Request, res: Response) => Promise<void>;
export declare const updateLeague: (req: Request, res: Response) => Promise<void>;
export declare const deleteLeague: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=league.controller.d.ts.map