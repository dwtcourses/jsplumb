import { AnchorId, Face, Orientation, AnchorOptions, AnchorComputeParams } from "../factory/anchor-factory";
import { Anchor } from "./anchor";
import { Dictionary, jsPlumbInstance } from "../core";
import { Endpoint } from "../endpoint/endpoint-impl";
export interface ContinuousAnchorOptions extends AnchorOptions {
    faces?: Array<Face>;
    clockwise?: boolean;
}
export declare type FACE_MAP = Dictionary<boolean>;
export declare class ContinuousAnchor extends Anchor {
    instance: jsPlumbInstance;
    type: AnchorId;
    isDynamic: boolean;
    isContinuous: boolean;
    private clockwise;
    private faces;
    private secondBest;
    private lastChoice;
    private _currentFace;
    private _lockedFace;
    private _lockedAxis;
    private availableFaces;
    constructor(instance: jsPlumbInstance, anchorParams: ContinuousAnchorOptions);
    getDefaultFace(): Face;
    verifyEdge(edge: Face): Face;
    isEdgeSupported(edge: Face): boolean;
    setCurrentFace(face: Face, overrideLock?: boolean): void;
    getCurrentFace(): Face;
    getSupportedFaces(): Array<Face>;
    lock(): void;
    unlock(): void;
    isLocked(): boolean;
    lockCurrentAxis(): void;
    unlockCurrentAxis(): void;
    compute(params: AnchorComputeParams): [number, number, number, number];
    getCurrentLocation(params: AnchorComputeParams): [number, number, number, number];
    getOrientation(endpoint?: Endpoint): Orientation;
    getCssClass(): string;
}
