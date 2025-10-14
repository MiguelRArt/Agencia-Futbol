import { Request, Response } from "express";
export declare const createPlayer: (req: Request, res: Response) => Promise<void>;
export declare const getPlayers: (req: Request, res: Response) => Promise<void>;
export declare const getPlayerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePlayer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePlayer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=player.controller.d.ts.map