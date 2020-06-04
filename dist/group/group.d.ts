import { jsPlumbInstance } from "../core";
import { AnchorSpec, Connection, EndpointSpec, GroupManager } from "..";
export interface GroupOptions {
    id?: string;
    droppable?: boolean;
    enabled?: boolean;
    orphan?: boolean;
    constrain?: boolean;
    proxied?: boolean;
    ghost?: boolean;
    revert?: boolean;
    prune?: boolean;
    dropOverride?: boolean;
    anchor?: AnchorSpec;
    endpoint?: EndpointSpec;
}
export declare class UIGroup {
    instance: jsPlumbInstance;
    children: Array<any>;
    el: any;
    collapsed: boolean;
    droppable: boolean;
    enabled: boolean;
    orphan: boolean;
    constrain: boolean;
    proxied: boolean;
    ghost: boolean;
    revert: boolean;
    prune: boolean;
    dropOverride: boolean;
    anchor: AnchorSpec;
    endpoint: EndpointSpec;
    connections: {
        source: Array<Connection>;
        target: Array<Connection>;
        internal: Array<Connection>;
    };
    groups: Array<UIGroup>;
    manager: GroupManager;
    id: string;
    constructor(instance: jsPlumbInstance, el: any, options: GroupOptions);
    overrideDrop(el: any, targetGroup: UIGroup): boolean;
    getDragArea(): any;
    getAnchor(conn: Connection, endpointIndex: number): AnchorSpec;
    getEndpoint(conn: Connection, endpointIndex: number): EndpointSpec;
    add(_el: any, doNotFireEvent?: boolean): void;
    remove(el: any | Array<any>, manipulateDOM?: boolean, doNotFireEvent?: boolean, doNotUpdateConnections?: boolean, targetGroup?: UIGroup): void;
    removeAll(manipulateDOM?: boolean, doNotFireEvent?: boolean): void;
    private _orphan;
    orphanAll(): {};
}
